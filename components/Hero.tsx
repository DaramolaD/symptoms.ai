import Image from 'next/image'
import React from 'react'
import heart from "@/assets/heart.svg"
import Link from 'next/link'
import Button from './Button'

function Hero() {
  return (
    <main className="flex mx-auto flex-col items-start justify-center text-center px-4 pt-[50px] pl-[80px] w-[100%] h-[600px] m-0 bg-opacity-5 bg-cover bg-right md:bg-center bg-no-repeat bg-[url('/doctor.jpg')]">
      <h1 className="sm:text-2xl text-2xl font-bold text-slate-900 text-left max-w-[500px]">
        Chat Your Way to Wellness; Your Health Deserves a Conversation!
      </h1>
      <div className="flex mt-5 mb-[-5px] gap-4">
        <Button text="Check Symptoms" />
      </div>
    </main>
  )
}

export default Hero