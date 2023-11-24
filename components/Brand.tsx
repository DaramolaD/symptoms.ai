"use client";

import Image from 'next/image'
import React from 'react'
import {brand_1, brand_2, brand_3, brand_4} from "@/assets"

type Props = {}

const Brand = (props: Props) => {
  return (
    <div className='bg-[#101928] px-[20px] py-[30px] w-full flex-col flex items-center gap-10 text-center text-white'>
        <h3>Our partners and medical practitioners <br /> are trusted from</h3>
        <div className="brands flex items-center gap-3 flex-wrap justify-center">
            <Image src={brand_1} alt='brand'/>
            <Image src={brand_2} alt='brand'/>
            <Image src={brand_3} alt='brand'/>
            <Image src={brand_4} alt='brand'/>
        </div>
    </div>
  )
}

export default Brand