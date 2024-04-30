import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
