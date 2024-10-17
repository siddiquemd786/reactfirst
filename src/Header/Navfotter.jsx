import React from 'react'
import Button from '../comonents/Button'

const Navfotter = () => {
  return (
    <nav className="max-w-[1269px]  md:mt-2 mt-64  p-4 flex flex-col  md:flex-row justify-between items-center border-t-2 md:gap-4">
        <div className='md:w[137px] md:w-[54px] '>
          
            <p className='text-[12px] w-[137px] text-Primary text-start'>Welcome back</p>
            <h1 className='text-[26px] w-[137px] text-dashcolor font-[700] text-start' >Dashboard</h1>
       
        </div>

        <div className=' flex justify-between items-center  gap-[14px] '>
        <div className='md:w-[190px] w-[100px] md:h-[42px] rounded-[6px]    gap-2 flex justify-center items-center border-2'>
         
          <img className='w-[18px]  h-[18px] ml-10'  src="./image/Frame.png" alt="" />
          <input type="text" placeholder='Search Incident'  />
    
          </div>
          <div className='md:w-[190px] mdh-[42px] rounded-[6px]   gap-2 flex justify-center items-center border-2'>
         <p className='text-Primary'>Sort By:<span className='text-[#71717A]'>Date modified</span></p>
    
          </div>
          
       <div> <Button>Cypher AI</Button></div>
        </div>

    
    </nav>
  )
}

export default Navfotter