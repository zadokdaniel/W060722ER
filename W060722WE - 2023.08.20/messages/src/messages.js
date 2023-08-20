const { v4: uuid } = require("uuid");

let messages = [];

function sendMessage({ to, from = "anonymous", message }) {
  if (!to) {
    throw new Error("must provide a name to send to");
  }

  if (message.length <= 2) {
    throw new Error("message must be at least 2 characters");
  }

  const newMessage = {
    id: uuid(),
    to,
    from: from,
    message,
    createdAt: new Date(),
  };

  messages.push(newMessage);

  return newMessage;
}

function get() {
  return messages;
}

function getById(id) {
  const foundMessage = messages.find((message) => message.id === id);

  if (!foundMessage) {
    throw new Error(`message with the id '${id}' does not exist`);
  }

  return foundMessage;
}
function getByFrom(from) {
  const foundMessages = messages.filter((message) => message.from === from);

  return foundMessages;
}
function getByTo(to) {
  const foundMessages = messages.filter((message) => message.to === to);

  return foundMessages;
}
function getByDate(fromDate, toDate = new Date()) {
  if (fromDate > toDate) {
    throw new Error("from cannot be greater than to");
  }

  return messages.filter(
    (message) => message.createdAt >= fromDate && message.createdAt <= toDate
  );
}

function clearInbox(to) {
  const { inResult = [], outResult = [] } = categorizeArray(messages, (item) =>
    item.to === to ? "inResult" : "outResult"
  );

  messages = outResult;

  return inResult;
}
function deleteId(id) {
  const { inResult = [], outResult = [] } = categorizeArray(messages, (item) =>
    item.id === id ? "inResult" : "outResult"
  );

  messages = outResult;

  const deletedMessages = inResult[0];

  if (!deletedMessages) {
    throw new Error(`id "${id}" was not found`);
  }

  return deletedMessages;
}

function categorizeArray(arr, fn = () => {}) {
  const result = {};

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const key = fn(item, i, arr);

    if (Array.isArray(result[key])) {
      result[key].push(item);
    } else {
      result[key] = [item];
    }
  }

  return result;
}

module.exports = {
  sendMessage,
  get,
  getById,
  getByFrom,
  getByTo,
  getByDate,
  clearInbox,
  deleteId,
};
