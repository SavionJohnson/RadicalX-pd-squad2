import React from 'react';
import Sidebar from "./Sidebar";
import Display from './Display';
import {
  Routes,
  Route
} from "react-router-dom";


export default function Dashboard() {
  const textStyle = {
    color: '#793EF5'
  };
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Sidebar style={textStyle} />} />

      </Routes>

      <Display heading={'Apprenticeships'} />


    </>
  );
}
