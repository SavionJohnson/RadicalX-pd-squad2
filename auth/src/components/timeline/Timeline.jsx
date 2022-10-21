import React from 'react';
import './timeline.css';
import Button from '@mui/material/Button';
import calendar from './calendar-2.png';
import infocircle from './info-circle.png';


export default function Timeline() {
  return (

    <div className='Timeline'>
        <div className='top'>Timeline
        <img src={infocircle} className="info-circle" alt=''/>
        </div>
        
    <div className='Sdate'>
    <Button sx={{ textTransform: 'capitalize', m: 1 }}>Start Date
    <div className='CalDiv'>
    <img src={calendar} className="calender" alt=''/>
    </div>
    </Button>
    </div>
    <div className='Enddate'>

        
    <Button sx={{ textTransform: 'capitalize', m: 1 }}>Estimated End date

    <div className='CalDiv'>
    <img src={calendar} className="calender" alt=''/> 

    </div>
    </Button>
    
    </div>

    </div>

   
    
  )
}
