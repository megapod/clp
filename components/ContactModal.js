
export default function ContactModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full relative shadow-xl">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-300 text-xl">✕</button>
        <iframe
          src="https://shop.connection-lines.com/contact"
          title="Contact"
          className="w-full h-96 border-0 rounded-md"
        ></iframe>
      </div>
    </div>
  );
}
