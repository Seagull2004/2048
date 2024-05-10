export const InfoSection = () =>
{  
  return (
    <div className="gap-5 grid grid-col-1 p-5 w-full">
      <span className="flex flex-row items-center w-full">
        <div id="S_btn" className="flex justify-center items-center border-2 border-yellow-400 bg-opacity-65 mr-3 p-2 rounded-lg w-12 h-12 text-2xl text-bold text-yellow-400 transform transition-all duration-100">
          ↵
        </div>
        <div>
          Start a new game
        </div>
      </span>
      <span className="flex flex-row items-center w-full">
        <div id="C_btn" className="flex justify-center items-center border-2 border-yellow-400 bg-opacity-65 mr-3 p-2 rounded-lg w-12 h-12 text-2xl text-bold text-yellow-400 transform transition-all duration-100">
          C
        </div>
        <div>
          Cancel last move
        </div>
      </span>
      <span className="flex flex-row items-center w-full">
        <div id="R_btn" className="flex justify-center items-center border-2 border-yellow-400 bg-opacity-65 mr-3 p-2 rounded-lg w-12 h-12 text-2xl text-bold text-yellow-400 transform transition-all duration-100">
          R
        </div>
        <div>
          Reset All
        </div>
      </span>
      <span className="flex flex-row items-center w-full">
        <div id="AU_btn" className="flex justify-center items-center border-2 border-yellow-400 bg-opacity-65 mr-3 p-2 rounded-lg w-12 h-12 text-2xl text-bold text-yellow-400 transform transition-all duration-100">
          ⬆
        </div>
        <div id="AD_btn" className="flex justify-center items-center border-2 border-yellow-400 bg-opacity-65 mr-3 p-2 rounded-lg w-12 h-12 text-2xl text-bold text-yellow-400 transform transition-all duration-100">
          ⬇
        </div>
        <div id="AL_btn" className="flex justify-center items-center border-2 border-yellow-400 bg-opacity-65 mr-3 p-2 rounded-lg w-12 h-12 text-2xl text-bold text-yellow-400 transform transition-all duration-100">
          ⬅
        </div>
        <div id="AR_btn" className="flex justify-center items-center border-2 border-yellow-400 bg-opacity-65 mr-3 p-2 rounded-lg w-12 h-12 text-2xl text-bold text-yellow-400 transform transition-all duration-100 rotate-180">
          ⬅
        </div>
        <div>
          Move the tiles
        </div>
      </span>
    </div>
  )
}

