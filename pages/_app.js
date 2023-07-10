import "../styles/globals.css";
import AppBar from "../src/components/ui/AppBar";
import { Provider } from "react-redux";
import reducer from "../src/states/reducer";
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";

function MyApp({ Component, pageProps }) {
  // const store = createStore{reducer, compose(applyMiddleware(thunk))};
  const store = createStore(reducer, compose(applyMiddleware(thunk)));

  return (
    <Provider store={store}>
      <AppBar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
