import Image from 'next/image'
import React from 'react'

type Props = {}

function Testimonies({ }: Props) {
    return (
        <div className="testimony w-full flex justify-center items-center py-[100px]">
            <div className="bg-[#E1F9E5] max-w-full md:max-w-[390px] text-center w-fit flex flex-col py-[60px] justify-center items-center px-[16px] py-[64px] gap-[48px]">
                <h3 className='text-xl text-[#373E4F]'>“Symptoms.ai has been a game-changer for me! It quickly assessed my symptoms, provided accurate suggestions, and saved me a trip to the doctor. The peace of mind it offers is priceless!”</h3>
                <div className="author">
                    <h4 className='text-[#4CA067 text-lg'>Amir Gabba,</h4>
                    <p className='text-[#56568B] text-lg'>Project manager, <br /> ORACLE</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonies