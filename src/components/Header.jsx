// import { Debugger } from "../components/Debugger.jsx";
import { CharacterToFind } from "../components/CharacterToFind.jsx";

export function Header() {
  return (
    <header className="relative flex flex-row items-center justify-start md:justify-center gap-6">
      {/* <Debugger /> */}
      <picture>
        <img
          className="w-28 md:w-52"
          src="/images/guess-who.png"
          alt="Guess Who Logo"
        />
      </picture>
      <CharacterToFind />
    </header>
  );
}
