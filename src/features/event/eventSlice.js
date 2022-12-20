import { createSlice } from "@reduxjs/toolkit";

// const initialState = {}
export const eventSlice = createSlice({
    name: 'event',
    initialState: loadEvents(),
    reducers: {
        eventAdded(state, action){
            let values = action.payload
            if (localStorage.getItem('events') === null) {
                // values.time = values.time.toLocaleString()
                // Convert the array to a string
                let formValues = JSON.stringify([values]);
        
                // Save the array to local storage
                localStorage.setItem('events', formValues);
        
              }else{
                 // Get the array from local storage
                let formValues = JSON.parse(localStorage.getItem('events'));
               
                // values.time = values.time.toLocaleString()
                // Push a new item to the array
                formValues.push(values);
        
                // Save the updated array back to local storage
                localStorage.setItem('events', JSON.stringify(formValues));
                  
              }
            state.push(action.payload)
        }
    }
})

function loadEvents(){
    let arrayString = localStorage.getItem('events') || '[]';

    // Convert the string back into an array
    let events = JSON.parse(arrayString);

    return events
}

export const {eventAdded} = eventSlice.actions

export default eventSlice.reducer