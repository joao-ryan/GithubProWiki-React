<div className="user-card">
  <img src={user.avatar_url} />

  <div className="user-info">
    <h2>{user.name}</h2>
    <p>{user.bio}</p>
    <a href={user.html_url} target="_blank">Ver perfil</a>
  </div>
</div>

export default UserCard;