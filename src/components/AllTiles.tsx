import React from "react";

interface GameOverMessageProps {
  arrangement: number[][]
  shadowed: boolean;
}

export const AllTiles: React.FC<GameOverMessageProps> = ( {arrangement, shadowed} ) =>
{  
  return (
    <div className={`z-20 absolute gap-2 grid grid-cols-4 w-[440px] h-[440px] ${shadowed ? "opacity-50" : ""}`}>
      {
        arrangement.map((item, i) => 
        {
          return (
            (item.map((item2, i2) =>
            {  
              let style = ""
              switch(item2)
              {
                case 0:
                  style = "text-white opacity-0 text-3xl"
                  break
                case 2:
                  style = "text-white  bg-pink-600 text-3xl"
                  break
                case 4:
                  style = "text-white  bg-purple-700 text-3xl"
                  break
                case 8:
                  style = "text-white bg-blue-900 text-3xl"
                  break
                case 16:
                  style = "text-white bg-blue-600 text-3xl"
                  break
                case 32:
                  style = "text-white bg-green-700 text-3xl"
                  break
                case 64:
                  style = "text-white bg-green-500 text-3xl"
                  break
                case 128:
                  style = "text-white bg-yellow-500 text-3xl"
                  break
                case 256:
                  style = " bg-orange-600 text-white text-3xl"
                  break
                case 512:
                  style = "text-white bg-red-500 text-3xl "
                  break
                case 1024:
                  style = "text-white bg-red-700 text-3xl"
                  break
                case 2048:
                  style = "text-white bg-black shadow-xl shadow-red-500 text-3xl"
                  break
                case 4096:
                  style = "text-white bg-black shadow-xl shadow-pink-500 text-3xl"
                  break
                case 8192:
                  style = "text-white bg-black shadow-xl shadow-purple-600 text-3xl"
                  break
                case 16384:
                  style = "text-white bg-black shadow-xl  shadow-indigo-500 text-3xl"
                  break
                case 32768:
                  style = "text-white bg-black shadow-xl shadow-cyan-600 hover:bg-blue-200 transition-all duration-500 text-3xl"
                  break
                case 65536:
                  style = "text-white bg-black shadow-lg shadow-yellow-400 text-2xl" 
                  break
                case 131072:
                  style = "text-white bg-black shadow-lg shadow-yellow-400 text-2xl" 
                  break
                default:
                  style = "text-white bg-black"
              }
              return (
                <div key={i2} className={`flex justify-center items-center rounded-xl w-full h-full border-2 border-blue-100 font-extrabold ${style}`}>
                  {item2}
                </div>
              )
            }))
          )
        })
      }
    </div>
  )
}


