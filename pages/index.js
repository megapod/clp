
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Connection Lines – Breakup Support</title>
        <meta name="description" content="בן‑לוויה דיגיטלי אמפתי 24/7 שיעזור לך להתמודד עם כאב הפרידה." />
      </Head>
      <main>
        <section className="hero container">
          <h1>You’re not broken—just overwhelmed</h1>
          <h2>A calm, empathetic digital companion to get you through the breakup</h2>
          {/* Payhip Buy Button */}
          <script src="https://payhip.com/payhip.js" />
          <a href="https://shop.connection-lines.com/b/FS7uM"
             className="payhip-buy-button cta"
             data-theme="none"
             data-product="FS7uM">
             Start Now – $19.90
          </a>
        </section>

        <section className="section container">
          <div className="features">
            <div className="feature">
              <h3>Always with You</h3>
              <p>24/7—When the heart hurts, someone’s listening.</p>
            </div>
            <div className="feature">
              <h3>Private & Anonymous</h3>
              <p>Share freely—no judgment, no exposure.</p>
            </div>
            <div className="feature">
              <h3>Real Empathy</h3>
              <p>Ella & Sam—two AI companions—offer warmth and practical insights.</p>
            </div>
            <div className="feature">
              <h3>A Fresh Start</h3>
              <p>Tools and guidance to grow from pain and rebuild your confidence.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Connection Lines • <a href="https://shop.connection-lines.com/contact">Contact</a></p>
      </footer>
    </>
  );
}
