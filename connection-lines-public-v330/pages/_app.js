
import '../styles/globals.css';
import CookieBanner from '../components/CookieBanner';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <CookieBanner />
    </>
  );
}
