import { FaUser } from "react-icons/fa";

export default function UserCard({ user }) {
  if (!user) return null;

  return (
  <div className="user-card">
  <img src={user.avatar_url} />

  <div className="user-info">
    <h2>{user.name}</h2>
    <p><FaUser /> {user.bio}</p>
    <a href={user.html_url} target="_blank">Ver perfil</a>
  </div>
</div>
  );
}