
import { useEffect } from 'react'

export default function ContactModal({ onClose }) {
  useEffect(() => { document.body.style.overflow='hidden'; return () => { document.body.style.overflow=''; }}, [])
  return (
    <div className="fixed inset-0 bg-black/60 z-[3000] flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white w-full max-w-md rounded-2xl overflow-hidden" onClick={e=>e.stopPropagation()}>
        <iframe src="https://shop.connection-lines.com/contact?embedded=true" className="w-full h-[520px]" sandbox="allow-forms allow-same-origin"></iframe>
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>✕</button>
      </div>
    </div>
  )
}
