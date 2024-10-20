import React, { useState } from 'react'
import Button from './Button';


const Chat = () => {

               const[isvisiable,setisvisiable]=useState(true)
               
             
               const Handaler=(e)=>{
                 e.preventDefaulte;
                 setisvisiable(!isvisiable);
                

               }
               


  return (
    <>
   {isvisiable && <div className='w-[331px]  h-[475px] absolute left-[13px] md:ml-[1090px] top-[2620px]  md:mt-[-2140px]'>
        <div className='bg-secondary w-full h-[63px] rounded-t-[12px] px-[15px] pt-4 text-white items-center text-[25px] font-[700] font-Onest'> <h1>Chat with Cypher</h1></div>
        
        <div className='h-[57px] w-[213px] absolute  left-[108px] top-[70px] rounded-[7px] text-[12px] leading-[19px] font-Onest font-[700] pl-2 py-2 bg-semiblack text-white' > <p>Lorem ipsum dolar sit general sac mascho werho</p>

          </div>

          <div className='h-[57px] w-[213px] absolute  left-2 top-[135px] rounded-[7px] text-[12px] leading-[19px] font-Onest font-[700] pl-2 py-2 text-sonicsilver border-2' > <p>Lorem ipsum dolar sit general sac mascho werho</p>

          </div>

          <div className='h-[57px] w-[213px] absolute  left-2 top-[205px] rounded-[7px] text-[12px] leading-[19px] font-Onest font-[700] pl-2 py-2 text-sonicsilver border-2' > <p>Lorem ipsum dolar sit general sac mascho werho</p>

</div>

<div className='h-[57px] w-[213px] absolute  left-[108px] top-[270px] rounded-[7px] text-[12px] leading-[19px] font-Onest font-[700] pl-2 py-2 bg-semiblack text-white' > <p>Lorem ipsum dolar sit general sac mascho werho</p>

          </div>
 <div className='h-[57px] w-[312px] absolute  left-2 top-[340px] rounded-[7px] text-[12px] leading-[19px] font-Onest font-[700] pl-2 py-2 text-black border-2' > <p>Enter your question...</p>

</div>

<div className='h-[57px] w-[312px] absolute  left-2 top-[410px] rounded-[7px] text-[12px] leading-[19px] font-Onest font-[700] pl-2 py-2 flex justify-between text-black border-2' > 
  <div><img className='h-10 w-20' src="./image/framee.png" alt="" /> </div>
  <div className=''> <Button className="rounded-full">Send</Button> </div>

</div>
          
        


</div> }

  <button onClick={Handaler} className={`text-[55px] font-[700] flex justify-center z-30  items-center h-[77px] w-[77px] absolute top-[3120px] left-[260px] md:left-[1355px] py-[40px] rounded-full px-6 md:top-[1020px] ${(isvisiable===true? "bg-white text-black":"bg-secondary text-white")}`}> {isvisiable===true? "X":"C"} </button>
   
   

  
    
    
    </>
  )
}

export default Chat