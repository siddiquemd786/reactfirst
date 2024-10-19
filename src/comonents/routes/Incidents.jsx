import React, { useState } from 'react';
import Navbar from '../../Header/Navbar';
import Cards from '../Cards';
import Button from '../Button';
import Navtitle from '../../Header/Navtitle';
import Search from '../../Header/Search';
import { NavLink, useNavigate } from 'react-router-dom'; 

const Incidents = () => {
  const [incidents2, setIncidents2] = useState(""); 
  const navigate = useNavigate(); 
  const handler = () => {
    
    navigate('/Incidents2');
  };

  const newTitle = (
    <NavLink to="/" className="text-semiblack">
      Home, Incidents
    </NavLink>
  );
  const newText = "Incidents";

  return (
    <>
      <Navbar />
      <nav className="max-w-[1269px] md:mt-2 mt-64 p-4 flex flex-col md:flex-row justify-between items-center border-t-2 md:gap-4">
        <div className="md:w-[137px] w-[54px]">
          <Navtitle title={newTitle} text={newText} />
        </div>
        <Search />
       
        <button onClick={handler} className='bg-secondary px-2 py-2 text-white text-[700] text-[15px] rounded-md '>+ New Incidents</button>
      </nav>
      <Cards />
    </>
  );
};

export default Incidents;
