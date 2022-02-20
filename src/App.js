import React from 'react';
import Main from './layout/Main';
import Aboutus from './pages/Aboutus';
import Service from './pages/Service';
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    // <Main />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<Aboutus />} />
        <Route path="service" element={<Service />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;


// useRoutes([
//   {path:"/",element:<Aboutus />}
// ]

// )