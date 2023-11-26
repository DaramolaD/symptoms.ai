import { heart } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

type Props = {}

function Cta({ }: Props) {
    return (
        <div className="cta w-full py-[50px] md:py-[0px] flex justify-center md:block px-[20px] md:px[0px] bg-cover bg-center bg-no-repeat md:bg-[url('/male_doc.jpg')]">
            <div className="w-[450px] bg-[#05361E] md:bg-inherit rounded-[12px] md:rounded-[0px] service_1 grid grid-cols-1 items-center gap-[50px] px-[20px] md:px-[50px] py-[80px] max-[768px]:flex-col">
                <h3 className='text-[#7CE797] md:text-[#05361E] text-3xl font-normal'>Need to consult with a medical professional?</h3>
                <p className='text-[#EFF2F9] md:text-[#05361E]'>Symptoms.ia seamlessly connects you with the right practitioners or medical centers in your area. We prioritize efficiency, ensuring you get the care you need without unnecessary delays.</p>
                <Button text="Check Symptoms" />
            </div>
        </div>
    )
}

export default Cta