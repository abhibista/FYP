import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Sidebar from './Pages/Sidebar';
import Navbar from './Pages/Navbar';
// import Login from '/Pages/Login';
// import Register from '/Pages/Register'; 
import Sidebar from './Pages/Sidebar';

function App()
{
  return (
    
<Router>
   <div className='App'>
   <Routes>
   <Route path="/Sidebar" element={<Sidebar />} />
   <Route path="/Navbar" element={<Navbar />} /> 
   </Routes>
   </div>
   </Router>
  );
}

export default App;


