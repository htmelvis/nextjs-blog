// App component is the top level component which will be common across all the pagess.
// Create global styles here too
import "../styles/global.css";
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
