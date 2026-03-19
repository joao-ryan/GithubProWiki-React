import Search from "./components/Search";
import UserCard from "./components/UserCard";
import RepoList from "./components/RepoList";
import { useGithub } from "./hooks/useGithub";
import "./styles/global.css";


function App() {
  const { user, repos, loading, error, fetchGithubData } = useGithub();

  return (
    <div>
      <h1>GitFind PRO</h1>

      <Search onSearch={fetchGithubData} />

      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}

      <UserCard user={user} />
      <RepoList repos={repos} />
    </div>
  );
}

export default App;