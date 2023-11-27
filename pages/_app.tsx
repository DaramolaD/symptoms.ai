import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import styles from "../styles/loading-dots.module.css";
import "../assets/chat.css"
import Header from '@/components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Header />
  <Component {...pageProps} />
  </>
}
