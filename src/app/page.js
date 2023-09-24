export default function Home() {
  let grad1 = "bg-gradient-to-r from-zinc-600 via-zinc-500 to-zinc-600";
  let grad2 = "bg-gradient-to-r from-purple-500 via-green-400 to-purple-500";
  let circle = "bg-amber-500 text-center flex items-center justify-center rounded-full  border-2 border-white w-32 h-32";

  let randColor = "#";
  let arr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  for(let i=1; i<=6; i++){
    let x = Math.floor(((Math.random() * 10)+6));
    randColor = randColor.concat(arr[x]);
  }  
  console.log(randColor);

  return (
    <>
      <div className={`${grad1} h-20 p-6 text-center font-bold text-3xl italic text-white`}>Play With Colours</div>
      <div className={`text-white ${grad2} text-center p-3 mt-2 text-xl`}>
        <div className="">Click The Button Below OR Press Spacebar &</div>
        <div className="font-bold text-2xl">Generate NEW {randColor} Colors</div>
      </div>
      <div className="bg-white p-1 font-medium underline text-center">Random Color</div>
      <div className="flex justify-center p-16">
        <div className="grid grid-cols-3 gap-x-16 gap-y-8 bg-neutral-700 rounded-xl p-7">
          <div className={`${circle}`}>1</div>
          <div className={`${circle}`}>2</div>
          <div className={`${circle}`}>3</div>
          <div className={`${circle}`}>4</div>
          <div className={`${circle}`}>5</div>
          <div className={`${circle}`}>6</div>
        </div>
      </div>
      <div className="fixed bottom-0 bg-zinc-700 p-4 w-full text-center text-neutral-500">Copyright</div>
    </>
  )
}
