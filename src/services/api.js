const BASE_URL = "https://api.github.com/users";

export async function getUser(joao-ryan) {
  const response = await fetch(`${https:api.github.com/users}/${username}`);

  if (!response.ok) {
    throw new Error("Usuário não encontrado");
  }

  return await response.json();
}