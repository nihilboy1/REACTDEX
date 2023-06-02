import { usePokeContext } from "../hooks/usePokeContext";

interface pokemonBarProps {
  id: string | null;
  name: string;
}

export function PokemonBar({ id, name }: pokemonBarProps) {
  let pokemonIconSize = 55;
  const { setChoosenPokemonID, capitalizeString, choosenPokemonID } =
    usePokeContext();
  const selectedPokemon = choosenPokemonID == Number(id) ? true : false;
  const capitalizedName = capitalizeString(name);

  return (
    <button
      onClick={() => setChoosenPokemonID(Number(id))}
      className={`shadow-lg mt-2 h-16 w-full bg-zinc-800 hover:bg-zinc-900  flex items-center justify-start gap-3 rounded-md border  cursor-pointer opacity-90 hover:opacity-100 hover:border ${
        selectedPokemon ? "hover:border-red-400" : "hover:border-white"
      } ${selectedPokemon ? "border-red-400" : "border-zinc-900"} `}
    >
      <div className="flex justify-center items-center bg-zinc-900 rounded-r-xl rounded-l-sm w-20 h-14 ml-1 shadow-md">
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
