import React from 'react'

const Search = () => {
  return (
    

<div className=' flex flex-col gap-6 mt-16 md:mt-0 md:flex-row md:justify-between items-center  md:gap-[14px] absolute  md:left-[885px] '>
        
        <div className='md:w-[190px] w-[160px] md:h-[42px] rounded-[6px]    gap-2 flex  items-center border-2'>
         
          <img className='md:w-[18px]  md:h-[18px] md:ml-2'  src="./image/Frame.png" alt="" />
          <input className='w-full' type="text" placeholder='Search Incident'  />
    
          </div>
          <div className='md:w-[190px]  md:h-[42px] rounded-[6px] gap-2 flex justify-center items-center border-2'>
         <p className='text-Primary'>Sort By:<span className='text-[#71717A]'> Date modified</span></p>
    
          </div>
          
       
        </div>

    
  )
}

export default Search