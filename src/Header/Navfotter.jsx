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
    <nav className="max-w-[1269px]  md:mt-2 mt-64  p-4 flex flex-col  md:flex-row justify-between items-center border-t-2 md:gap-4">
       
       <div className='md:w[137px] md:w-[54px] '>
          
          <Navtitle title={newTitle} text={newText}/>
         
      </div>
        <Search/>
        <div> <button onClick={HandalerClick}  className='bg-secondary  h-[42px] w-[120px] py-2 text-white font-[700] text-[15px] rounded-md '> Cypher AI</button></div>

    
    </nav>
  )
}

export default Navfotter