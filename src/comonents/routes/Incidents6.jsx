import React from 'react'
import Navbar from '../../Header/Navbar'
import Search from '../../Header/Search'

function Incidents6() {


  return (
    <div className=''>

<Navbar/>

<nav className="md:-w-[1269px]  md:mt-2 mt-64  p-4 flex flex-col font-Onest  md:flex-row justify-between items-center border-t-2 gap-20 md:gap-4">

<div className=' md:w-[680px]  '>
    <p className='text-[12px] font-[400] text-Primary'>Incidents - DR-4699 March 2023 Severe Storms </p>
    <div className='flex items-center gap-1'>
    <img className='h-[25px] w-[25px]' src="./img/fi19.png" alt="" />
    <h3 className='md:text-[26px] font-[700]  '>DR-4699 March 2023 Severe Storms</h3>  
    </div>
         
      </div>

      <Search/>
      <div className='flex justify-between mt-10 md:mt-0 gap-[14px] '>
        
        <button  className='w-[139px] h-[42px] rounded-[6px] bg-secondary text-white'>New Location</button>
    </div>

</nav>

<div className='md:w-[1300px] md:h-[1582px] md:gap-[94px] flex justify-between bg-slate-400'>
 
 <div className='md:w-[680px] h-full bg-blue-600 '>
<div>
<div className='w-[428px] h-[123px] flex justify-start ml-2 items-center gap-2'>
<img
    className="w-[37px] h-[37px] object-fit"
    src="./img/location.png"
    alt="Card Image"
  />
    <div>
        <p className='text-[14px] font-[400]'>Location</p>
        <h6 className='text-[20px] font-[700]'>Tulare Country, Los Angles, CA 23415</h6>
    </div>

</div>
<div className='w-[428px] h-[123px] mt-[-60px] ml-2 flex justify-start items-center gap-2'>
<img
    className="w-[37px] h-[37px] object-fit"
    src="./img/camera.png"
    alt="Card Image"
  />
    <div className=''>
        <p className='text-[14px] font-[400]'>Approx. Cost:</p>
        <h6 className='text-[20px] font-[700]'>$60,607,456.00</h6>
    </div>

</div>
</div>



 </div>


 <div className="md:w-[526px] md:h-[563px] bg-green-500">
  <img
    className="w-full h-full object-fit"
    src="./img/map2.png"
    alt="Card Image"
  />
</div>


</div>


    </div>
  )
}

export default Incidents6