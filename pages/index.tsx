import { NextPage } from "next"
import Head from "next/head"
import styles from "@/styles/Home.module.css"
import Header from "@/components/Header"
import doctor from "/doctor.jpg"
import Hero from "@/components/Hero"
import Brand from "@/components/Brand"
import Service from "@/components/Service"
import Cta from "@/components/Cta"

const bg = {

}
const Home: NextPage = () => {
  return (
    <div className="flex max-w-[1400px] mx-auto flex-col items-center min-h-screen">
      <Header />
      <Hero />
      <Brand />
      <Service />
      <Cta />
      <footer className="w-full">
      </footer>
    </div>
  )
}

export default Home
