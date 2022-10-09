import React from 'react';
import "./navbar.css";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Button from '@mui/material/Button';



export default function Navbar() {
  return (
    <div className='navbarContainer'>
      <div className="navLeft">
      <Button sx={{ textTransform: 'capitalize', m: 1 }}  startIcon={<CircleOutlinedIcon />}>Company Title & Desc.</Button>
      </div>

      <div className="navCenter">
      <Button sx={{ textTransform: 'capitalize', m: 1 }}  startIcon={<CircleOutlinedIcon />}>Team Type</Button>
      </div>

      <div className="navMid">
      <Button sx={{ textTransform: 'capitalize', m: 1 }}  startIcon={<CircleOutlinedIcon />}>Team Roles</Button>

      </div>

      <div className="navRight">
      <Button sx={{ textTransform: 'capitalize', m: 1 }}  startIcon={<CircleOutlinedIcon />}>Team Admin</Button>

      </div>

      <div className="navRightend">
      <Button sx={{ textTransform: 'capitalize', m: 1 }}  startIcon={<CircleOutlinedIcon />}>Team Admin</Button>

  
      </div>
    </div>
  )
}
