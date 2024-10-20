import React from 'react'
import Navbar from '../../Header/Navbar'
import { useNavigate } from 'react-router-dom'

const Incidents4 = () => {

const Navigate=useNavigate();
const Handaler=()=>{
    Navigate("/Incidents3")
}
const HandalerClick=()=>{
  Navigate("/Incidents5")
}




  return (
   <>
   <div className='font-Onest'>
 <Navbar/>
 <nav className="max-w-[1269px]  md:mt-2 mt-64  p-4 flex flex-col font-Onest  md:flex-row justify-between items-center border-t-2 md:gap-4">

   <div className=' w-[250px]  '>
    <p className='text-[12px] font-[400] text-Primary'>Home - Incidents - New Incident</p>
     <h3 className='text-[26px] font-[700] '>New Incident</h3>      
      </div>

      <div className='md:w-[527px] w-full mt-6 md:mt-0 h-[5px] bg-[#E5E7EB] rounded-[10px]'>
        <div className='w-[98px] h-[5px] bg-secondary rounded-[10px]'></div>
      </div>

    <div className='flex justify-between mt-10 md:mt-0 gap-[14px] '>
        <button onClick={Handaler} className='w-[139px] h-[42px]  rounded-[6px] border-2 md:border-blue-200 border-blue-300'>Back</button>
        <button onClick={HandalerClick} className='w-[139px] h-[42px] rounded-[6px] bg-secondary text-white'>Next Step</button>
    </div>
   </nav>

   <div className='w-[752px] h-[366px]  absolute md:left-[400px] ga-[25px] mt-[60px]'>
    <div className='h-[54px] w-[700px]'>
        <h1 className='md:text-[24px] text-[20px] font-Onest font-[700] text-dashcolor' >Let’s give the incident a title?</h1>
        <p className='text-Primary text-[12px] md:text-[14px] font-[400]'>Make a title that will easily identify the incidents</p>
    </div>
    <input className='h-[50px] md:w-[700px] w-[400px] border-[1px] mt-[24px] rounded-[6px] px-[10px] py-[12px] gap-2' type="text" placeholder='Add title here' />
    <div className='h-[53px] w-[700px] mt-[12px]'>
        <h1 className='md:text-[24px] text-[20px] font-Onest font-[700] text-dashcolor' >Describe what happened during the incident?</h1>
        <p className='text-Primary text-[12px] md:text-[14px] font-[400]'>Share some information about the incident. The when, where, how. </p>
    </div>
    <textarea className='md:w-[752px] w-[400px] h-[127px] px-2 rounded-[6px] border-[1px]   py-[10px] mt-4' placeholder='Type here' name="" id=""></textarea>

   </div>



   </div>
   
   
   </>
  )
}

export default Incidents4