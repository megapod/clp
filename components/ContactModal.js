
export default function ContactModal({onClose}){
return(
<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 w-11/12 max-w-2xl shadow-2xl relative">
     <button onClick={onClose} className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-gray-300">✕</button>
     <iframe src="https://shop.connection-lines.com/contact" title="Contact"
             className="w-full h-[600px] border-0 rounded-md"></iframe>
  </div>
</div>);
}
