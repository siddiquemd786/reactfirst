import React from 'react'
import Navbar from '../../Header/Navbar'

import Cards from '../Cards'
import Button from '../Button'
import Navtitle from '../../Header/Navtitle'
import Search from '../../Header/Search'
import { NavLink } from 'react-router-dom'


const Incidents = () => {

  const newTitle = <NavLink to="/" className="text-blue-500 text-semiblack ">Home, Incidents</NavLink>;
  const newText = "Incidents";
  return (
    <>
   <Navbar/>
   <nav className="max-w-[1269px]  md:mt-2 mt-64  p-4 flex flex-col  md:flex-row justify-between items-center border-t-2 md:gap-4">
       
       <div className='md:w[137px] md:w-[54px] '>
          
          <Navtitle    title={newTitle}  text={newText}/>
         
      </div>
        <Search/>
        <div> <Button className="  ">+ New Incidents</Button></div>

    
    </nav>
 
   <Cards/>
    
    </>
  )
}

export default Incidents