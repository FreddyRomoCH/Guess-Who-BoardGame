export function SinqleQuestion({ question, id, onClick, answer }) {
  return (
    <li
      key={id}
      className="cursor-pointer rounded-3xl bg-[#850E16] text-white w-full text-center p-1 box-border border-2 border-black shadow-question hover:transform hover:scale-105 transition-transform ease-linear"
      onClick={onClick}
    >
      <p className="text-xs lg:text-base font-thin">{question}</p>
      <p className="hidden">{answer ? "It's True" : "False!!"}</p>
    </li>
  );
}
