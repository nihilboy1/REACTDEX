import axios from "axios";
import { useEffect, useState } from "react";
import { usePokeContext } from "../hooks/usePokeContext";

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
            className="ml-[16rem] blur-3xl scale-[2] overflow-hidden opacity-60 animate-pulse"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${choosenPokemonID}.png`}
            alt="pokemon image background"
            width={500}
          />
          <div className="absolute top-0 left-[11rem] w-[40rem] flex-col p-5  ">
            <h1 className="text-white text-center font-mono text-lg">
              {pokeData.name} #{pokeData.id}
            </h1>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${choosenPokemonID}.png`}
              alt="pokemon image"
              className="mx-auto mt-8 mb-5"
              width={300}
            />
            <div className="grid grid-cols-2 bg-white bg-opacity-30 w-[20rem] rounded p-2 mx-auto">
              <div className="flex gap-2 mb-2 ">
                <p className="font-sans uppercase font-bold">Attack: </p>
                <span className="font-mono text-white">{pokeData.attack}</span>
              </div>
              <div className="flex gap-2 mb-2  ">
                <p className="font-sans uppercase font-bold">Height: </p>
                <span className="font-mono text-white">{pokeData.height}</span>
              </div>
              <div className="flex gap-2 mb-2 ">
                <p className="font-sans uppercase font-bold">Defense: </p>
                <span className="font-mono text-white">{pokeData.defense}</span>
              </div>
              <div className="flex gap-2 mb-2 ">
                <p className="font-sans uppercase font-bold">Weight: </p>
                <span className="font-mono text-white">{pokeData.weight}</span>
              </div>
              <div className="flex gap-2 mb-2 ">
                <p className="font-sans uppercase font-bold">Speed: </p>
                <span className="font-mono text-white">{pokeData.speed}</span>
              </div>
              <div className="flex gap-2 mb-2 ">
                <p className="font-sans uppercase font-bold">HP: </p>
                <span className="font-mono text-white">{pokeData.hp}</span>
              </div>
              <div className="flex gap-2 mb-2 items-center ">
                <p className="font-sans uppercase font-bold">Types: </p>
                {pokeData.types.map((type) => {
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
