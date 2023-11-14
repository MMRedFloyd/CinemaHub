import MainContainer from "../../components/UI/MainContainer";
import Rootlayout from "../../components/RootLayout";
import "../styles/globals.css";
import store from "../../store/index";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Rootlayout>
        <MainContainer>
          <Component {...pageProps} />
        </MainContainer>
      </Rootlayout>
    </Provider>
  );
}
