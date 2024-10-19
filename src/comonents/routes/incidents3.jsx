import React from 'react'
import Navbar from '../../Header/Navbar'
import { useNavigate } from 'react-router-dom'


const incidents3 = () => {

const Navigate=useNavigate();


const Handaler=()=>{
    Navigate("/Incidents2")
}

  return (


   <>
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
        <button className='w-[139px] h-[42px] rounded-[6px] bg-secondary'>Next Step</button>
    </div>
   </nav>
   
   </>
  )
}

export default incidents3