
import {useEffect} from'react';

export default function PayhipButton({children,className}){
  // inject script once
  useEffect(()=>{
    if(!document.querySelector('script[src="https://payhip.com/payhip.js"]')){
      const s=document.createElement('script');
      s.src="https://payhip.com/payhip.js";
      s.async=true;
      document.body.appendChild(s);
    }
  },[]);
  return(
    <a href="https://shop.connection-lines.com/b/FS7uM"
       className={className ? className+' payhip-buy-button' : 'payhip-buy-button'}
       data-product="FS7uM"
       data-theme="none" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
