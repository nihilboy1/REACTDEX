import { BouncingSnorlax } from "./components/BouncingSnorlax";
import { PokemonDetails } from "./components/PokemonDetails";
import { Sidebar } from "./components/Sideabar";
import { usePokeContext } from "./hooks/usePokeContext";

export interface pokeDataProps {
  name: string;
  url: string;
}

export function App() {
  const { pokeUrls } = usePokeContext();
  const { choosenPokemonID } = usePokeContext();
  return (
    <main className="h-[100vh] lg:h-[90em] bg-zinc-950 border-red-500">
      <div className="flex flex-row justify-between">
        <main className=" border-red-500 h-[100vh] w-full flex items-center justify-center">
          <div className="">
            {choosenPokemonID != 0 ? <PokemonDetails /> : <BouncingSnorlax />}
          </div>
        </main>
        <Sidebar pokeUrls={pokeUrls} />
      </div>
    </main>
  );
}
