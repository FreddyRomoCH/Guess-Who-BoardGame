import { useBoard } from "../hooks/useBoard";

export function Tries() {
  const { game } = useBoard();

  let oneOportunityClass;

  if (game.oportunities > 2) {
    oneOportunityClass = "text-green-500";
  } else if (game.oportunities <= 1) {
    oneOportunityClass = "text-red-500";
  }

  return (
    <div className="bg-black/50 text-white text-center rounded-lg p-6 mb-10">
      <h2 className="text-3xl font-light tracking-wide mb-3">
        Please ask a question or click a card
      </h2>
      <p className={`font-thin text-2xl ${oneOportunityClass}`}>
        Tries: {game.oportunities}
      </p>
    </div>
  );
}
