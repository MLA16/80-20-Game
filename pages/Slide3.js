import Head from 'next/head'
import Link from 'next/link'
//import img from "next/img";

function Slide3Page() {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center py-2  bg-gradient-to-r from-cyan-500 to-blue-500">

<div className="flex justify-center ">
  <div className="mt-16 flex flex-col col-span-4 md:flex-row md:max-w-5xl h-96 rounded-lg bg-white shadow-lg ">
    <img className="  w-2/6 p-8  max-w-5xl md:h-auto object-cover md:w-58 rounded-t-lg md:rounded-none md:rounded-l-lg border-slate-900" src="https://media.istockphoto.com/vectors/quiz-game-show-host-standing-and-asking-question-smart-young-man-with-vector-id1285926084?b=1&k=20&m=1285926084&s=170667a&w=0&h=2DCwVDIMKttVplxyYcuAOfImeBVpEo4eBk0VS19FMtU=" alt="" />
    <div className="p-6 flex flex-col justify-start ">
      <h5 className="text-gray-900 text-xl font-bold mb-6">HOW TO PLAY 80/20 GAME?</h5>
      <p className="text-slate-900 text-base mb-8">
	       1. Enter player's details, then click the StartGame button.
<br></br>2. Round-1 will be provided with an agenda, and the player must choose the data and analyse from the archive depending on the agenda.
<br></br>3. After examining the data, the player must choose the right keywords in an 80/20 ratio and click the submit button to submit the solution chosen by the player.
<br></br>4. There are five rounds of ten points each; if the player guesses the erroneous keywords, the score is decreased by two points.
<br></br>5. Every round has three opportunities and the player can utilise the hint button to learn the clue.
<br></br>6. After round 5, the player can view his\her overall score.

      </p>
      
    </div>
  </div>
  </div>
</div>
     
 )
}
export default Slide3Page