"use client";
import { heart } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
    text: string,
    url: string,
}

function Button({ text, url }: Props) {
    return (
        <Link href={`/${url}`}
            className={`flex max-w-fit gap-[14px] items-center px-[32px] py-[16px]  rounded-[8px] bg-[#1958FF] hover:shadow-sm hover:shadow-[#1958FF]`}>
             <Image src={heart} alt='cta_heart_icon' width={24} height={24}/> <span className='font-semibold text-base text-white'>{text}</span>
        </Link>
    )
}

export default Button