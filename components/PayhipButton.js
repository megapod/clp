import { useEffect } from 'react';

export default function PayhipButton({ children, className = '' }) {
  useEffect(() => {
    if (!document.querySelector('script[src="https://payhip.com/payhip.js"]')) {
      const s = document.createElement('script');
      s.src = "https://payhip.com/payhip.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <a
      data-payhip-button="FS7uM"
      href="https://shop.connection-lines.com/b/FS7uM"
      className={`payhip-buy-button ${className}`}
    >
      {children}
    </a>
  );
}