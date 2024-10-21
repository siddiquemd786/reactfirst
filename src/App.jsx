import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './App.css';

import Header from './Header/Header';
import Cards from './comonents/Cards';
import Chat from './comonents/Chat';
import Incidents from './comonents/routes/Incidents';
import Incidents2 from './comonents/routes/Incidents2';
import Incidents3 from './comonents/routes/incidents3';
import Incidents4 from './comonents/routes/Incidents4';
import Incidents5 from './comonents/routes/Incidents5';
import Incidents6 from './comonents/routes/Incidents6';



function MainLayout() {
  return (
    <>
      <Header />
      <Cards />
      <Chat />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
          
        <Route path="/" element={<MainLayout />} />  
        
        
        <Route path="/incidents" element={<Incidents />} />
        <Route path="/Incidents2" element={<Incidents2 />} />
        <Route path="/Incidents3" element={<Incidents3 />} />
        <Route path="/Incidents4" element={<Incidents4/>} />
        <Route path="/Incidents5" element={<Incidents5/>} />
        <Route path="/Incidents6" element={<Incidents6/>} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
