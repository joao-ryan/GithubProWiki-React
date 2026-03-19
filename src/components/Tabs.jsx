export default function Tabs({ user }) {
  if (!user) return null;

  return (
    <div className="tabs">
      <span>Repositories ({user.public_repos})</span>
      <span>Followers ({user.followers})</span>
      <span>Following ({user.following})</span>
    </div>
  );
}