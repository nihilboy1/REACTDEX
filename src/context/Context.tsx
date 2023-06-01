import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";
import { pokeDataProps } from "../App";

export type ContextDataProps = {
  pokeUrls: pokeDataProps[];
  setChoosenPokemonID: (value: number) => void;
  capitalizeString: (value: string) => string;
  choosenPokemonID: number;
};

export const Context = createContext<ContextDataProps>({} as ContextDataProps);

type ContextProviderProps = {
  children: ReactNode;
};

export function ContextProvider({ children }: ContextProviderProps) {
  const [pokeUrls, setPokeUrls] = useState<pokeDataProps[]>([]);
  const [choosenPokemonID, setChoosenPokemonID] = useState<number>(0);

  function capitalizeString(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  async function fetchPokemons() {
    const PokemonFetchLimit = 151;
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${PokemonFetchLimit}`
    );

    setPokeUrls(data.results);
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <Context.Provider
      value={{ pokeUrls, setChoosenPokemonID, choosenPokemonID, capitalizeString }}
    >
      {children}
    </Context.Provider>
  );
}
