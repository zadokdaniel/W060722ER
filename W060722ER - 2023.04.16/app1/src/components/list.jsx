import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import { useStatePersist } from "../hook/usePersistantState";

const List = () => {
  const [input, setInput] = useState("");
  const [inputKey, setInputKey] = useState("list");

  const [list, setList] = useStatePersist(inputKey, (listFromBefore) => {
    return listFromBefore
      ? listFromBefore.map((item) => ({
          ...item,
          createdAt: new Date(item.createdAt),
        }))
      : [];
  });

  const add = (title) => {
    setList((list) => [...list, { title, id: uuid(), createdAt: new Date() }]);
    setInput("");
  };

  const remove = (id) => {
    setList((list) => list.filter((item) => item.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            add(input);
          }
        }}
      />
      <input
        type="text"
        value={inputKey}
        onChange={(e) => setInputKey(e.target.value)}
      />

      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.id}. {item.title} - {item.createdAt.toLocaleTimeString()}
            <button onClick={() => remove(item.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
