
import {useState,useEffect} from'react';
export default function CookieBanner(){
const[visible,setVisible]=useState(false);
useEffect(()=>{if(!localStorage.getItem('cookiesAccepted'))setVisible(true);},[]);
if(!visible)return null;
return(
<div className="fixed bottom-0 inset-x-0 bg-gray-800 text-white p-4 flex flex-col md:flex-row items-center justify-between gap-4 z-50 shadow-lg">
  <span className="text-sm">We use cookies to improve your experience.</span>
  <button onClick={()=>{localStorage.setItem('cookiesAccepted','true');setVisible(false);}}
          className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-md">Got it</button>
</div>);
}
