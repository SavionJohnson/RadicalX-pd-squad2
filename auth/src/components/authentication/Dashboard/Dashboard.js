import React from 'react'
import Sidebar from "./Sidebar";
import Display from './Display';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function Dashboard() {
  const textStyle = {
    color: '#793EF5'
  }
  return (
    <>
      <Router>
        <Routes>
          <Sidebar />
          {/* <Route path="/" element={<Sidebar style={textStyle}/>}/> */}
          <Route path="/dashboard" element={<Sidebar style={textStyle} />} />
          <Route path="/Apprenticeships" element={<Sidebar style={textStyle} />} />
          <Route path="/Internships" element={<Sidebar style={textStyle} />} />
          <Route path="/Jobs" element={<Sidebar style={textStyle} />} />
          <Route path="/Settings" element={<Sidebar style={textStyle} />} />

        </Routes>
      </Router>
      <Display heading={'Apprenticeships'} />


    </>
  )
}
