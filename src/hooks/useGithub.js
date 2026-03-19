import { useState } from "react";
import { getUser, getRepos } from "../services/api";

export function useGithub() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchGithubData(username) {
    try {
      setLoading(true);
      setError("");

      const userData = await getUser(username);
      const reposData = await getRepos(username);

      setUser(userData);
      setRepos(reposData);
    } catch (err) {
      setError(err.message);
      setUser(null);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  }

  return { user, repos, loading, error, fetchGithubData };
}