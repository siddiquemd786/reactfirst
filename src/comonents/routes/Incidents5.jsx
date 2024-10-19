import React from 'react'
import Navbar from '../../Header/Navbar'
import { useNavigate } from 'react-router-dom'

const Incidents5 = () => {

const Navigate=useNavigate();

const Handaler=()=>{
  Navigate("/Incidents4")
}
const HandalerClick=()=>{
Navigate("/")
}


  return (
    <div >
       <Navbar/>
     
 <nav className="max-w-[1269px]  md:mt-2 mt-64  p-4 flex flex-col font-Onest  md:flex-row justify-between items-center border-t-2 md:gap-4">

   <div className=' w-[250px]  '>
    <p className='text-[12px] font-[400] text-Primary'>Home - Incidents - New Incident</p>
     <h3 className='text-[26px] font-[700] '>New Incident</h3>      
      </div>
      <div className='w-[527px] h-[5px] bg-[#E5E7EB] rounded-[10px]'>
        <div className='w-[98px] h-[5px] bg-secondary rounded-[10px]'></div>
      </div>

    <div className='flex justify-between gap-[14px] '>
        <button onClick={Handaler} className='w-[139px] h-[42px] rounded-[6px] border-2'>Back</button>
        <button onClick={HandalerClick} className='w-[139px] h-[42px] rounded-[6px] bg-secondary text-white'>Finished</button>
    </div>
   </nav>

   <div className='w-[752px] h-[589px] gap-6 mb-20  absolute left-[440px] top-[220px]'>
    <div className='w-[700px] h-[75px]'>
      <h1 className='text-black text-[24px] font-[700] h-[31px]'>Where’s the incident?</h1>
      <p className='text-Primary w-[518px] leading-[22px] text-[16px] font-[400] mt-3'>Enter a GPS, address. or pin point on the map. Try to be as accurate as possible, or click:Jurisdiction Wide</p>

    </div>
<div>
<div className='  items-center  gap-[14px]   mt-6'>
        <div className=' absolute top-28 ml-4 '>
        <div className='w-[264px]  h-[42px] rounded-[6px] bg-[#F4F4F5]   gap-2 flex justify-start items-center border-2'>
         
         <img className=' ml-2'  src="./image/Frame.png" alt="" />
         <input className='w-full' type="text" placeholder='Enter incident address or GPS'  />
         
   
         </div>
         <div className='w-[190px] md:h-[42px] rounded-[6px] mt-2 bg-[#F4F4F5]   gap-2 flex justify-center items-center border-2'>
        
        <img className='  h-[18px] ml-2'  src="./image/Frame.png" alt="" />
        <input className='w-full' type="text" placeholder='Pinpoint damage'  />
        
  
        </div>
        </div>

         <div className=' rounded-[6px] mb-8 '>
         <img className='rounded-[6px] ' src="./img/map.png" alt="Card Image" />
         </div>
         
          
       
        </div>
</div>
   </div>
   
 



    </div>
  )
}

export default Incidents5