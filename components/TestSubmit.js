import React, { useState } from "react";
import { GiAtomicSlashes } from "react-icons/gi";
import Image from "next/image";
import Trophy from "../public/trophy.png";
import hintt from "../public/hintt.png";
import correct from "../public/correct.jpg";
import { useRouter } from "next/router";

const TestSubmit = ( {message,round}) => {
  const [showModal, setShowModal] = useState(true);
  const router=useRouter();
  //const [hintval,sethintval]=useState("")
  
  const clicksubmit =()=>{
    setShowModal(false);
    router.push({ pathname: `${round}`})
  }

  return (
      <>
    
     
      {showModal ? (
        <div className="mt-48 ml-96  flex justify-center items-center flex-col w-72 h-64 rounded-lg border-2 bg-black border-slate-800 shadow-xl h-auto p-2">
          <Image src={correct} width={100} height={100} objectFit="contain" />
          <h2 className="text-base mt-2 mx-4 text-white font-semibold text-center">
            {message}
           
          </h2>
          <button
            className="my-5 w-auto px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
            onClick={() => clicksubmit(false)}
          >
            OK
          </button>
        </div>
        
      ) : null}
      </>

     
    
  );
};

export default TestSubmit;