import React from "react";

interface GameOverMessageProps {
  gameOver: boolean;
}

export const GameOverMessage: React.FC<GameOverMessageProps> = ( {gameOver} ) =>
{  
  return (
    <div className={`absolute z-30 h-full w-full ${gameOver ? "" : "hidden"}`}>
      <div className="flex flex-col justify-center items-center rounded-xl w-full h-full font-extrabold text-9xl text-center text-red-700">
        <span className="animate-pulse">
          GAME
        </span>
        <span className="animate-pulse">
          OVER
        </span>
      </div>
    </div>
  )
}