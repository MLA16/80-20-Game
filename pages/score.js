import Head from 'next/head'
import Link from 'next/link'
import FirebaseRef from '../utils/FirebaseRef'
import { database as db } from '../firebase/firebase';
import { ref, update } from 'firebase/database';
import Image from "next/image";
import Trophy from "../public/trophy.png";

function Score() {
    //let v=false;
    const s = FirebaseRef('Scores/score')
    const handleclick=()=>{
        //v=true;     
        console.log(s)
        update(ref(db,'Scores/'),{
            score:0
          })      
    }
    
    return (
<div className="flex min-h-screen flex-col items-center justify-center py-2 bg-no-repeat bg-cover bg-[url('https://i.pinimg.com/originals/91/ae/6b/91ae6b3ec4a0390dcee5e1e86520b322.jpg')]">
        
			<h1 className="font-bold text-4xl  text-center text-white my-10">YOUR TOTAL SCORE!!!</h1>

            <div className="mt-10 flex justify-center items-center flex-col w-72 rounded-lg border-2 bg-white border-slate-800 shadow-xl h-auto p-2">
          <Image src={Trophy} width={100} height={100} objectFit="contain" />
          <h2 className="text-base mt-2 mx-4 text-slate-800 font-bold text-center text-xl">{s}
            <br></br><br></br>
            <h2 className="text-base mt-2 mx-4 text-slate-800 font-semibold text-center">
            Congratulations!</h2>
          </h2>
          </div><br></br>

            
            <Link href = '/'>
            <button onClick={()=>handleclick()} className="bg-white  hover:bg-slate-800 text-slate-800 font-bold py-2 px-10 border-b-4 border-slate-700 hover:border-slate-500 hover:text-white rounded mx-48"> Play Again!!</button> 
            </Link>
            </div>
            
          
    )
}

export default Score;
