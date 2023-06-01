import { usePokeContext } from "../hooks/usePokeContext";

interface pokemonBarProps {
  id: string | null;
  name: string;
}

export function PokemonBar({ id, name }: pokemonBarProps) {
  let pokemonIconSize = 55;
  const { setChoosenPokemonID, capitalizeString } = usePokeContext();

  const capitalizedName = capitalizeString(name);

  return (
    <button
      onClick={() => setChoosenPokemonID(Number(id))}
      className="group mt-2 h-16 w-full bg-zinc-800 flex items-center justify-start gap-3 rounded-md border border-transparent cursor-pointer opacity-90 hover:opacity-100 hover:border hover:border-white"
    >
      <div className="flex justify-center items-center bg-zinc-700 group-hover:bg-zinc-600 rounded-r-xl rounded-l-sm w-20 h-14 ml-1">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt="pokemon icon"
          width={pokemonIconSize}
          height={pokemonIconSize}
        />
      </div>
      <h2 className="text-zinc-50">{capitalizedName}</h2>
      <span className="text-white font-bold">#{id}</span>
    </button>
  );
}
