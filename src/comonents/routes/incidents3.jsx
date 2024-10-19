import React from 'react'
import Navbar from '../../Header/Navbar'
import { useNavigate } from 'react-router-dom'


const incidents3 = () => {

  const images=[
    {
      id:1,
      image: <img src="./img/fi1.png" alt="Card Image" />,
      name:"Avalanche"
    },
    {
      id:2,
      image: <img src="./img/fi2.png" alt="Card Image" />,
      name:"Biological"
    },
    {
      id:3,
      image: <img src="./img/fi3.png" alt="Card Image" />,
      name:"Blizzard"
    },
    {
      id:4,
      image: <img src="./img/fi4.png" alt="Card Image" />,
      name:"Cold/Freezing"
    },
    {
      id:5,
      image: <img src="./img/fi5.png" alt="Card Image" />,
      name:"Drought"
    },
    {
      id:6,
      image: <img src="./img/fi6.png" alt="Card Image" />,
      name:"Earthquake"
    },
    {
      id:7,
      image: <img src="./img/fi7.png" alt="Card Image" />,
      name:"Flooding"
    },
    {
      id:8,
      image: <img src="./img/fi8.png" alt="Card Image" />,
      name:"Heat Wave"
    },
    {
      id:9,
      image: <img src="./img/fi9.png" alt="Card Image" />,
      name:"Hall"
    },
    {
      id:10,
      image: <img src="./img/fi10.png" alt="Card Image" />,
      name:"Lightning"
    },
    {
      id:11,
      image: <img src="./img/fi11.png" alt="Card Image" />,
      name:"Man Made"
    },
    {
      id:12,
      image: <img src="./img/fi12.png" alt="Card Image" />,
      name:"Mudslide"
    },
    {
      id:13,
      image: <img src="./img/fi13.png" alt="Card Image" />,
      name:"Severe Storm"
    },
    {
      id:14,
      image: <img src="./img/fi14.png" alt="Card Image" />,
      name:"Strong Wind"
    },
    {
      id:15,
      image: <img src="./img/fi15.png" alt="Card Image" />,
      name:"Tornado"
    },
    {
      id:16,
      image: <img src="./img/fi16.png" alt="Card Image" />,
      name:"Tsunami"
    },
    {
      id:17,
      image: <img src="./img/fi17.png" alt="Card Image" />,
      name:"Volcanic Eruption"
    },
    {
      id:18,
      image: <img src="./img/fi18.png" alt="Card Image" />,
      name:"Wildfire"
    }
    

  ]

const Navigate=useNavigate();


const Handaler=()=>{
    Navigate("/Incidents2")
}
const HandalerClick=()=>{
  Navigate("/Incidents4")
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
        <button onClick={HandalerClick} className='w-[139px] h-[42px] rounded-[6px] bg-secondary text-white'>Next Step</button>
    </div>
   </nav>
   <div className='w-[753px] h-[445px] font-Onest gap-[25px] absolute left-[410px] top-[220px]'>
    <h1 className='text-[24px] font-[700] text-dashcolor'>Which of these best describes the incident?</h1>
   
    <div className="w-[753px] h-[389px] gap-[8px]  mt-4 flex flex-wrap">
      {images.map((data) => (
        <div
          key={data.id}
          className="w-[180px] h-[69px] rounded-[6px] gap-[10px] px-2 hover:bg-secondary border-[1px] flex justify-normal items-center"
        >
          <div className='mt-2'>
          {data.image}
          </div>
          
          <p> {data.name} </p>
        </div>
      ))}
    </div>
  
   </div>
  
   </>
  )
}

export default incidents3