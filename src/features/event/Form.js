import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { eventAdded } from './eventSlice'
import { nanoid } from '@reduxjs/toolkit'
import DateTimePicker from 'react-datetime-picker';

const initialValues = {
  id: nanoid(),
  name: "",
  description: "",
  time: new Date(),
  venue: "",
  duration: "",
}

const validationValues = {
  name: true,
  description: true,
  venue: true,
  time: true,
  duration: true,
}
function checkSameEvent(date){
  let arrayString = localStorage.getItem('events');

  // Convert the string back into an array
  let eventsArray = JSON.parse(arrayString);
  console.log("Function Check Same Events");
  // console.log(eventsArray);
  console.log(date);
  // console.log(new Date(date));
  // eventsArray.map(event => {
  //   console.log(event.time);
  //   console.log(new Date(event.time))
  //   return 
  // })
  const found = eventsArray.filter(event=> new Date(event.time) === date)
 
  // console.log('Found :', found.length);
  // console.log("Function Check Same Events");
  // return found.length
}
export default function Form() {
  const [values, setValues] = useState(initialValues)
  const [validation, setValidation] = useState(validationValues)
  const dispatch = useDispatch()

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  function handleDateChange(date) {
    // Use the second argument of the useState hook to update the state
    setValues(prevState => ({
      ...prevState,
      time: date
    }));
  }


  function checkValidation() {
    let check = true
    let updateValidation = {}
    for (const key in values) {
     switch (key) {
        case 'time':  const presentDate = new Date()

                      if(values[key] < presentDate){
                        updateValidation[key] = false
                        check = false

                      }else{
                        if(localStorage.getItem('events')){ 
                          updateValidation[key] = false
                        }else{
                          updateValidation[key] = true}
                      }
                      break;
      
        default:   if (values[key] === ''){
                        //if a field is empty the validation check fails
                        updateValidation[key] = false
                        check = false
                      }else{
                        updateValidation[key] = true
                      }
                      break;
      }

    }
    setValidation(updateValidation)
    return check
  }



  function handleOnClick() {
    
    if (checkValidation()) {
     
      // if (localStorage.getItem('events') === null) {
      //   // values.time = values.time.toLocaleString()
      //   // Convert the array to a string
      //   let formValues = JSON.stringify([values]);

      //   // Save the array to local storage
      //   localStorage.setItem('events', formValues);

      // }else{
      //    // Get the array from local storage
      //   let formValues = JSON.parse(localStorage.getItem('events'));
       
      //   // values.time = values.time.toLocaleString()
      //   // Push a new item to the array
      //   formValues.push(values);

      //   // Save the updated array back to local storage
      //   localStorage.setItem('events', JSON.stringify(formValues));
          
      // }
    
      dispatch(eventAdded(values))
      setValues(initialValues)
    }

  }

  console.log(validation)

  return (
    <div className='container d-flex justify-content-center' >

      <form className='card m-4' id='form'>
        <h3 className='text-center m-2'>Form </h3>
        <div className='input-group mb-2 p-1'>
          <span className="input-group-text">Event Name</span>
          <input
            className='form-control'
            value={values.name}
            onChange={handleInputChange}
            name="name"
          />
          {!validation.name && <span className='input-group m-2 text-danger'>Please enter a event name</span>}
        </div>
        <div className='input-group mb-2 p-1'>
          <span className="input-group-text">Description of the Event</span>
          <input
            className='form-control'
            value={values.description}
            onChange={handleInputChange}
            name="description"
          />
          {!validation.description && <span className='input-group m-2 text-danger'>Please enter event description</span>}
        </div>
        <div className='input-group mb-2 p-1'>
          <span className="input-group-text">Time of the Event</span>
        
          <DateTimePicker className='form-control' onChange={handleDateChange} value={values.time} />
          {!validation.time && <span className='input-group m-2 text-danger'>Please enter time of the event in the future</span>}
        </div>
        <div className='input-group mb-2 p-1'>
          <span className="input-group-text">Venue</span>
          <input
            className='form-control'
            value={values.venue}
            onChange={handleInputChange}
            name="venue"
            label="Venue"
          />
          {!validation.venue && <span className='input-group m-2 text-danger'>Please enter the venue </span>}
        </div>
        <div className='input-group mb-2 p-1'>
          <span className="input-group-text">Duration</span>
          <input
            className='form-control'
            type="number"
            value={values.duration}
            onChange={handleInputChange}
            name="duration"
            label="Duration of the Event"
          />
          {!validation.duration && <span className='input-group m-2 text-danger'>Please enter duration of the event</span>}
        </div>
        <button type='button' className='btn btn-primary m-1' onClick={handleOnClick}> Add </button>
      </form>
    </div>
  )
}
