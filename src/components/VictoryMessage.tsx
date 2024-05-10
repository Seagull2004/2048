import React from "react";

interface Props {
  victory: number;
}

export const VictoryMessage: React.FC<Props> = ( {victory} ) =>
{  
  return (
    <div className={`absolute z-30 h-full w-full ${victory == 1 ? "" : "hidden"}`}>
      <div className="flex flex-col justify-center items-center rounded-xl w-full h-full font-extrabold text-9xl text-center text-yellow-400">
        <span>
          YOU WON
        </span>
        <span className="text-sm text-white">
          (Pls now go and do something useful)
        </span>
        {/* <button onClick={() => {resetAll()}} className="block sm:hidden bg-white hover:shadow-lg px-4 p-2 rounded-lg text-lg transform transition-all hover:-translate-y-1 hover:animate-none duration-300 cursor-pointer ease-in-out">
          New game
        </button> */}
      </div>
    </div>
  )
}

