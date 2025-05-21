
export default function ContactModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-300">✕</button>
        <iframe src="https://shop.connection-lines.com/contact" className="w-full h-96 border-0" title="Contact"></iframe>
      </div>
    </div>
  );
}
