import { FaGithub } from "react-icons/fa";
export default function Header() {
  return (
    <header className="header">
      <h2><FaGithub /> GitHub Clone</h2>
      <input placeholder="Search or jump to..." />
    </header>
  );
}