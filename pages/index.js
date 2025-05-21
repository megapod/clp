import NestedAccordion from '../components/NestedAccordion'

import Image from 'next/image'
export default function Home() {
  return (
    <>
      <main className="max-w-5xl mx-auto px-4">
        {/* Hero */}
        <section className="px-6 grid md:grid-cols-[1fr_420px] gap-14 items-center py-24 bg-gradient-to-br from-neutralbg to-accent/30 rounded-3xl p-10 md:p-20 shadow-inner">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">You’re not broken—just overwhelmed</h1>
            <p className="mt-6 text-lg md:text-xl max-w-lg">A calm, empathetic digital companion to get you through the breakup.</p>
            <div className="mt-8 flex flex-col gap-4">
              <span className="text-sm text-gray-600">Powered by OpenAI • SSL Secure Checkout</span>
              <a href="https://shop.connection-lines.com/b/FS7uM" className="self-start bg-secondary text-white px-6 py-3 rounded-xl shadow hover:scale-105 hover:shadow-lg transition-transform duration-150 ease-out transition-transform">Start Now – $19.90</a>
            </div>
          </div>
          <div className="hidden md:block">
            <Image src="/hero-phone.png" alt="Support illustration" width={600} height={400}/>
          </div>
        </section>

        {/* Features */}
        <section className="py-10 md:py-20 bg-white rounded-3xl shadow-inner">
          <div className="grid md:grid-cols-[1fr_420px] gap-14 px-6 md:px-12">
            {[
              {title:'Always with You',desc:'24/7—When the heart hurts, someone’s listening.'},
              {title:'Private & Anonymous',desc:'Share freely—no judgment, no exposure.'},
              {title:'Real Empathy',desc:'Ella & Sam—two AI companions—offer warmth and practical insights.'},
              {title:'A Fresh Start',desc:'Tools and guidance to grow from pain and rebuild your confidence.'},
            ].map(f=>(
              <div key={f.title} className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 ring-2 ring-primary/40 flex items-center justify-center">
                  <span className="text-primary text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{f.title}</h3>
                  <p className="text-sm mt-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="bg-white max-w-2xl mx-auto p-8 rounded-3xl shadow relative before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-r before:from-secondary/30 before:to-accent/30 before:-z-10">
            <p className="text-lg italic">“After a week with Ella I finally slept through the night.”</p>
            <p className="mt-4 font-semibold">— Tom, 27</p>
          </div>
        </section>
      </main>

      {
        /* Footer */}
      <footer className="bg-white border-t py-6 text-center text-sm space-y-2">
        <nav className="flex justify-center gap-6">
          <a href="#legal" className="text-primary">Privacy</a>
          <a href="#legal" className="text-primary">Terms</a>
          <a href="https://shop.connection-lines.com/contact" className="text-primary">Support</a>
        </nav>
        <p>© {new Date().getFullYear()} Connection Lines</p>
      </footer>

      {/* Sticky CTA mobile */}
      <div className="md:hidden fixed bottom-0 inset-x-0 bg-secondary p-3 flex justify-center shadow-lg">
        <a href="https://shop.connection-lines.com/b/FS7uM" className="text-white font-semibold">Start Now – $19.90</a>
      </div>
    </>
  )
}
