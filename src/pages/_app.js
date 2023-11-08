import MainContainer from "../../components/UI/MainContainer";
import Rootlayout from "../../components/RootLayout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Rootlayout>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </Rootlayout>
  );
}
