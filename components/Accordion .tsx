import React, {useState} from 'react'

type Props = {
    title: string,
    content: string
}

function Accordion ({title, content}: Props) {
    const [isActive, setIsActive] = useState(false);

    return (
      <div className="accordion-item">
        <div className="flex justify-between text-base text-[#21262F] py-[16px] px-[16px] bg-[#EFF2F9]" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && <div className="accordion-content py-[16px] px-[16px] bg-[#fff]">{content}</div>}
      </div>
    );
  };

export default Accordion 