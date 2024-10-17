import React from 'react'
import Button from '../comonents/Button'
import Navtitle from './Navtitle'
import Search from './Search';


const Navfotter = () => {

   const newTitle = "Welcome!";
   const newText = "Dashboard";
  return (
    <nav className="max-w-[1269px]  md:mt-2 mt-64  p-4 flex flex-col  md:flex-row justify-between items-center border-t-2 md:gap-4">
       
       <div className='md:w[137px] md:w-[54px] '>
          
          <Navtitle title={newTitle} text={newText}/>
         
      </div>
        <Search/>
        <div> <Button>Cypher AI</Button></div>

    
    </nav>
  )
}

export default Navfotter