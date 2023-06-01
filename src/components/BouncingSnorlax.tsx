export function BouncingSnorlax() {
  let sleepingSnorlaxImageSize = 500;

  return (
    <div className="relative">
      <span className="absolute animate-bounce top-20 left-4">
        <img
          src="assets\choose.svg"
          alt="choose"
          width={100}
          height={100}
        />
      </span>
      <span className="absolute animate-bounce top-[4.4rem] left-[6.5rem]">
        <img src="assets\a.svg" alt="a" width={12} height={12} />
      </span>
      <span className="absolute animate-bounce top-8 left-[8.5rem]">
        <img
          src="assets\pokemon.svg"
          alt="pokemon"
          width={100}
          height={100}
        />
      </span>
      <span className="absolute animate-bounce top-[1.8rem] left-[15.5rem] rotate-[45deg]">
        <img src="assets\to.svg" alt="to" width={40} height={40} />
      </span>
      <span className="absolute animate-bounce top-[0.2rem] left-[18rem] -rotate-[20deg]">
        <img src="assets\see.svg" alt="see" width={60} height={60} />
      </span>
      <span className="absolute animate-bounce top-[-1rem] left-[24.5rem]">
        <img
          src="assets\details.svg"
          alt="details"
          width={90}
          height={90}
        />
      </span>
      <img
        src="assets\snorlax-sleeping.png"
        alt="sleeping snorlax"
        width={sleepingSnorlaxImageSize}
        height={sleepingSnorlaxImageSize}
      />
    </div>
  );
}
