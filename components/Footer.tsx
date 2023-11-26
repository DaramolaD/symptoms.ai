import Image from 'next/image'
import React from 'react'

type Props = {}

const footer_links_1 = [
    {
        id: 1,
        link: "Home"
    },
    {
        id: 2,
        link: "Reports"
    },
    {
        id: 3,
        link: "Community"
    },
    {
        id: 4,
        link: "Emergency"
    },
    {
        id: 5,
        link: "Help & Suppory"
    },
    {
        id: 6,
        link: "FAQs"
    }
]
const footer_links_2 = [
    {
        id: 1,
        link: "Setting"
    },
    {
        id: 2,
        link: "History"
    },
    {
        id: 3,
        link: "Reminders"
    },
    {
        id: 4,
        link: "Consultations"
    },
    {
        id: 5,
        link: "Symptom Checker"
    },
    {
        id: 6,
        link: "Contant"
    }
]

function Footer({ }: Props) {
    return (
        <div className='w-full'>
            <div className="footer bg-[#21262F] px-[20px] md:pl-[100px] pt-[32px] pb-[64px] flex flex-col gap-[48px]">
                <div className="logo max-w-[194px]">
                    <Image src="/Logo.png" alt='logo' width={100} height={100} className='max-w-[194px]'/>
                </div>
                <div className="footer_links_cont flex flex-col sm:flex-row gap-[60px]">
                    <ul className="footer_links flex flex-col gap-[12px]">
                        {footer_links_1.map(({ id, link }) => (
                            <li key={id} className="text-[#FFFFFF]">{link}</li>
                        ))}
                    </ul>
                    <ul className="footer_links flex flex-col gap-[12px]">
                        {footer_links_2.map(({ id, link }) => (
                            <li key={id} className="text-[#FFFFFF]">{link}</li>
                        ))}
                    </ul>
                    <div className="email max-w-[700px] w-full flex flex-col gap-[16px]">
                        <h4 className='text-2xl text-[#fff] text-left'>Subscribe to our newsletter</h4>
                        <input type="text" placeholder="Enter your Email" className='p-[16px] border border-[#7E8695] bg-[#21262F] w-full text-[#BFC6D4] text-base rounded-[8px]'/>
                    </div>
                </div>
            </div>
            <div className="footer_footer bg-[#7CE797] px-[20px] py-[16px] text-center">
                <p className="text-[#000000]">&copy;2023 Symptoms.ai Inc. | Privacy Policy | Terms & Conditions</p>
            </div>
        </div>
    )
}

export default Footer