import React from 'react'

import "./Dashboard.css"

import Sidebar from "./Sidebar";
import DisplaySection  from "./DisplaySection";

function Dashboard() {
  return (
    <div className="App">
      <Sidebar/>
      <DisplaySection/>
    </div>
  )
}

export default Dashboard