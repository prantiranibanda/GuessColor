"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [generateColor, setGenerateColor] = useState("#FFFFFF");
  const [c1, setC1] = useState("bg-[#FFFFFF]");
  const [c2, setC2] = useState("bg-[#FFFFFF]");
  const [c3, setC3] = useState("bg-[#FFFFFF]");
  const [c4, setC4] = useState("bg-[#FFFFFF]");
  const [c5, setC5] = useState("bg-[#FFFFFF]");
  const [c6, setC6] = useState("bg-[#FFFFFF]");

  useEffect(()=>{
    console.log("c1:",c1)
    console.log("c2:",c2)
    console.log("c3:",c3)
    console.log("c4:",c4)
    console.log("c5:",c5)
    console.log("c6:",c6,"-----------------------------------------------------")
  },[c1,c2,c3,c4,c5,c6])

  let grad1 = "bg-gradient-to-r from-zinc-600 via-zinc-500 to-zinc-600";
  let grad2 = "bg-gradient-to-r from-purple-500 via-green-400 to-purple-500";
  let circle = "text-center flex items-center justify-center rounded-full  border-2 border-white w-32 h-32";

  const hashCode = ()=>{
    let arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    return "bg-[#".concat(arr[Math.floor((Math.random() * 16))], arr[Math.floor((Math.random() * 16))], arr[Math.floor((Math.random() * 16))], arr[Math.floor((Math.random() * 16))], arr[Math.floor((Math.random() * 16))], arr[Math.floor((Math.random() * 16))],"]")
  }

  const generate = ()=>{
    let arr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let randColor = "#";
    for(let i=0; i<6; i++){
      let x = Math.floor((Math.random() * 16));
      randColor = randColor.concat(arr[x]);
    } 
    setGenerateColor(randColor); 
    //console.log(randColor);
    
    setC1("bg-blue-400");
    setC2("bg-green-400");
    setC3("bg-red-400");
    setC4("bg-yellow-400");
    setC5("bg-[#ffaacc]");
    setC6("bg-blue-400");
  }
  let newcode = "bg-[#effecc]"
  
  return (
    <>
      <div className={`${grad1} h-20 p-6 text-center font-bold text-3xl italic text-white`}>Play With Colours</div>
      <div className={`text-white ${grad2} text-center p-3 mt-2 text-xl`}>
        <div className="">Click The Button Below OR Press Spacebar &</div>
        <div className="font-bold text-2xl underline border border-black">Generate NEW {generateColor} Colors</div>
      </div>
      <div className="bg-white p-1 font-medium text-center hover:underline cursor-pointer" onClick ={generate}>Random Color</div>
      <div className="flex justify-center p-16">
        <div className="grid grid-cols-3 gap-x-16 gap-y-8 bg-neutral-700 rounded-xl p-7">
          <div className={c1}>{c1}</div>
          <div className={c2}>{c2}</div>
          <div className={c3}>3</div>
          <div className={c4}>4</div>
          <div className={c5}>5</div>
          <div className={c6}>6</div>
        </div>
      </div>
      <div className="fixed bottom-0 bg-zinc-700 p-4 w-full text-center text-neutral-500">Copyright</div>
    </>
  )
}
