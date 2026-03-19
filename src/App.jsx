import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Search from "./components/Search";
import UserCard from "./components/UserCard";
import RepoList from "./components/RepoList";
import { useGithub } from "./hooks/useGithub";

function App() {
  const { user, repos, loading, error, fetchGithubData } = useGithub();

  return (
    <>
      <Header />

      <div className="container">
        <Search onSearch={fetchGithubData} />

        {loading && <p>Carregando...</p>}
        {error && <p>{error}</p>}

        <UserCard user={user} />
        <Tabs user={user} />
        <RepoList repos={repos} />
      </div>
    </>
  );
}

export default App;