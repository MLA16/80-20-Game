import React, { useState } from "react";
import { GiAtomicSlashes } from "react-icons/gi";
import Image from "next/image";
import Trophy from "../public/trophy.png";
import hintt from "../public/hintt.png";
import Gift from "../public/gift.png";

const TestModals = ( {message}) => {
  const [showModal, setShowModal] = useState(false);
 
  //const [hintval,sethintval]=useState("")
  
const clicksubmit =()=>{
  setShowModal(false);
  router.push({ pathname: `${round}`})
}
  return (
    <div className="flex md:flex-col justify-center items-center mt-10 ">
      <div className="flex gap-5 ">
        <button
          className="bg-indigo-700 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
      font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none border-2 border-slate-900"
          type="button"
          onClick={() => setShowModal(true)}>
          HINT<GiAtomicSlashes className="text-xl" />
        </button> 
      </div>

      {showModal ? (
        <div className="mt-10 flex place-items-center  items-center flex-col w-72 rounded-lg border-4 bg-slate-400 border-blue-800 shadow-xl h-auto p-2">
          <Image src={hintt} width={100} height={100} objectFit="contain" />
          <h2 className="text-base mt-4 mx-4 text-black font-semibold text-center">
            {message}
           
          </h2>
          <button
            className="my-5 w-auto px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </div>
      ) : null} 
    </div>
  );
};

export default TestModals;