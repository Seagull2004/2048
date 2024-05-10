import React from "react";
import backArrow from "@/../public/backArrow.svg"
import Image from "next/image";

interface Props {
  restoreConfig: any;
  moveCount: number;
  prevMovesCount: number;
  score: number;
}

export const ScoreBoard: React.FC<Props> = ( {restoreConfig, moveCount, prevMovesCount, score} ) =>
{  
  return (
    <header className="flex flex-row justify-between p-3 w-full transform transition-all duration-300">
      <span className="flex flex-row justify-center items-center transform transition-all duration-300">
        <button onClick={restoreConfig} className={`opacity-0 px-2 transform transition-all duration-300 ${prevMovesCount < moveCount ? "opacity-100" : ""}`}>
          <Image
          src={backArrow}
          alt="back"
          width={30}
          height={30}
          className="w-auto h-5 invert"
          />
        </button>
        <span className="transform transition-all duration-300">
          Moves: {moveCount}
        </span>
      </span>
      <span>
        Score: {score}
      </span>
    </header>
  )
}