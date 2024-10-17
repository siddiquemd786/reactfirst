import React from 'react'

import { twMerge } from 'tailwind-merge'


const Button = ({children,className}) => {
  return (
    <button className={twMerge('w-[50px] lg:w-[108px] lg:h-[42px] h-[24px] bg-secondary mx-auto rounded-md text-white font-Onest text-[8px] lg:text-[14px] ',className)}>{children}</button>
  )
}

export default Button