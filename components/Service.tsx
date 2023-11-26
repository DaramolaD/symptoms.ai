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
            <div className="service_1 grid grid-cols-1 sm:grid-cols-2 gap-[50px] px-[20px] md:px-[50px] py-[80px] max-[768px]:flex-col">
                <Image src={hands} alt="service_img" object-fit='cover' className='max-w-[600px] w-[100%] max-h-[500px]' />
                <div className="content grid gap-[16px] h-fit">
                    <h3 className='text-3xl font-normal text-[#1D5936]'>About Us</h3>
                    <p className='text-xl mb-[48px]'>At Symptoms.ai, we understand that your health is your most valuable asset, and we believe in leveraging the power of artificial intelligence to make healthcare accessible, efficient, and personalized just for you.</p>
                    <Button text="Read more about us" />
                </div>
            </div>
            <div className="service_1 md:max-h-[800px] grid grid-cols-1 sm:grid-cols-2 items-center gap-[50px] px-[20px] md:px-[50px] py-[80px] max-[768px]:flex-col">
                <Image src={nurse} alt="service_img" object-fit='cover' className='max-w-[100%] w-[100%] max-h-[100%] h-[100%]' />
                <div className="content h-full grid gap-[50px]">
                    <Image src={hand_heart} width={100} height={100} className='max-h-[400px] h-[100%] w-[100%]' alt="service_imgs" />
                    <p>Harnessing the cutting-edge capabilities of AI, Symptoms.ai specializes in symptom analysis, providing users with accurate and timely information about their health concerns.</p>
                    <Button text="Contant Us" />
                </div>
            </div>
            <div className="max-w[80%] w-full md:w-[80%] m-auto justify-items-center service_1 grid grid-cols-1 sm:grid-cols-2 items-start gap-[40px] px-[20px] md:px-[50px] py-[80px] max-[768px]:flex-col">
                <Image src={mobile_chat} alt="service_imgs" object-fit='cover' className="max-h-[380px] max-w-[100%] w-[100%] h-[100%]"/>
                <div className="content grid gap-8">
                    <h3 className='text-[#05361E] text-3xl font-normal'>Our user interface is a super friendly one!</h3>
                    <div className="para grid gap-5">
                        <p className="text-base font-normal">Enabling users input their symptoms in a user-friendly interface is a major objective for us. We leverage on AI algorithms to generate prompt, accurate, and personalized responses based on the provided user symptoms.</p>
                        <p className="text-base font-normal">We offer guidance to users regarding potential next steps for medical care, whether it involves self-care measures or seeking professional medical assistance.</p>
                    </div>
                    <Button text="Contant Us" />
                </div>
            </div>

        </div>
    )
}

export default Service