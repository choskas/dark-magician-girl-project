import "../styles/generalStyles.css";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import { AppProps } from "next/app";
import { Provider as ProviderAuth } from "next-auth/client";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "../redux/store";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Provider store={store}>
      <ProviderAuth session={pageProps.session}>
        <DndProvider backend={HTML5Backend}>
          <Head>
            <title>Cards Seeker</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
              rel="stylesheet"
            />
          </Head>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
          />
          <Component {...pageProps} />
        </DndProvider>
      </ProviderAuth>
    </Provider>
  </>
);

export default App;
