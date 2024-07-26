import { Board } from "./components/Board.jsx";
import { Questions } from "./components/Questions.jsx";
import { Header } from "./components/Header.jsx";

function App() {
  return (
    <main className="p-3">
      <Header />
      <section className="flex flex-row justify-around items-center p-6 gap-4">
        <Board />
        <Questions />
      </section>
    </main>
  );
}

export default App;
