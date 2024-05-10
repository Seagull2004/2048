"use client"
import { useEffect, useState } from "react"
import "@/utils/engine"
import { VOID_MATRIX, alignLeftAndJoin, belong, deepCopy, generateRandomTile, isSameMatrix, moveAllDown, moveAllLeft, moveAllRight, moveAllUp, resetGame } from "@/utils/engine"
import { GameOverMessage } from "./GameOverMessage"
import { NewGameMessage } from "./NewGameMessage"
import { VictoryMessage } from "./VictoryMessage"
import { GetALifeMessage } from "./GetALifeMessage"
import { InfoSection } from "./InfoSection"
import { ScoreBoard } from "./ScoreBoard"
import { GridBase } from "./GridBase"
import { AllTiles } from "./AllTiles"

export const Game2048 = () =>
{
  const [arrangement, setArrangement] = useState<number[][]>(deepCopy(VOID_MATRIX))
  const [prevArrangement, setPrevArrangement] = useState<number[][]>(deepCopy(VOID_MATRIX))
  const [prevScore, setPrevScore] = useState(0)
  const [prevMovesCount, setPrevMovesCount] = useState(0)
  const [moveCount, setMoveCount] = useState(0)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [freshGame, setFreshGame] = useState(true)
  const [victory, setVictory] = useState(0) // 0 not win, 1 just win, > 1 continue after 2048
  const [getALife, setGetALife] = useState(0)
  
  
  const resetAll = () =>
  { 
    setArrangement(deepCopy(VOID_MATRIX));
    setPrevArrangement(deepCopy(VOID_MATRIX));
    setVictory(0)
    setPrevScore(0)
    setPrevMovesCount(0)
    setScore(0)
    setMoveCount(0)
    setGameOver(false)
    setFreshGame(true)
  }

  const colorBtn = (id: string) =>
  {
    const button = document.getElementById(id)
    if (button)
    {
      button.classList.add('bg-yellow-400')
      setTimeout(() => {
        button.classList.remove('bg-yellow-400')
      }, 200);
    }
  }

  const startGame = () =>
  { 
    setArrangement(resetGame().newMatrix);
    setPrevArrangement(deepCopy(VOID_MATRIX));
    setVictory(0)
    setPrevScore(0)
    setPrevMovesCount(0)
    setScore(0)
    setMoveCount(0)
    setGameOver(false)
    setFreshGame(false)
  }

  const restoreConfig = () =>
  {
    setGameOver(false)
    setVictory(0)
    setMoveCount(prevMovesCount)
    setArrangement(prevArrangement)
    setScore(prevScore)
  }

  const handleKeyDown = (e: KeyboardEvent) =>
  {
    let movedMatrix: number[][];
    let result: {
      movedMatrix: number[][],
      scoreMove: number,
    }


    switch (e.key)
    {
      case "r":
        colorBtn("R_btn")
        resetAll()
        return;
      case "Enter":
        colorBtn("S_btn")
        startGame()
        return;
      case "c":
        colorBtn("C_btn")
        restoreConfig()
        return;
      case "ArrowRight":
        colorBtn("AR_btn")
        result = moveAllRight(arrangement)
        movedMatrix = result.movedMatrix
        break
      case "ArrowLeft":
        
        colorBtn("AL_btn")
        result = moveAllLeft(arrangement)     
        movedMatrix = result.movedMatrix
        break
      case "ArrowUp":
        e.preventDefault() // evita che la pagina si muova al click
        colorBtn("AU_btn")
        result = moveAllUp(arrangement) 
        movedMatrix = result.movedMatrix
        break
      case "ArrowDown":
        e.preventDefault() // evita che la pagina si muova al click
        colorBtn("AD_btn")
        result = moveAllDown(arrangement)    
        movedMatrix = result.movedMatrix
            
        break
      
      default:
        return;
    }


    // if there is the logo on the screen i don't wanna change any tile
    // if the player want to play he has to press enter
    if (freshGame)
    {
      return
    }
    

    if (!isSameMatrix(arrangement, movedMatrix))
    {
      setScore(score + result.scoreMove)
      setPrevArrangement(arrangement)
      setPrevMovesCount(moveCount)
      setPrevScore(score)

      if (belong(movedMatrix, 2048)) 
      {
        if (victory < 2)
        {
          setVictory(victory + 1)
        }
      }
      if (belong(movedMatrix, 131072)) 
      {
        if (getALife < 2)
        {
          setGetALife(getALife + 1)
        }
      }

      let out = generateRandomTile(movedMatrix)

      setArrangement(out.newMatrix)
      setGameOver(out.gameOver)
      setMoveCount(moveCount + 1)
    }
  }

  useEffect(() =>
  {
    window.addEventListener('keydown', handleKeyDown)

    return () =>
    {
      window.removeEventListener('keydown', handleKeyDown)
    }

  })
  
  return (
    <div className="flex flex-col justify-center items-center">
      <ScoreBoard restoreConfig={restoreConfig} moveCount={moveCount} prevMovesCount={prevMovesCount} score={score}/>
      <main className="relative z-10 gap-2 grid grid-cols-4 w-[440px] h-[440px]">
        <GameOverMessage gameOver={gameOver}/>
        <NewGameMessage freshGame={freshGame} />
        <VictoryMessage victory={victory} />
        <GetALifeMessage getALife={getALife} />

        <AllTiles arrangement={arrangement} shadowed={victory == 1 || getALife == 1 || gameOver || freshGame} />
        <GridBase shadowed={victory == 1 || getALife == 1 || gameOver || freshGame}/>
      </main>
      <InfoSection />
    </div>
  )
}