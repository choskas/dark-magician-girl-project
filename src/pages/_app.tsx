import '../styles/generalStyles.css';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ToastContainer } from 'react-toastify';

const App = ({ Component, pageProps }: AppProps) => (
    <>
		<DndProvider backend={HTML5Backend}>
			<Head>
				<title>YugiCards</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
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
    </>
);

export default App;