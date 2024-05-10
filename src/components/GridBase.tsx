import React from "react"

interface Props {
  shadowed: boolean
}

export const GridBase: React.FC<Props> = ({shadowed}) =>
{
  return (
    <>
      <div className={`bg-gray-200 rounded-xl w-full h-full ${shadowed ? "opacity-50" : ""}`}></div>
      <div className={`bg-gray-200 rounded-xl w-full h-full ${shadowed ? "opacity-50" : ""}`}></div>
      <div className={`bg-gray-200 rounded-xl w-full h-full ${shadowed ? "opacity-50" : ""}`}></div>
      <div className={`bg-gray-200 rounded-xl w-full h-full ${shadowed ? "opacity-50" : ""}`}></div>
      <div className={`bg-gray-200 rounded-xl w-full h-full ${shadowed ? "opacity-50" : ""}`}></div>
      <div className={`bg-gray-200 rounded-xl w-full h-full ${shadowed ? "opacity-50" : ""}`}></div>
      <div className={`bg-gray-200 rounded-xl w-full h-full ${shadowed ? "opacity-50" : ""}`}></div>
      <div className={`bg-gray-200 rounded-xl w-full h-full ${shadowed ? "opacity-50" : ""}`}></div>
      <div className={`bg-gray-200 rounded-xl w-full h-full ${shadowed ? "opacity-50" : ""}`}></div>
      <div className={`bg-gray-200 rounded-xl w-full h-full ${shadowed ? "opacity-50" : ""}`}></div>
      <div className={`bg-gray-200 rounded-xl w-full h-full ${shadowed ? "opacity-50" : ""}`}></div>
      <div className={`bg-gray-200 rounded-xl w-full h-full ${shadowed ? "opacity-50" : ""}`}></div>
      <div className={`bg-gray-200 rounded-xl w-full h-full ${shadowed ? "opacity-50" : ""}`}></div>
      <div className={`bg-gray-200 rounded-xl w-full h-full ${shadowed ? "opacity-50" : ""}`}></div>
      <div className={`bg-gray-200 rounded-xl w-full h-full ${shadowed ? "opacity-50" : ""}`}></div>
      <div className={`bg-gray-200 rounded-xl w-full h-full ${shadowed ? "opacity-50" : ""}`}></div>
    </>
  )
}