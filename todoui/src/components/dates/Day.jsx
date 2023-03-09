import React, {useState} from 'react'
import ReactDatePicker, { getDefaultLocale } from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const Day = () => {
const [currentDate, setCurrentDate] = useState(new Date())

console.log(currentDate)

  return (
    <div>
    <ReactDatePicker
selected={currentDate}
isClearable
onChange={(date)=> setCurrentDate(date)}
/>

    </div>
  )
}

export default Day