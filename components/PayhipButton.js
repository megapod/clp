
import { useEffect } from 'react';

export default function PayhipButton({ children, className }) {
  useEffect(() => {
    if (!document.querySelector('script[src="https://payhip.com/payhip.js"]')) {
      const script = document.createElement('script');
      script.src = "https://payhip.com/payhip.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
  return (
    <a data-payhip-button="FS7uM" className={className}>
      {children}
    </a>
  );
}
