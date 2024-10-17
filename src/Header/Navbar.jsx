import React from 'react'
import Button from '../comonents/Button'

const Navbar = () => {
    
  return (
  
<nav className='md:w-[1269px]  h-[41px]  flex justify-between items-center'>
        <div className='w-[131px] h-[36px] flex justify-center '  > <img src="./image/logo.jpg" alt="" /> </div>
        
        <div className='md:static absolute '>
          
           <ul className='flex-col w-[574px]  h-[18px] flex  md:flex-row  lg:justify-between items-start md:items-center text-Primary gap-2 md:gap-4 mt-20 md:mt-0'>
            <li>
            <a href=""><span className='text-dashcolor text-[12px] md:text-[14px] font-[700]'>Dashboard</span></a>
            </li>
            <li><a href="">Incidents</a></li>
            <li><a href="">Locations</a></li>
            <li> <a href="">Activities</a></li>
            <li> <a href="">Documents</a></li>
            <li> <a href="">Cypher AI</a></li>

           </ul>
           
            
            
           
         
           
           
        </div >
        <div div className='w-[258px] h-[41px] flex justify-end items-center'>
            <div className='flex items-center gap-1'>
                <img className='w-10 h-10' src="./image/ring.png" alt="" />
                <img className='w-10 h-10' src="./image/man.png" alt="" />
            </div>
            <div className='items-center text-Primary text-start  leading-5 ml-4 '>
                <p className='text-[18px]'>Usman Zafar</p>
                <p className='[12px]'>usmanzafar@gmail.com</p>
            </div>
        </div>
    </nav>
  
  )
}

export default Navbar