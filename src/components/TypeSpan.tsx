interface TypeSpanProps {
  type: string;
}

export function TypeSpan({ type }: TypeSpanProps) {
  return (
    <span
      className={`font-mono text-xs text-white ${
        type === "fire"
          ? "bg-red-500"
          : type === "water"
          ? "bg-blue-500"
          : type === "electric"
          ? "bg-yellow-500"
          : type === "grass"
          ? "bg-green-500"
          : type === "ice"
          ? "bg-cyan-200"
          : type === "fighting"
          ? "bg-orange-900"
          : type === "poison"
          ? "bg-purple-500"
          : type === "ground"
          ? "bg-amber-700"
          : type === "flying"
          ? "bg-sky-300"
          : type === "psychic"
          ? "bg-fuchsia-500"
          : type === "bug"
          ? "bg-lime-700"
          : type === "rock"
          ? "bg-amber-900"
          : type === "ghost"
          ? "bg-violet-500"
          : type === "dragon"
          ? "bg-emerald-500"
          : type === "dark"
          ? "bg-black-500"
          : type === "steel"
          ? "bg-teal-600"
          : type === "fairy"
          ? "bg-pink-600"
          : "bg-pink-400"
      } p-1 rounded`}
    >
      {type}
    </span>
  );
}
