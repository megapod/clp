
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Connection Lines – תמיכה אחרי פרידה</title>
        <meta name="description" content="בן‑לוויה דיגיטלי אמפתי 24/7 שיעזור לך להתמודד עם כאב הפרידה." />
      </Head>
      <main>
        <section className="hero container">
          <h1>אתם לא שבורים – אתם רק מוצפים</h1>
          <h2>בן‑לוויה דיגיטלי רגוע ואמפתי שיעזור לך לצלוח את הפרידה</h2>
          {/* Payhip Buy Button */}
          <script src="https://payhip.com/payhip.js" />
          <a href="https://shop.connection-lines.com/b/FS7uM"
             className="payhip-buy-button cta"
             data-theme="none"
             data-product="FS7uM">
             התחילו עכשיו – ‎19.90 $
          </a>
        </section>

        <section className="section container">
          <div className="features">
            <div className="feature">
              <h3>תמיד אתכם</h3>
              <p>24/7 – מתי שהלב כואב, יש מי שמקשיב.</p>
            </div>
            <div className="feature">
              <h3>בטוח ואנונימי</h3>
              <p>כאן אפשר לשתף בלי פחד, בלי שיפוטיות וללא צורך בחשיפה.</p>
            </div>
            <div className="feature">
              <h3>אמפתיה אמיתית</h3>
              <p>אלה וסם, שני מלווים דיגיטליים, מעניקים גם חום וגם תובנות מעשיות.</p>
            </div>
            <div className="feature">
              <h3>התחלה חדשה</h3>
              <p>כלים והכוונה לצמוח מתוך הכאב ולבנות ביטחון בעצמך.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Connection Lines • <a href="https://shop.connection-lines.com/contact">צור קשר</a></p>
      </footer>
    </>
  );
}
