import React from "react";
import "./header.css";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import RemoveIcon from '@mui/icons-material/Remove';


export default function Header() {
  return (
    <div className="headerContainer">
      <div className="topbarLeft">
      <Button sx={{ textTransform: 'capitalize', m: 1 }}  startIcon={<ArrowBackIcon sx={{color:"#793EF5"}} />}>Back</Button>

      </div>

      <div className="topbarCenter">
        <h1> Creating Apprenticeship</h1>
      </div>

      <div className="topbarRight">
      <Button sx={{ textTransform: 'capitalize', m: 1 }} startIcon={<AddBoxOutlinedIcon />} >Publish Apprenticeship</Button>
      

      

      </div>
    </div>
  );
}
