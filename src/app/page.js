"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [generateColor, setGenerateColor] = useState("#FFFFFF");
  const [c1, setC1] = useState("#FFFFFF");
  const [c2, setC2] = useState("#FFFFFF");
  const [c3, setC3] = useState("#FFFFFF");
  const [c4, setC4] = useState("#FFFFFF");
  const [c5, setC5] = useState("#FFFFFF");
  const [c6, setC6] = useState("#FFFFFF");

  const generate = ()=>{
    let arr = [c1, c2, c3, c4, c5, c6];
    let randColor = arr[Math.floor((Math.random() * 6))];
    setGenerateColor(randColor);
  }

  useEffect(generate,[c6]);

  let grad1 = "bg-gradient-to-r from-zinc-600 via-zinc-500 to-zinc-600";
  let grad2 = "bg-gradient-to-r from-purple-500 via-green-400 to-purple-500";
  let circle = "text-center flex items-center justify-center rounded-full  border-2 border-white w-32 h-32";

  const hashCode = ()=>{
    let arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    return "#".concat(arr[Math.floor((Math.random() * 16))], arr[Math.floor((Math.random() * 16))], arr[Math.floor((Math.random() * 16))], arr[Math.floor((Math.random() * 16))], arr[Math.floor((Math.random() * 16))], arr[Math.floor((Math.random() * 16))]);
  }

  const generateCol = ()=>{
    setC1(hashCode);
    setC2(hashCode);
    setC3(hashCode);
    setC4(hashCode);
    setC5(hashCode);
    setC6(hashCode);
  }

  return (
    <>
      <div className={`${grad1} h-20 p-6 text-center font-bold text-3xl italic text-white`}>Play With Colours</div>
      <div className={`text-white ${grad2} text-center p-3 mt-2 text-xl`}>
        <div className="">Click The Button Below OR Press Spacebar &</div>
        <div className="font-bold text-2xl underline">Generate NEW {generateColor} Colors</div>
      </div>
      <div className="bg-white p-1 font-medium text-center hover:underline cursor-pointer" onClick ={generateCol}>Random Color</div>
      <div className="flex justify-center p-16">
        <div className="grid grid-cols-3 gap-x-16 gap-y-8 bg-neutral-700 rounded-xl p-7">
          <div style={{backgroundColor : `${c1}`}} className={`${circle}`}>{c1}</div>
          <div style={{backgroundColor : `${c2}`}} className={`${circle}`}>{c2}</div>
          <div style={{backgroundColor : `${c3}`}} className={`${circle}`}>{c3}</div>
          <div style={{backgroundColor : `${c4}`}} className={`${circle}`}>{c4}</div>
          <div style={{backgroundColor : `${c5}`}} className={`${circle}`}>{c5}</div>
          <div style={{backgroundColor : `${c6}`}} className={`${circle}`}>{c6}</div>
        </div>
      </div>
      <div className="fixed bottom-0 bg-zinc-700 p-4 w-full text-center text-neutral-500">Copyright</div>
    </>
  )
}
