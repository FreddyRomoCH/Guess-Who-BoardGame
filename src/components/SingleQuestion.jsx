export function SinqleQuestion({ question, id, onClick }) {
  return (
    <li
      key={id}
      className="cursor-pointer rounded-3xl bg-[#850E16] text-white w-full text-center p-1 box-border border-2 border-black shadow-question hover:transform hover:scale-105 transition-transform ease-linear"
      onClick={onClick}
    >
      <p className="text-base font-thin">{question}</p>
    </li>
  );
}
