import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { eventAdded } from './eventSlice'
import { nanoid } from '@reduxjs/toolkit'
import DateTimePicker from 'react-datetime-picker';

const initialValues = {
    id : nanoid(),
    name : "",
    description : "",
    time: new Date(),
    venue: "",
    duration: "",
}
const validationValues = {
  name : true,
  description : true,
  
  venue:true,
  duration:true,
}

export default function Form() {

 const [values,setValues] = useState(initialValues)
 const [validation, setValidation] = useState(validationValues)
 const dispatch = useDispatch()

 console.log(values)
 
 function handleInputChange(e){
    const {name, value} = e.target;
    setValues({
        ...values,
        [name]: value
    })
 }
 function handleDateChange(date) {
  // Use the second argument of the useState hook to update the state
  setValues(prevState => ({
    ...prevState,
    [values.time]: date
  }));
}


 function checkValidation(){
  let check = true
  for(const key in values){
     console.log(values[key])
     if(values[key]=== ''){
      setValidation({
        ...validation,
        [key] : false
      })
      check = false
    }else{
      setValidation(validation => ({
        ...validation,
        [key] : true
      }))
    }
   
  }
  console.log(validation)
  return check
 }

 function handleOnClick(){
  if(checkValidation()){
    dispatch(eventAdded(values))
    setValues(initialValues)
  }
 }

 
  return (
    <div className='container d-flex justify-content-center' > 
    
    <form className='card m-4' id='form'>
          <h3 className='text-center m-2'>Form </h3> 
          <div className='input-group mb-2 p-1'>
          <span class="input-group-text">Event Name</span>
            <input
             className='form-control'
              value={values.name}
              onChange={handleInputChange}
              name="name"
                         />
            {!validation.name && <span>Please enter a event name</span>}
          </div>
          <div className='input-group mb-2 p-1'>
            <span class="input-group-text">Description of the Event</span>
            <input
              className='form-control'
              value={values.description}
              onChange={handleInputChange}
              name="description" 
            />
            {!validation.description && <span>Please enter event description</span>}
          </div>
          <div className='input-group mb-2 p-1'>
            <span class="input-group-text">Time of the Event</span>
            {/* <input
            className='form-control'
              value={values.time}
              onChange={handleInputChange}
              name="time" 
            /> */}
            <DateTimePicker  onChange={handleDateChange} value={values.time} />
            {!validation.time && <span>Please enter time of the event </span>}
          </div>
          <div className='input-group mb-2 p-1'>
            <span class="input-group-text">Venue</span>
            <input
             className='form-control'
            value={values.venue}
            onChange={handleInputChange}
            name="venue"
            label="Venue"
          />
          {!validation.venue && <span>Please enter the venue </span>}
          </div>
          <div className='input-group mb-2 p-1'>
            <span class="input-group-text">Duration</span>
          <input
           className='form-control'
           type="number"
            value={values.duration}
            onChange={handleInputChange}
            name="duration"
            label="Duration of the Event"
          />
          {!validation.duration && <span>Please enter duration of the event</span>}
          </div>
          <button type='button' className='btn btn-primary m-1' onClick={handleOnClick }> Add </button>
        </form>
    </div>
  )
}
