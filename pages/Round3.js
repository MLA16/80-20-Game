import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { database as db } from '../firebase/firebase';
import TestModals from "../components/TestModals";
import useFirebaseRef from '../utils/useFirebaseRef';
import { ref, update } from 'firebase/database';
import TestSubmit from '../components/TestSubmit';
//import Buttonhint from "../components/Buttonhint";


export default function Round3Page() {
  const router=useRouter();
    const arr=[];
    let val='';
    const id='agenda-3';
   const [value1, setValue1] = useState('');
   const [value2, setValue2] = useState('');
   const agendasref=useFirebaseRef(`agendas`);
   const scoreref=useFirebaseRef('Scores/score');
   const attemptref=useFirebaseRef('Attempt/attempts');
   const hint=useFirebaseRef('agendas/agenda-3/hint')
   const [success,setsuccess]= useState(false);
   const [hintval,sethintval]=useState(" ");
   //const [agenda,setagenda]=useState('');  
   //const [wrngans,setwrngans]=useState(false);


const showhint=()=>{    
    const valhint=val;
    const ragenda=agendasref;
     alert(ragenda[id].hint)
  }


    const check= ()=> {
      const checkarr=agendasref[id].keywords
      if(value1==checkarr[1] && value2==checkarr[2])
      {
        setsuccess(true);
        //alert('CORRECT ANSWER!! Your answer is successfully submitted');
        update(ref(db,'Scores/'),{
          score:scoreref+10
        })
        router.push({pathname: "/Round4"})
       // s=s+10;
      }

      else if(attemptref===0)
      {
        alert('oops!! You have lost all 3 tries!!')
        update(ref(db,'Attempt/'),{
          attempts:2
        })
        router.push({pathname: "/Round4"})
      }

      else {
        //setwrngans(true);
        alert('WRONG ANSWER!!TRY AGAIN');
        update(ref(db,'Scores/'),{
          score:scoreref-2
        })
        update(ref(db,'Attempt/'),{
          attempts:attemptref-1 
        })
      }
    }

    
  return (
        <div className="flex flex-row min-h-screen bg-white  ">           
    <aside
      className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-blue-500"
    > 
      <div className="sidebar-header flex items-center justify-center py-4">
        <div className="inline-flex">
          <a href="#" className="inline-flex flex-row items-center">
            <svg className="w-10 h-10 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="leading-10 text-gray-100 text-2xl font-bold ml-1 uppercase">80-20 GAME</span>
          </a>
        </div>
      </div>
      <div className="sidebar-content px-4 py-6">
        <ul className="flex flex-col w-full">
          <li className="my-px">
            <a
              href="#"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
            >
              <span className="flex items-center justify-center text-bold text-lg text-white-400">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </span>
              <span className="ml-3">ARCHIEVE DATA</span>
            </a>
          </li>
          <li className="my-px">
            <span className="flex font-medium text-sm text-white-600 px-4 my-4 uppercase">Countrys Data</span>
          </li>

          <li className="my-px">
            <a
              href="countrypolitics"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="flex items-center justify-center text-lg text-white-400">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </span>
              <span className="ml-3">Political Issues</span>
            </a>
          </li>

          <li className="my-px">
            <a
              href="country_gdp"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="flex items-center justify-center text-lg text-white-400">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </span>
              <span className="ml-3">Statewise GDP</span>
            </a>
          </li>

          <li className="my-px">
            <a
              href="country_pop"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="flex items-center justify-center text-lg text-white-400">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </span>
              <span className="ml-3">Population</span>
            </a>
          </li>

          <li className="my-px">
            <span className="flex font-medium text-sm text-white-600 px-4 my-4 uppercase">International Data</span>
          </li>

          <li className="my-px">
            <a
              href="un"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="flex items-center justify-center text-lg text-white-400">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <span className="ml-3">UN Data</span>
            </a>
          </li>

          <li className="my-px">
            <a
              href="foreign"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="flex items-center justify-center text-lg text-white-400">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </span>
              <span className="ml-3">Foreign Policy</span>
            </a>
          </li>

          <li className="my-px">
            <span className="flex font-medium text-sm text-white-600 px-4 my-4 uppercase">ENTERTAINMENT</span>
          </li> 

          <li className="my-px">
            <span className="flex font-medium text-sm text-white-600 px-4 my-4 uppercase">SPORTS</span>
          </li>

          <li className="my-px">
            <a
              href="addnewdata"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="flex items-center justify-center text-lg text-green-400">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <span className="ml-3">Add New Data</span>
            </a>
          </li>

          <li className="my-px">
            <a
              href="/"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="flex items-center justify-center text-lg text-red-400">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <span className="ml-3">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
    {/* {wrngans && <TestSubmit message={'wrong answer'} round={'/Round1'}/>} */}
    {success && <TestSubmit message={'Correct Answer!'} round={'/Round4'}/>
    }
    {!success && 
    <main className="main flex flex-col flex-grow -ml-64 md:ml-2 transition-all duration-150 ease-in ">   
      <div className="main-content flex flex-col flex-grow p-4 bg-no-repeat bg-cover bg-[url('https://rmch.org.uk/imager/assets/quiz-night/2912/quiz-night_a12e44e3210bc53d16e237a7c4555e81.jpg')]">
     
      <h1 className="font-bold text-3xl  text-center">ROUND-3</h1>
      {/*agenda section -url-  https://thumbs.dreamstime.com/b/rule-concept-pareto-principle-business-145556108.jpg*/}
    
        <div className="bg-gray-50 flex flex-col pattern-isometric flex-grow border-4 border-white border-solid bg-white rounded mt-6 mx-20">  
        <div class= " bg-black text-white  px-5 py-2 text-gray-50 text-2xl font-bold text-center">
              <h1 >AGENDA : {id}</h1>
        </div><br></br><br></br>
              <h1 className="font-bold text-2xl  text-center text-slate-900">20% of
              <div className="flex justify-center">
              <br></br><div className="mb-3 xl:w-96 px-3 py-1.5">
              <select  value = {value1}
              onChange= {(e)=>{setValue1(e.target.value)}}
              class="dropdown-toggle w-full px-3 py-1.5 inline-block px-6 py-2 bg-slate-500 
                     text-white font-small text-xl leading-tight  
                     rounded shadow-md 
                     hover:bg-slate-900 
                     hover:shadow-lg 
                     focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 
                     active:bg-gray-800 active:shadow-lg active:text-white 
                     transition 
                     duration-150 
                     ease-in-out 
                     flex items-center 
                     whitespace-nowrap"
                     type="button"id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"aria-expanded="false">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-down"
          class="w-2 ml-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
          ></path>
        </svg>
        <option selected>ChooseKeyword</option>
        <option value="one">Southern States</option>
        <option value="two">Northern States</option>
        <option value="three">three</option>
        <option value="four">four</option>
        <option value="five">five</option>
        </select>
  </div>
</div> contributes to 80% of <div className="flex justify-center">
<br></br><div className="mb-2 xl:w-96 px-3 py-1.5">
  <select 
     value = {value2}
     onChange= { (e) => {
       setValue2(e.target.value);
     }} 
     class="dropdown-toggle w-full px-5 py-1.5 inline-block px-6 py-2 bg-slate-500 
    text-white 
    font-small
    text-xl 
    leading-tight  
    rounded 
    shadow-md 
    hover:bg-slate-900 
    hover:shadow-lg 
    focus:bg-slate-700 
    focus:shadow-lg 
    focus:outline-none 
    focus:ring-0 
    active:bg-gray-800 
    active:shadow-lg 
    active:text-white 
    transition 
    duration-150 
    ease-in-out 
    flex items-center 
    whitespace-nowrap"
    type="button"
    id="dropdownMenuButton2"
    data-bs-toggle="dropdown"
    aria-expanded="false"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-down"
          class="w-2 ml-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
          ></path>
        </svg>
        <option selected >ChooseKeyword</option>
        <option value="one">Population</option>
        <option value="two">Country's GDP</option>
        <option value="three">three</option>
        <option value="four">four</option>
        <option value="five">five</option>
    </select>
  </div>
</div></h1>
<br></br><br></br>
  <div className="flex justify-center items-center ">
  <button onClick={()=>check()} className="underline decoration-4 font-bold py-2 px-10 rounded-full border-2 border-slate-900 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 space-y-10">
  SUBMIT</button> 

  </div>
  <TestModals message={ hint}/>
  </div>

  {/*out of agenda box*/}
  {/*<button onClick={()=>showhint()} className=" justify-center mx-8 underline decoration-4 font-bold py-2 px-10 border-4 border-slate-700 bg-gradient-to-r from-sky-300 via-purple-100 to-pink-500 hover:from-pink-100 to-indig-200">
      VIEW HINT</button>*/}
      
      </div>  
    <div className=" bg-blue-100 text-center justify-center decoration-4 font-bold py-1 px-10 border-2 border-slate-900 "> 
    *** YOU ARE PLAYING 80/20 GAME *** </div>
     
    </main> 
}
  </div>
        )
    } 
        
   