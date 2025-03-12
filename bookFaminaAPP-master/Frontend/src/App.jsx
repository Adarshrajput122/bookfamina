import React from 'react';
import Home from './Home/Home';
import Course from './components/Course';
import { Route, Routes } from "react-router-dom";
import Courses from './courses/courses';
import Signup from './components/Signup'; // Ensure this matches the actual file name
import About from './components/About';
import Contact from './components/contact';


function App() {
  return (
    <>
      {/* <Home />
      <Course /> */}
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;



