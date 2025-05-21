
import { useEffect } from 'react';

export default function PayhipButton({ children, className = '' }) {
  useEffect(() => {
    if (!document.querySelector('script[src="https://payhip.com/payhip.js"]')) {
      const s = document.createElement('script');
      s.src = 'https://payhip.com/payhip.js';
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  // Prevent default to ensure JS handles it
  const handleClick = (e) => e.preventDefault();

  return (
    <a
      data-payhip-button="FS7uM"
      href="https://payhip.com/b/FS7uM"
      onClick={handleClick}
      className={`payhip-btn ${className}`}
    >
      {children}
    </a>
  );
}
