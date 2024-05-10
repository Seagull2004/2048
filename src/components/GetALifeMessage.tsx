import React from "react";

interface Props {
  getALife: number;
}

export const GetALifeMessage: React.FC<Props> = ( {getALife} ) =>
{  
  return (
    <div className={`absolute z-30 h-full w-full ${getALife == 1 ? "" : "hidden"}`}>
      <div className="flex flex-col justify-center items-center rounded-xl w-full h-full font-extrabold text-9xl text-center text-yellow-400">
        <span>
          BRO
        </span>
        <span className="text-sm text-white">
          Get out and get a life
        </span>
        {/* <button onClick={() => {resetAll()}} className="block sm:hidden bg-white hover:shadow-lg px-4 p-2 rounded-lg text-lg transform transition-all hover:-translate-y-1 hover:animate-none duration-300 cursor-pointer ease-in-out">
          New game
        </button> */}
      </div>
    </div>
  )
}

