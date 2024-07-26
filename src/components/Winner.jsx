export function Winner({ onClick }) {
  return (
    <div className="flex flex-col justify-center bg-indigo-600 p-4 gap-4">
      <h1 className="text-4xl text-center text-white">
        Congratulations, You won!
      </h1>
      <button
        className="bg-indigo-200 text-indigo-600 rounded p-3"
        onClick={onClick}
      >
        Play Again
      </button>
    </div>
  );
}
