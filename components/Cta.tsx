import { heart } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

type Props = {}

function Cta({ }: Props) {
    return (
        <div className="service_1 grid grid-cols-1 sm:grid-cols-2 items-center gap-[50px] px-[50px] py-[80px] max-[768px]:flex-col">
            <h3>Need to consult with a medical professional?</h3>
            <p>Symptoms.ia seamlessly connects you with the right practitioners or medical centers in your area. We prioritize efficiency, ensuring you get the care you need without unnecessary delays.</p>
           <Button text="Contant Us"/>
        </div>
    )
}

export default Cta