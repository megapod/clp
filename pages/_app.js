import '../styles/globals.css'
const ContactModal = dynamic(()=>import('../components/ContactModal'),{ssr:false})

import '../styles/globals.css'

function CookieBanner() {
  const [show, setShow] = useState(false)
  useEffect(()=>{ const c = localStorage.getItem('cl-cookie-ok'); if(!c) setShow(true) },[])
  if(!show) return null;
  return (
    <div className="fixed bottom-0 inset-x-0 bg-gray-800 text-white px-4 py-3 text-sm flex flex-col md:flex-row items-center gap-4 z-[2000]">
      <span>This site uses cookies for analytics & secure checkout.</span>
      <button onClick={()=>{localStorage.setItem('cl-cookie-ok','1');setShow(false)}} className="bg-primary px-3 py-1 rounded">Got it</button>
    </div>
  )
}

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}