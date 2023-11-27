import Image from 'next/image'
import React from 'react'
import heart from "@/assets/heart.svg"
import Link from 'next/link'
import Button from './Button'

function Hero() {
  return (
    <main className="flex mx-auto flex-col gap-[50px] items-start justify-center text-center md:pl-[80px] px-4 w-[100%] h-[700px] m-0 bg-opacity-5 bg-cover bg-right md:bg-center bg-no-repeat bg-[url('/doctor.jpg')]">
      <h1 className="text-5xl leading-[57px] font-semibold text-slate-900 text-left max-w-[700px]">
        Chat Your Way to Wellness; <br /> Your Health Deserves a <br /> Conversation!
      </h1>
        <Button text="Check Symptoms" url="/signup"/>
    </main>
  )
}

export default Hero