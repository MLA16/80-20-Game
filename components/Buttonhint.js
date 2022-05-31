import Head from 'next/head'
import Link from 'next/link'
import Round1 from "../pages/Round1";

const Buttonhint = () => {
    //const [hintval,sethintval]=useState(false);

    

    return (
        <div className="flex md:flex-col justify-center items-center mt-40 ">
            
            <button  className=" justify-center mx-8 underline decoration-4 font-bold py-2 px-10 border-4 border-slate-700 bg-gradient-to-r from-sky-300 via-purple-100 to-pink-500 hover:from-pink-100 to-indig-200">
      VIEW HINT</button>
            </div>
    );
};

export default Buttonhint;