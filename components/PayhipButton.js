
import { useEffect } from 'react';

export default function PayhipButton({ children, className = '' }) {
  // Ensure Payhip script is loaded once
  useEffect(() => {
    if (!document.querySelector('script[src="https://payhip.com/payhip.js"]')) {
      const s = document.createElement('script');
      s.src = "https://payhip.com/payhip.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  const handleClick = (e) => {
    // Prevent navigation; let Payhip JS handle the modal
    e.preventDefault();
  };

  return (
    <a
      href="https://payhip.com/b/FS7uM"
      className={`payhip-button ${className}`}
      data-payhip="button"
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
