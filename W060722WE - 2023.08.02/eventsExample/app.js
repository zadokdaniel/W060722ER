class Events {
  _events = {};

  on(eventName, fn) {
    this._events[eventName] = Array.isArray(this._events[eventName])
      ? [...this._events[eventName], fn]
      : [fn];
  }

  emit(eventName, ...args) {
    if (!this._events[eventName]) {
      return;
    }

    this._events[eventName].forEach((fn) => fn(...args));
  }
}

const events = new Events();

events.on("bla", (a) => console.log("bla happend 1", a));
events.on("bla", (a) => console.log("bla happend2", a));
events.on("bla", (a) => console.log("bla happend3", a));
events.on("bla", (a) => console.log("bla happend4", a));
events.on("bla", (a) => console.log("bla happend5", a));
events.on("bla", (a) => console.log("bla happend6", a));

events.emit("bla", "hello");
events.emit("bla", 500);
events.emit("bla", 600);

class TodoManager extends Events {
  _todos = [];

  add(title) {
    const newTodo = {
      title,
      isComplete: false,
      createdAt: Date.now(),
    };

    this._todos = [...this._todos, newTodo];

    this.emit("add", newTodo);
  }

  remove() {
    this.emit("removed");
  }
  getAll() {}
  getOne() {}
}

const tm = new TodoManager();

tm.add("kdjf");
tm.add("kdjf");
tm.add("kdjf");
tm.add("kdjf");
tm.add("kdjf");
tm.add("kdjf");
tm.add("kdjf");

tm.on("add", () => console.log("added"));
tm.on("removed");

tm.add("kdjf");
