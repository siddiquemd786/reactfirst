import React from 'react'

const Search = () => {
  return (
    

<div className=' flex justify-between items-center  gap-[14px] absolute left-[900px] '>
        <div className='md:w-[190px] w-[100px] md:h-[42px] rounded-[6px]    gap-2 flex justify-center items-center border-2'>
         
          <img className='w-[18px]  h-[18px] ml-10'  src="./image/Frame.png" alt="" />
          <input type="text" placeholder='Search Incident'  />
    
          </div>
          <div className='md:w-[190px] md:h-[42px] rounded-[6px]   gap-2 flex justify-center items-center border-2'>
         <p className='text-Primary'>Sort By:<span className='text-[#71717A]'>Date modified</span></p>
    
          </div>
          
       
        </div>

    
  )
}

export default Search