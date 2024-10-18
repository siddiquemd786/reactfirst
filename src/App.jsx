import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './Header/Header';
import Cards from './comonents/Cards';
import Chat from './comonents/Chat';
import Incidents from './comonents/routes/Incidents';
import Incidents2 from './comonents/routes/Incidents2';


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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
