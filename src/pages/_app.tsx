import { AppProps } from "../../node_modules/next/app";
import styles from "../../styles/styles.module.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
