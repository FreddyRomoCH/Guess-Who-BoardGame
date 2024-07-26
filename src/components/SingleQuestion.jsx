export function SinqleQuestion({ question, id, onClick }) {
  return (
    <li
      key={id}
      className="cursor-pointer hover:bg-gray-200 p-2"
      onClick={onClick}
    >
      {question}
    </li>
  );
}
