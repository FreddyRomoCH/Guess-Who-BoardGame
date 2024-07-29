import { Board } from "./components/Board.jsx";
import { Questions } from "./components/Questions.jsx";
import { Header } from "./components/Header.jsx";
import { Tries } from "./components/Tries.jsx";

function App() {
  return (
    <main className="relative flex flex-row justify-center items-center gap-6 m-auto p-8 max-w-7xl h-screen w-screen bg-gradient-to-b from-[#6C61F5] to-[#1C115E]">
      <section className="flex flex-col flex-grow justify-center items-center gap-4">
        <Header />
        <Board />
      </section>
      <section className="flex flex-col justify-between items-center w-[410px]">
        <Tries />
        <Questions />
      </section>
    </main>
  );
}

export default App;
