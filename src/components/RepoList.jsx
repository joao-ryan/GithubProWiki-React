import { FaBook } from "react-icons/fa";

export default function RepoList({ repos }) {
  if (!repos.length) return null;

  return (
    <div className="repo-list">
      <h3>Repositórios:</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank">
              <FaBook /> {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}