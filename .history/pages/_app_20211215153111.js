// App component is the top level component which will be common across all the pagess.
// Create global styles here too
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
