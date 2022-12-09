import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { eventAdded } from './eventSlice'
import { nanoid } from '@reduxjs/toolkit'

const initialValues = {
    id : nanoid(),
    name : "",
    description : "",
    time: "",
    venue: "",
    duration: ""
}

export default function Form() {

 const [values,setValues] = useState(initialValues)
 const dispatch = useDispatch()

 console.log(values)
 
 function handleInputChange(e){
    const {name, value} = e.target;
    setValues({
        ...values,
        [name]: value
    })
 }
 function handleOnClick(){
  dispatch(eventAdded(values))
  setValues(initialValues)
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
          </div>
          <div className='input-group mb-2 p-1'>
            <span class="input-group-text">Description of the Event</span>
            <input
              className='form-control'
              value={values.description}
              onChange={handleInputChange}
              name="description" 
            />
          </div>
          <div className='input-group mb-2 p-1'>
            <span class="input-group-text">Time of the Event</span>
            <input
            className='form-control'
              value={values.time}
              onChange={handleInputChange}
              name="time" 
            />
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
          </div>
          <div className='input-group mb-2 p-1'>
            <span class="input-group-text">Duration</span>
          <input
           className='form-control'
            value={values.duration}
            onChange={handleInputChange}
            name="duration"
            label="Duration of the Event"
          />
          </div>
          <button type='button' className='btn btn-primary m-1' onClick={handleOnClick }> Add </button>
        </form>
    </div>
  )
}
