import { useState } from "react";

export default function Search({ onSearch }) {
  const [input, setInput] = useState("");

  function handleSearch() {
    if (!input) return;
    onSearch(input);
  }

  return (
    <div>
      <input
        placeholder="Digite usuário do GitHub"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}