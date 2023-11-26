"use client";

import Image from 'next/image'
import React from 'react'
import {brand_1, brand_2, brand_3, brand_4} from "@/assets"

const imgs = [
  {
    id: 1,
    img: brand_3
  },
  {
    id: 2,
    img: brand_1
  },
  {
    id: 3,
    img: brand_2
  },
  {
    id: 4,
    img: brand_4
  },
]

type Props = {}

const Brand = (props: Props) => {
  return (
    <div className='bg-[#101928] px-[20px] md:px-[80px] py-[50px] w-full flex-col flex items-center gap-[40px] text-center text-white'>
        <h3 className='text-base font-normal'>Our partners and medical practitioners <br /> are trusted from</h3>
        <div className="brands w-full max-w-[950px] flex items-center gap-[32px] flex-wrap justify-center">
          {imgs.map(({img,id}) => (<Image className='max-w-[186.16px] w-full' src={img} alt='brand' key={id}/>))}
        </div>
    </div>
  )
}

export default Brand