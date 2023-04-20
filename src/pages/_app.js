import "@/styles/globals.css";
import {Montserrat} from "next/font/google";
// import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ErrorBoundary from "@/components/ErrorBoundary";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-mont",
});
const App = ({Component, pageProps}) => {
    return (
        <>
            {/*<Head>*/}
            {/*    <title>Meet Aditya...</title>*/}
            {/*    <link rel="icon" href="/favicon.ico"/>*/}
            {/*    <metadata*/}
            {/*        name="viewport"*/}
            {/*        content="width=device-width, initial-scale=1.0"*/}
            {/*    />*/}
            {/*</Head>*/}
            <main
                className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
                <ErrorBoundary><Navbar/></ErrorBoundary>
                <ErrorBoundary><Component {...pageProps} /></ErrorBoundary>
                <ErrorBoundary><Footer/></ErrorBoundary>
            </main>
        </>
    );
};
export default App;
