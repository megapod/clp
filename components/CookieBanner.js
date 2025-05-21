
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!localStorage.getItem('cl-cookie-ok')) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-gray-800 text-white text-sm px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4 z-[2000]">
      <span>This site uses cookies for analytics & secure checkout.</span>
      <button
        onClick={() => {
          if (typeof window !== 'undefined') {
            localStorage.setItem('cl-cookie-ok', '1');
            setShow(false);
          }
        }}
        className="bg-primary px-3 py-1 rounded"
      >
        Got it
      </button>
    </div>
  );
}
