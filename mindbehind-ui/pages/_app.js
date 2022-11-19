import '../styles/globals.css'
import ChatProvider from "../src/context/ChatBotProvider";

function MyApp({Component, pageProps}) {
    return (<ChatProvider>
        <Component {...pageProps} />
    </ChatProvider>)
}

export default MyApp
