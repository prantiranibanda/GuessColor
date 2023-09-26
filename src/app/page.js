"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [generateColor, setGenerateColor] = useState("");
  const [c1, setC1] = useState("");
  const [c2, setC2] = useState("");
  const [c3, setC3] = useState("");
  const [c4, setC4] = useState("");
  const [c5, setC5] = useState("");
  const [c6, setC6] = useState("");
  const [show, setShow] = useState(false);
  

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
  const check = (c)=>{
    if(generateColor !== ""){if(c === generateColor) {alert("You WIN !!"); setShow(true);} else alert("You LOOSE")} else{alert("Gererate the color first !!")};
  }
  return (
    <>
      <div className={`${grad1} h-20 p-6 text-center font-bold text-3xl italic text-white`}>Play With Colours</div>
      <div className={`text-white ${grad2} text-center p-3 mt-2 text-xl border-b-4 border-white`}>
        <div className="">Click The Button Below</div>
        <div className="font-bold text-2xl">Generate new {generateColor} Colors</div>
      </div>
      <div className="flex justify-center">
        <div className="w-52 mt-8 py-2 p-1 text-lg rounded-lg text-white border-2 border-emerald-400 hover:shadow-lg hover:shadow-emerald-400/50 font-semibold text-center cursor-pointer" onClick ={()=>{if(show === false) generateCol();}}>Generate Color</div>
      </div>
      <div className="flex justify-center p-8">
        {!show && <div className="grid grid-cols-3 gap-x-16 gap-y-8 bg-neutral-700 rounded-xl p-7">
          <div onClick={()=>{check(c1)}} style={{backgroundColor : `${c1}`}} className={`${circle} cursor-pointer`}>{c1}</div>
          <div onClick={()=>{check(c2)}} style={{backgroundColor : `${c2}`}} className={`${circle} cursor-pointer`}>{c2}</div>
          <div onClick={()=>{check(c3)}} style={{backgroundColor : `${c3}`}} className={`${circle} cursor-pointer`}>{c3}</div>
          <div onClick={()=>{check(c4)}} style={{backgroundColor : `${c4}`}} className={`${circle} cursor-pointer`}>{c4}</div>
          <div onClick={()=>{check(c5)}} style={{backgroundColor : `${c5}`}} className={`${circle} cursor-pointer`}>{c5}</div>
          <div onClick={()=>{check(c6)}} style={{backgroundColor : `${c6}`}} className={`${circle} cursor-pointer`}>{c6}</div>
        </div>}
        {show && ((c1 === generateColor) || (c2 === generateColor) || (c3 === generateColor) || (c4 === generateColor) || (c5 === generateColor) || (c6 === generateColor)) && <div>
          <div className="p-10 rounded-lg border-2 border-white text-lg font-semibold" style={{backgroundColor : `${generateColor}`}}>You Win</div>
          <div onClick={()=>{setShow(false);setC1("");setC2("");setC3("");setC4("");setC5("");setC6("");setGenerateColor("");}} className="text-center text-white text-lg font-semibold px-4 py-2 border-2 border-blue-400 hover:shadow-lg hover:shadow-blue-400/50 rounded-lg mt-10 cursor-pointer">Restart game</div>
          </div>
        }
      </div>
      <div className="fixed bottom-0 bg-zinc-700 p-4 w-full text-center text-neutral-500">Copyright</div>
    </>
  )
}
