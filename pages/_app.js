import "../styles/globals.css";
import AppBar from "../src/components/ui/AppBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
