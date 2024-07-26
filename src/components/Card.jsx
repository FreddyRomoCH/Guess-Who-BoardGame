export function Card({ name, image, onClick, found }) {
  return (
    <div
      className="relative bg-indigo-800 w-20 cursor-pointer h-[150px] p-1"
      onClick={onClick}
    >
      {found && (
        <div className="bg-red-900/90 w-full h-full absolute top-0 left-0 z-10"></div>
      )}
      <img src={image} alt={name} />
      <h2 className="text-base font-light text-indigo-100 text-center">
        {name}
      </h2>
    </div>
  );
}
