import { useEffect, useState } from "react";
import axios from "axios";

function test() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            #{user.id}: {user.title} {user.completed}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default test;