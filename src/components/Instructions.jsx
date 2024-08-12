export function Instructions({ handleIntructionsClose }) {
  return (
    <div className="bg-instructions absolute flex flex-col justify-center items-center z-50 bg-black/85 top-0 left-0 w-full h-full overflow-hidden">
      <div className="relative bg-[#850E16] p-4 rounded-lg flex flex-col justify-between items-center w-10/12 md:w-1/2">
        <div
          className="close absolute w-16 h-16 -top-8 -right-8 cursor-pointer"
          onClick={handleIntructionsClose}
        >
          <picture>
            <img src="/close.svg" alt="Close Modal" />
          </picture>
        </div>
        <h2 className="text-white font-bold text-3xl mb-5">Instructions</h2>
        <ul className="flex flex-col justify-between items-left gap-3 text-white text-lg">
          <li>- Guess the mystery person.</li>
          <li>- Ask a question or guess who the mystery person is.</li>
          <li>
            - Do not use your turn to guess the mystery person until you are
            ready!
          </li>
          <li>- if your guess is wrong you lose the game!</li>
        </ul>
      </div>
    </div>
  );
}
