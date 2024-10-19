import React from 'react'

import Navtitle from './Navtitle'
import Search from './Search';
import { useNavigate } from 'react-router-dom';


const Navfotter = () => {

  const Navigate=useNavigate()
  const HandalerClick=()=>{
    Navigate("/incidents")
  }

   const newTitle = "Welcome!";
   const newText = "Dashboard";
  return (
    <nav className="md:w-[1269px] w-[500px] md:h-20  h-[300px] md:mt-2 mt-64  p-4 flex flex-col gap-24 md:flex-row md:justify-between md:items-center border-t-2 md:gap-4">
       
       <div className='md:w[137px] md:w-[54px] '>
          
          <Navtitle title={newTitle} text={newText}/>
         
      </div>
      
        <Search/>
        <div className='mt-2 md:mt-0'> <button onClick={HandalerClick}  className='bg-secondary  h-[42px] w-[120px] py-2 text-white font-[700] text-[15px] rounded-md '> Cypher AI</button></div>

    
    </nav>
  )
}

export default Navfotter