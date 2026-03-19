export default function UserCard({ user }) {
  if (!user) return null;

  return (
    <div>
      <img src={user.avatar_url} width="100" />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <a href={user.html_url} target="_blank">Ver perfil</a>
    </div>
  );
}