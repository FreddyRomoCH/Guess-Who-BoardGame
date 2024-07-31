import { Board } from "./components/Board.jsx";
import { Questions } from "./components/Questions.jsx";
import { Header } from "./components/Header.jsx";
import { Tries } from "./components/Tries.jsx";
import { Loser } from "./components/Loser.jsx";
import { Winner } from "./components/Winner.jsx";
import { useQuestions } from "./hooks/useQuestions.js";

function App() {
  const { game, restartGame } = useQuestions();

  return (
    <main className="relative flex flex-col md:flex-row justify-center items-center gap-6 m-auto p-4 max-w-7xl overflow-auto 1xl:overflow-hidden">
      {game.isLoser && <Loser onClick={restartGame} />}
      {game.isWinner && <Winner onClick={restartGame} />}
      <section className="flex flex-col flex-grow justify-center items-center gap-4 w-full md:w-auto">
        <Header />
        <Board />
      </section>
      <section className="flex flex-col justify-between items-center md:w-80 xl:w-[410px]">
        <Tries />
        <Questions />
      </section>
    </main>
  );
}

export default App;
