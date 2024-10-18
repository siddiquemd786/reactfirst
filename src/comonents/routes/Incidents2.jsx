import React from 'react'
import Navbar from '../../Header/Navbar'

const Incidents2 = () => {
  return (
    <>
    <Navbar/>
    <div className='md:w-[1269px]  h-[41px] font-Onest   items-center'>
       <div className='text-center text-[32px] font-[700] mt-16 text-black'>Let’s get started</div>
       <div className='text-center  ml-[400px] flex justify-center text-[15px] w-[468px] font-[700] mt-2 text-Primary'> <p>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p></div>
    </div>

    <div className='w-[609px]  h-[29px]  absolute left-[520px] top-[280px]  '> <img className='text-[#E4E4E7]' src="./image/group.png" alt="" /> </div>

    <div className='w-[815px] h-[270px] absolute left-[400px] top-[340px]  flex justify-between'>

        <div className='w-[235px] h-[269px] border-2 ' >
            <img className='mt-4 ml-2' src="./image/Frame (1).png" alt="" />
            <h1 className='text-[20px] ml-2 font-[700] w-[190px] h-[43px] leading-[29px] pt-10 '>What type of incident?</h1>
             <p className='text-[14px] ml-2 font-[400] w-[195px] h-[32px] leading-[22px] text-Primary pt-20'>Choose the category that best describes the incident.</p>
        </div>
        <div className='w-[235px] h-[269px] border-2' >
            <img className='mt-4 ml-2' src="./image/Frame (2).png" alt="" />
            <h1 className='text-[20px] ml-2 font-[700] w-[190px] h-[43px] leading-[29px] pt-10 '>Tell us about the incident?</h1>
             <p className='text-[14px] ml-2 font-[400] w-[195px] h-[32px] leading-[22px] text-Primary pt-20'>Let’s connect the dots and see where to start..</p>
        </div>
        <div className='w-[235px] h-[269px] border-2' >
            <img className='mt-4 ml-2 h-[44px] w-[44px]' src="./image/sid.png" alt="" />
            <h1 className='text-[20px] ml-2 font-[700] w-[190px] h-[43px] leading-[29px] pt-10 '>Where did the incident occur?</h1>
             <p className='text-[14px] ml-2 font-[400] w-[195px] h-[32px] leading-[22px] text-Primary pt-20'>Lorem ipsum dolar sit general sac mascho werho.</p>
        </div>
    </div>
    
    <button  className='bg-secondary absolute left-[700px] top-[650px] px-4 h-[42px] w-[139px] py-2 text-white text-[700] text-[15px] rounded-md '>Get started</button>
    
    </>
  )
}

export default Incidents2