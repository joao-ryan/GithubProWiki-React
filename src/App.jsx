import { useState } from "react";
import Search from "./components/Search";
import UserCard from "./components/UserCard";
import { getUser } from "./services/api";

function App() {
  const [user, setUser] = useState(null);

  async function handleSearch(username) {
    try {
      const data = await getUser(username);
      setUser(data);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <h1>GitFind PRO</h1>
      <Search onSearch={handleSearch} />
      <UserCard user={user} />
    </div>
  );
}

export default App;