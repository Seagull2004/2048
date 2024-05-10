import { Game2048 } from "@/components/Game2048";

export default function Home() 
{
  return (
    <div className="relative flex justify-center items-start bg-gradient-to-tr from-gray-800 to-gray-900 min-h-screen">
      <div className="z-50 absolute flex flex-col justify-center items-center sm:hidden bg-gray-800 w-full h-screen text-center text-white">
        <div className="p-5 text-8xl scale-150">
          ⚠
        </div>
        <div className="p-10">
          Pls run this game on a bigger screen for a better experience
        </div>
      </div>
      <Game2048/>
    </div>
  );
}