import React from 'react'
import Navbar from '../../Header/Navbar'
import Search from '../../Header/Search'
import { useNavigate } from 'react-router-dom'

function Incidents6() {
const Navigate=useNavigate()

const Handaler=()=>{
  Navigate("/Incidents2")
}

  return (
    <div className=''>

<Navbar/>

<nav className="md:-w-[1250px]  md:mt-2 mt-64  p-4 flex flex-col font-Onest  md:flex-row justify-between items-center border-t-2 gap-20 md:gap-4">

<div className=' md:w-[680px]  '>
    <p className='text-[12px] font-[400] text-Primary'>Incidents - DR-4699 March 2023 Severe Storms </p>
    <div className='flex items-center gap-1'>
    <img className='h-[25px] w-[25px]' src="./img/fi19.png" alt="" />
    <h3 className='md:text-[26px] font-[700]  '>DR-4699 March 2023 Severe Storms</h3>  
    </div>
         
      </div>

      <Search/>
      <div className='flex justify-between mt-10 md:mt-1 md:mx-[80px] gap-[14px] '>
        
        <button onClick={Handaler}  className='w-[138px] h-[42px] rounded-[6px] bg-secondary text-white'>New Location</button>
    </div>

</nav>

<div className='md:w-[1300px] md:h-[1582px] md:gap-[94px] mt-10  grid grid-cols-1 md:flex justify-between  '>
 
 <div className='md:w-[680px] h-full mt-[-30px]  '>
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
<div className='md:w-[677px] w-[472px]  h-[102px]'>
  <h1 className='text-dashcolor'>Description</h1>
<p className='text-Primary text-[12px] md:text-[16px] font-[400]'> Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>
</div>



<div className='mt-[70px]'>
  <div className='flex justify-between'>
    <h6>Locations</h6>
    <p className='text-Primary'>See all</p>
  </div>
  <div className='w-678px h-500px flex gap-4 flex-wrap'>
    <img src="./img/Frame 1321315997.png" alt="" />
    <img src="./img/Frame 1321316000.png" alt="" />
    <img src="./img/Frame 1321315997.png" alt="" />
    <img src="./img/Frame 1321315997.png" alt="" />

  </div>
</div>
<div className='mt-6'>
  <div className='flex justify-between'>
    <h6>Activities</h6>
    <p className='text-Primary'>See all</p>
  </div>
  <div className='w-678px h-500px flex gap-8 flex-wrap'>
  <img src="./img/Frame 1321318659.png" alt="" />
  <img src="./img/Frame 1321318659.png" alt="" />

  </div>
</div>
<div className='mt-8'>
  <div className='flex justify-between'>
    <h6>Documents</h6>
    <p className='text-Primary'>See all</p>
  </div>
  <div className='w-678px h-500px flex gap-8 flex-wrap'>
  <img src="./img/Frame 1321318659.png" alt="" />
  <img src="./img/Frame 1321318659.png" alt="" />

  </div>
</div>



 </div>


 <div className="md:w-[526px] md:h-[563px] ">
  <h6 className='text-Primary'>Incidents Map</h6>
  <img
    className="w-full h-full mt-2 object-fit"
    src="./img/map2.png"
    alt="Card Image"
  />
</div>



</div>



    </div>
  )
}

export default Incidents6