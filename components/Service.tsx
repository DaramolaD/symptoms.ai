"use client"

import { hand_heart, hands, mobile_chat, nurse, heart } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

type Props = {}

const Service = (props: Props) => {
    return (
        <div className="grid justify-center">
            <div className="service_1 grid grid-cols-1 sm:grid-cols-2 items-center gap-[50px] px-[50px] py-[80px] max-[768px]:flex-col">
                <Image src={hands} alt="service_img" object-fit='cover' className='max-w-[100%] w-[100%] max-h-[500px]' />
                <div className="content">
                    <p>At Symptoms.ai, we understand that your health is your most valuable asset, and we believe in leveraging the power of artificial intelligence to make healthcare accessible, efficient, and personalized just for you.</p>
                </div>
            </div>
            <div className="service_1 md:max-h-[800px] grid grid-cols-1 sm:grid-cols-2 items-center gap-[50px] px-[50px] py-[80px] max-[768px]:flex-col">
                <Image src={nurse} alt="service_img" object-fit='cover' className='max-w-[100%] w-[100%] max-h-[100%] h-[100%]' />
                <div className="content h-full grid gap-[50px]">
                    <Image src={hand_heart} alt="service_imgs" />
                    <p>Harnessing the cutting-edge capabilities of AI, Symptoms.ai specializes in symptom analysis, providing users with accurate and timely information about their health concerns.</p>
                    <Button text="Contant Us"/>
                </div>
            </div>
            <div className="max-w[80%] justify-items-center service_1 grid grid-cols-1 sm:grid-cols-2 items-center gap-[50px] px-[50px] py-[80px] max-[768px]:flex-col">
                <Image src={mobile_chat} alt="service_imgs" />
                <div className="content grid gap-5">
                    <h3>Our user interface is a super friendly one!</h3>
                    <p>Enabling users input their symptoms in a user-friendly interface is a major objective for us. We leverage on AI algorithms to generate prompt, accurate, and personalized responses based on the provided user symptoms.</p>
                    <p>We offer guidance to users regarding potential next steps for medical care, whether it involves self-care measures or seeking professional medical assistance.</p>
                    <Button text="Contant Us"/>
                </div>
            </div>
            
        </div>
    )
}

export default Service