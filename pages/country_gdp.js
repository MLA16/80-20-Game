import Head from 'next/head'
import Link from 'next/link'


export default function gdpPage() {
  return (
    <div class="flex min-h-screen flex-col items-center justify-center py-2 bg-no-repeat bg-cover bg-[url('https://cdn.pixabay.com/photo/2016/10/29/10/16/abstract-1780386_1280.png')]"> 
     <h1 class="font-bold text-2xl border-2 border-slate-900 justify-center text-center text-slate-900 my-20">Figure:1 Showing GDP per capita</h1>  
    <img class="object-none object-left-top bg-yellow-300 w-120 h-120 ..." src="https://geocurrents.info/wp-content/uploads/2013/04/Indian-States-by-Per-Capita-GDP-2011-Map.png"/>
    <h1 class="font-bold text-2xl border-4 border-slate-900 justify-center text-center text-slate-900 my-20">Figure:2 Indian Economy</h1>
    <img class="object-none object-left-top bg-yellow-300 w-120 h-120 ..." src="https://www.oecd.org/media/oecdorg/directorates/economicsdepartment/goingforgrowth/2021/IND-going-for-growth-2021-infographic.png"/>
<Link href="/Round2">
 <button class="flex justify-center bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-8 border-b-4 border-slate-700 hover:border-slate-500 rounded mx-40 my-10">
Proceed to Answer</button></Link>
</div>


  )
}

{/*export default function gdpPage() {
    return (
		<div id="carouselExampleSlidesOnly" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-inner relative w-full overflow-hidden bg-blue-200">
  <h1 class="font-bold text-2xl border-4 border-slate-900 justify-center text-center text-slate-900 my-20">Figure:1 Showing GDP per capita</h1>
    <div class="carousel-item active relative float-left w-full">
      <img
        src="https://geocurrents.info/wp-content/uploads/2013/04/Indian-States-by-Per-Capita-GDP-2011-Map.png"
        class="block w-full border-2 border-slate-500"
        alt="Wild Landscape"
      />
    </div>
	<h1 class="font-bold text-2xl border-4 border-slate-900 justify-center text-center text-slate-900 my-20">Figure:2 Indian Economy</h1>
    <div class="flex flex-row carousel-item relative float-left w-full ">
	
      <img
        src="https://www.oecd.org/media/oecdorg/directorates/economicsdepartment/goingforgrowth/2021/IND-going-for-growth-2021-infographic.png"
        class="block w-full"
        alt="Camera"
      />
    </div><br></br><br></br>
	
	<Link href="/round2">
   <button class=" justify-center bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-8 border-b-4 border-slate-700 hover:border-slate-500 rounded mx-40 my-10">
  Proceed to Answer</button></Link>
	
  </div>
</div>
    )
}*/}




                