import Head from 'next/head'
import Link from 'next/link'
//import img from "next/img";

function Slide2Page() {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center py-2  bg-gradient-to-r from-cyan-500 to-blue-500">

<div className="flex justify-center ">
  <div className="mt-16 flex flex-col col-span-4 md:flex-row md:max-w-5xl h-96 rounded-lg bg-white shadow-lg ">
    <img className="w-3/6 p-4 max-w-5xl md:h-auto object-cover md:w-58 rounded-t-lg md:rounded-none md:rounded-l-lg border-slate-900" src="https://thumbs.dreamstime.com/b/rules-words-hanging-blue-background-d-illustration-79178562.jpg" alt="" />
    <div className="p-6 flex flex-col justify-start ">
      <h5 className="text-gray-900 text-xl font-bold mb-6">KNOW THE GAME RULES</h5>
      <p className="text-slate-900 text-base mb-8">
	     1. Single player game.
<br></br>2. There are a total of five rounds, each with its own agenda.
<br></br>3. Each round has three opportunities with a clue available.
<br></br>4. Each round awards 10 points for accurate answers and two points deducted from the final score if the keywords are mismatched.
<br></br>5.There is no time constraint.


      </p>
      
    </div>
  </div>
  </div>
</div>
     
 )
}
export default Slide2Page