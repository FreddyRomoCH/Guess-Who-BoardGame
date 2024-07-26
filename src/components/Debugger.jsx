import { useCharacters } from "../hooks/useCharacters.js";

export function Debugger() {
  const { game } = useCharacters();

  return (
    <div className="fixed top-0 left-0 bg-gray-500/30 w-96 h-36 overflow-auto">
      {JSON.stringify(game, null, 2)}
    </div>
  );
}
