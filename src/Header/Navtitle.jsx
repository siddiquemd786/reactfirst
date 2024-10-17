import React from 'react'

function Navtitle({title, text}) {
  return (
    <div className='md:w[137px] md:w-[54px] '>
          
    <p className='text-[12px] w-[137px] text-Primary text-start,'>{title}</p>
    <h1 className='text-[26px] w-[137px] text-dashcolor font-[700] text-start' >{text}</h1>

</div>
  )
}

export default Navtitle