import { useContext } from "react";

import { Context } from "../context/Context";

export function usePokeContext() {
  const pokeContext = useContext(Context);
  return pokeContext;
}
