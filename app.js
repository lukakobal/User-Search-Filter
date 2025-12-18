import { useState } from "react";
import "./styles.css";

const users = ["Luka", "Mark", "Ana", "Petra", "Miha", "Barbara", "Janez"];

export default function App() {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    user.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="container">
      <h1>User Search</h1>
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredUsers.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
