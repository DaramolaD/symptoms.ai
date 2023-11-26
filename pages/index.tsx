import { NextPage } from "next"
import Head from "next/head"
import styles from "@/styles/Home.module.css"
import doctor from "/doctor.jpg"
import Hero from "@/components/Hero"
import Brand from "@/components/Brand"
import Service from "@/components/Service"
import Cta from "@/components/Cta"
import Testimonies from "@/components/Testimonies"
import Faq from "@/components/Faq"
import Footer from "@/components/Footer"

const Home: NextPage = () => {
  return (
    <div className="flex max-w-[1400px] mx-auto flex-col items-center min-h-screen">
      <Hero />
      <Brand />
      <Service />
      <Cta />
      <Testimonies />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home
