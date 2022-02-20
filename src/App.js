// import './App.css';
import React from 'react';
import Header from './pages/Header'
import Aboutus from './pages/layout/Aboutus';
import Service from './pages/layout/Service';
import { Browser as Router, Routes ,useRoutes} from 'react-router-dom'
function App() {
  return useRoutes([
    {path:"/",element:<Aboutus />}
  ]
 
  );
}

export default App;
