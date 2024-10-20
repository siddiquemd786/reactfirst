import React from 'react'
import Navbar from '../../Header/Navbar'
import { useNavigate } from 'react-router-dom'


const Incidents2 = () => {

const Navigate=useNavigate();

const HandalerClick=()=>{
  Navigate("/Incidents3")
}



  return (
    <>
    <Navbar/>
    <div className='md:w-[1269px]  md:h-[41px] font-Onest   md:items-center'>
       <div className='text-center text-[32px] font-[700] mt-[250px] md:mt-16 text-black'>Let’s get started</div>
       <div className='text-center  md:ml-[400px] flex justify-center text-[15px] w-[468px] font-[700] mt-2 text-Primary'> <p>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p></div>
    </div>

    <div className='md:w-[609px]  md:h-[29px] absolute md:left-[520px] top-[435px]  md:top-[280px]  '> <img className='text-[#E4E4E7]' src="./image/group.png" alt="" /> </div>

    <div className='md:w-[815px] md:h-[270px] absolute left-[150px] md:left-[400px] top-[480px] md:top-[340px]  flex flex-col md:flex-row justify-between'>

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
    
    <button onClick={HandalerClick}  className='bg-secondary absolute left-[700px] top-[650px] px-4 h-[42px] w-[139px] py-2 text-white font-[700] text-[15px] rounded-md '> Get started</button>
    
    </>
  )
}

export default Incidents2