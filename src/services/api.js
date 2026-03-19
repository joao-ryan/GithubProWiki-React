const BASE_URL = "https://api.github.com/users";

export async function getUser(username) {
  const response = await fetch(`${BASE_URL}/${username}`);

  if (!response.ok) {
    throw new Error("Usuário não encontrado");
  }

  return await response.json();
}

export async function getRepos(username) {
  const response = await fetch(`${BASE_URL}/${username}/repos`);

  if (!response.ok) {
    throw new Error("Erro ao buscar repositórios");
  }

  return await response.json();
}