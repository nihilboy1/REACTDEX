import axios from "axios";
import { useEffect, useState } from "react";
import { usePokeContext } from "../hooks/usePokeContext";
import { TypeSpan } from "./TypeSpan";

type pokeTypeProps = {
  type: { name: string };
};

type pokeDataFetchProps = {
  id: string;
  name: string;
  weight: string;
  height: string;
  hp: string;
  attack: string;
  defense: string;
  speed: string;
  types: string[];
};

export function PokemonDetails() {
  const { choosenPokemonID, capitalizeString } = usePokeContext();
  const [pokeData, setPokeData] = useState<pokeDataFetchProps>();

  async function fetchPokemonByID() {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${choosenPokemonID}`
    );

    const pokeDataFetch: pokeDataFetchProps = {
      id: data.id,
      name: capitalizeString(data.name),
      hp: data.stats[0].base_stat,
      weight: data.weight,
      height: data.height,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      speed: data.stats[5].base_stat,
      types: data.types.map((type: pokeTypeProps) => {
        return type.type.name;
      }),
    };

    setPokeData(pokeDataFetch);
  }

  useEffect(() => {
    fetchPokemonByID();
  }, [pokeData]);
  return (
    <div className="absolute top-0 left-0 h-[100vh] w-full overflow-hidden ">
      {pokeData ? (
        <>
          <img
            className="ml-[12rem] blur-3xl scale-[2] overflow-hidden opacity-60 animate-pulse"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${choosenPokemonID}.png`}
            alt="pokemon image background"
            width={600}
          />
          <div className="absolute top-0 left-[11rem] w-[40rem] flex-col p-5  ">
            <h1 className="text-white text-center font-mono text-lg">
              {pokeData.name} <span className="underline italic">#{pokeData.id}</span>
            </h1>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${choosenPokemonID}.png`}
              alt="pokemon image"
              className="mx-auto mt-8 mb-5"
              width={300}
            />
            <div className="grid grid-cols-2  bg-zinc-800 bg-opacity-5 shadow-lg  w-[20rem] rounded-xl p-2 mx-auto ">
              <div className="flex gap-2 mb-3 justify-center  ">
                <p className="font-sans uppercase font-bold  ">Attack: </p>
                <span className="font-mono text-white">{pokeData.attack}</span>
              </div>
              <div className="flex gap-2 mb-3 justify-center  ">
                <p className="font-sans uppercase font-bold  ">Height: </p>
                <span className="font-mono text-white">{pokeData.height}</span>
              </div>
              <div className="flex gap-2 mb-3 justify-center ">
                <p className="font-sans uppercase font-bold  ">Defense: </p>
                <span className="font-mono text-white">{pokeData.defense}</span>
              </div>
              <div className="flex gap-2 mb-3 justify-center ">
                <p className="font-sans uppercase font-bold  ">Weight: </p>
                <span className="font-mono text-white">{pokeData.weight}</span>
              </div>
              <div className="flex gap-2 mb-3 justify-center ">
                <p className="font-sans uppercase font-bold  ">Speed: </p>
                <span className="font-mono text-white">{pokeData.speed}</span>
              </div>
              <div className="flex gap-2 mb-3 justify-center ">
                <p className="font-sans uppercase font-bold  ">HP: </p>
                <span className="font-mono text-white">{pokeData.hp}</span>
              </div>
              <div className="flex gap-2 mb-3 justify-center col-start-1 col-end-3 ">
                <p className="font-sans uppercase font-bold  ">Types: </p>
                {pokeData.types.map((type) => {
                  return <TypeSpan type={type} />;
                })}
              </div>
            </div>
          </div>
        </>
      ) : (
        <img
          className="animate-spin absolute top-[45%] left-[35%]"
          src="/assets/spinner-gap.svg"
        />
      )}
    </div>
  );
}
