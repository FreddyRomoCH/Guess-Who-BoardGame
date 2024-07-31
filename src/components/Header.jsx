import { Debugger } from "../components/Debugger.jsx";
import { CharacterToFind } from "../components/CharacterToFind.jsx";
import { IS_DEVELOPMENT } from "../config.js";

export function Header() {
  return (
    <header className="relative flex flex-row items-center justify-start md:justify-center gap-6">
      {IS_DEVELOPMENT && <Debugger />}
      <picture>
        <img
          className="w-28 md:w-36"
          src="/images/guess-who.png"
          alt="Guess Who Logo"
        />
      </picture>
      <CharacterToFind />
    </header>
  );
}
