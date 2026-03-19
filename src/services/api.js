const BASE_URL = "https://api.github.com/users";

export async function getUser(joao-ryan) {
const response = await fetch(`${USER_BASE_URL}/${username}`);

if (!response.ok) {
    throw new Error("Usuário não encontrado");
}

return await response.json();
}