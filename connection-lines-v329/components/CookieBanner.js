
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = window.localStorage.getItem('cookiesAccepted');
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    window.localStorage.setItem('cookiesAccepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-gray-800 text-white p-4 flex flex-col md:flex-row items-center justify-between gap-4 z-50">
      <span className="text-sm">We use cookies to improve your experience.</span>
      <button
        onClick={accept}
        className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md"
      >
        Got it
      </button>
    </div>
  );
}
