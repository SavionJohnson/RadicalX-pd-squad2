import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './timeline.css';





export default function Datepicker() {
    const [selectedDate, setSelectedDate] = useState(null)
  return (
    <div className='Datepicker'>
    <DatePicker selected={selectedDate} 
    onChange={date => setSelectedDate(date)}
     />


    </div>

  )
}
