import Head from 'next/head'
import Link from 'next/link'
//import img from "next/img";

function UnPage() {
    return (
           
<div className=" flex-col items-center justify-center py-2 bg-no-repeat bg-cover bg-[url('https://wallpapercave.com/wp/wp2827973.png')]">

<div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-2xl">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-t-lg" src=" https://data.un.org/_Images/Logo.png" alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">World Data-United Nations Statistics Division</h5>
      <p className="text-gray-700 text-base mb-4">
      Reliable statistical information – statistics and indicators used in the analysis of international trade, 
      investment and development – is indispensable for the formulation of sound economic policies and 
      recommendations. This, in turn, is essential to fostering social and economic development.
      UNCTAD compiles, validates and processes a wide range of data collected from national and international 
      sources. <br></br><br></br>
      <a className=" text-blue-500">Most time-series data cover extended periods of time, with some dating back to 1948, for almost all the 
      economies of the world.This allows the analysis of emerging and urgent issues within a framework of 
      long-lasting tendencies and wide geographical scope.</a> In case of missing data or a break in series, 
      UNCTAD applies its expertise and methodology to make estimates. Such continuity together with accurateness 
      and timeliness are the pillars of UNCTAD’s statistics. <br></br><br></br>

Our statistics are grounded in continuity, accuracy and timeliness. UNCTAD’s statistical work also conforms
 to the United Nations principles governing international statistical activities, formulated with significant 
 contributions from us. It is supported by the UNCTAD Statistics Quality Assurance Framework. <br></br><br></br>

 <a className=" text-blue-500">UNCTAD produces more than 150 indicators and statistical time series essential for the analysis of 
 international trade, economic trends, foreign direct investment, external financial resources, population and 
 labour force, commodities, the information economy and maritime transport.</a>
      The idea of long-term management of relationships followed the development of professional diplomatic corps 
that managed diplomacy. Since 1711, the term diplomacy has been taken to mean the art and practice of conducting 
negotiations between representatives of groups or nations. <br></br><br></br>

In the 18th century, due to extreme turbulence in European diplomacy and ongoing conflicts, the practice of 
diplomacy was often fragmented by the necessity to deal with isolated issues, termed "affairs". Therefore, while 
domestic management of such issues was termed civil affairs (peasant riots, treasury shortfalls, and court
 intrigues), the term foreign affairs was applied to the management of temporary issues outside the sovereign 
 realm. <a className=" text-blue-500">This term remained in widespread use in the English-speaking states into the 20th century, and remains the
  name of departments in several states that manage foreign relations.</a> Although originally intended to describe 
  short term management of a specific concern, these departments now manage all day-to-day and long-term 
  international relations among states. <br></br>
      </p>
      <Link href="/Round4">
   <button className="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-8 border-b-4 border-slate-700 hover:border-slate-500 rounded mx-40 my-10">
  Proceed to Answer</button></Link></div>
  </div>
	</div>
</div>       
        
 )
}
export default UnPage