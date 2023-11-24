"use client";
import { heart } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
    text: string
}

function Button({ text }: Props) {
    return (
        <Link href="/"
            className={`flex max-w-fit gap-2 items-center px-4 py-3 font-semibold rounded-full bg-[#1958FF] text-sm text-white hover:shadow-sm hover:shadow-[#1958FF]`}>
            {text} <span><Image src={heart} alt='cta_heart_icon' width={20} height={20} className="pr-[10px] w-[20px]" /></span>
        </Link>
    )
}

export default Button