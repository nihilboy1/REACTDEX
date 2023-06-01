import { pokeDataProps } from "../App";
import { usePokeContext } from "../hooks/usePokeContext";
import { PokemonBar } from "./PokemonBar";

interface SidebarProps {
  pokeUrls: pokeDataProps[];
}

export function Sidebar({ pokeUrls }: SidebarProps) {
  let pokeballSize = 70;

  const { setChoosenPokemonID } = usePokeContext();

  function getIdFromUrl(url: string): string | null {
    const regex = /pokemon\/(\d+)/;
    const numerosEncontrados = url.match(regex);

    if (numerosEncontrados && numerosEncontrados.length >= 2) {
      return numerosEncontrados.slice(1).map(Number).join();
    } else {
      return null;
    }
  }

  return (
    <nav className="mr-12 mt-1 z-40 ">
      <button
        onClick={() => setChoosenPokemonID(0)}
        className="flex flex-row items-center gap-2 justify-center w-full"
      >
        <h1 className="font-mono text-white text-2xl ">ReactDex</h1>
        <img
          src="/assets/pokeball.png"
          width={pokeballSize}
          height={pokeballSize}
          alt="Pokeball icon"
        />
      </button>
      <div className="scrollbarhidden h-[30rem] w-[20rem] bg-zinc-900 p-4 rounded-md overflow-hidden hover:overflow-y-auto">
        {pokeUrls.map((pokeData) => {
          const id = getIdFromUrl(pokeData.url);
          return <PokemonBar key={id} id={id} name={pokeData.name} />;
        })}
      </div>
      <footer className="text-center text-white font-mono text-[0.5rem] mt-1.5">
        Coded by: <span className="text-red-500">@Nihilboy</span>
      </footer>
    </nav>
  );
}
