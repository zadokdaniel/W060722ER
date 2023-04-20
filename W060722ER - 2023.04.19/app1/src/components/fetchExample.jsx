import { useEffect, useState } from "react";

const FetchExample = () => {
  const [select, setSelect] = useState("1");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const ac = new AbortController();

    const getUserData = async () => {
      console.log(select);

      const response = await fetch(`http://localhost:4000/users/${select}`, {
        signal: ac.signal,
      });
      const data = await response.json();

      setUser(data);
    };

    getUserData();

    return () => {
      ac.abort();
    };
  }, [select]);

  return (
    <div>
      <br />
      <br />

      <select value={select} onChange={(e) => setSelect(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>

      <div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </div>
  );
};

export default FetchExample;
