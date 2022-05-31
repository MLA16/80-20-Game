import Head from 'next/head'
import Link from 'next/link'
import { FaFacebookF,FaLinkedinIn,FaGoogle, FaRegEnvelope} from 'react-icons/fa';
import{MdLockOutline} from 'react-icons/md';
import { useState } from 'react'
import Slider from '../components/Slider';


export default function Home() {
 return (
    <>
    <div className="flex min-h-screen flex-col items-center justify-center py-2 ">
      {/*bg-no-repeat bg-cover bg-[url('https://img.shutterstock.com/img-illustration/8020-rule-concept-pareto-principle-260nw-1376683157.jpg')]"*/}
      <Head>
        <title>80-20 Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl ">
        <div className="w-4/5 p-5 ">
          <div className="text-left font-bold">
            <span className="text-blue-800"> 80-20</span>Game
          </div>
          <div className="py-10">
           {/* <h2 className="text-3xl font-bold text-blue-800 mb-2"> START GAME</h2>*/}
            
            <h2 className="text-lg font-bold text-gray-900 mb-2"> Enter your UserName and Email-id</h2>
            <div className="border-2 w-10 border-blue-800 inline-block mb-2"></div>
            {/*<div className="flex justify-center my-2">
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaFacebookF className="text-sm"/>
              </a>
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaLinkedinIn className="text-sm"/>
                </a>
                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaGoogle className="text-sm"/>
                </a> 
        </div>*/}{/* SIGN-in*/} 
        <div className="flex flex-col items-center ">
        <div className="bg-gray-100 w-64 p-2 flex items-center border-2 border-gray-400">
            
            <svg
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-400"
                >
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
          <input type="aname" name="aname" placeholder="Username" className=" bg-gray-100 outline-none text-sm flex-1" /> 
          </div> 
        
          <div className="bg-gray-100 w-64 p-2 flex items-center m-3 border-2 border-gray-400">
            <FaRegEnvelope className="text-gray-400 m-2"/>
          <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1" /> 
          </div> 
          {/*<div className="bg-gray-100 w-64 p-2 flex items-center m-3">
            <MdLockOutline className="text-gray-400 m-2"/>
          <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1" /> 
          </div>*/}
          {/*<div className="flex justify-between w-64 mb-5">
            <label className=" flex items-center text-xs"><input type="checkbox" name="remember"className="mr-1"/>Remember me</label>
            <a href="#" className="text-xs">Forgot Password?</a>
          </div>*/}
<br></br> <a href="Round1" className="border-2 border-blue-800 text-blue-800 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-800 hover:text-white">
          STARTGAME</a>
          </div>
          </div>
          </div>
          <div className="w-3/5 bg-blue-500 rounded-tr-2xl rounded-br-2xl py-36 px-12">
            {/* <Slider/> */}
          <h2 className="text-3xl font-bold mb-2">Hello, Player!</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-10">Check out rules and regulations of the game.</p>
          <a href="Rules" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-800">Click Here</a>
        </div> 
        </div>
      </main>
    </div>
    </>
  )
}


