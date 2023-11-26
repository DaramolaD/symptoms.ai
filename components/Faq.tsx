import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import Accordion from './Accordion ';

type Props = {}

const faq_detail = [
    {
        id: 1,
        heading: "How does the symptoms checker work?",
        detail: "The symptoms checker uses advanced AI algorithms to analyze the symptoms you input. It cross-references this information with a vast database of medical knowledge to provide an accurate of possible conditions, along with recommended actions."
    },
    {
        id: 2,
        heading: "How often should I use the app for symptom checking?",
        detail: "The symptoms checker uses advanced AI algorithms to analyze the symptoms you input. It cross-references this information with a vast database of medical knowledge to provide an accurate of possible conditions, along with recommended actions."
    },
    {
        id: 3,
        heading: "How can I track my health progress over time?",
        detail: "The symptoms checker uses advanced AI algorithms to analyze the symptoms you input. It cross-references this information with a vast database of medical knowledge to provide an accurate of possible conditions, along with recommended actions."
    },
]

function Faq({ }: Props) {
    const [active, setActive] = useState(false);

    const toggleAccordion = () => {
        setActive(!active);
    };
    return (
        <div className="faq w-full flex justify-center px-[20px]">
            <div className='w-full max-w-[700px] flex flex-col gap-[50px] py-[64px] justify-center items-center'>
                <div className="">
                    <h3 className='text-2xl text-[#21262F] text-center'>FAQs</h3>
                    <p className='text-base text-[#5D6676] text-center'>Visit our help center to get in touch. We&apos;re super responsive.</p>

                </div>
                <div className='w-full gap-[8px] flex flex-col'>
                    {faq_detail.map(({ heading, detail, id }) => (
                        <Accordion title={heading} content={detail} key={id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faq