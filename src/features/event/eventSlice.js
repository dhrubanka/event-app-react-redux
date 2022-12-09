import { createSlice } from "@reduxjs/toolkit";

// const initialState = {}
export const eventSlice = createSlice({
    name: 'event',
    initialState: [],
    reducers: {
        eventAdded(state, action){
            state.push(action.payload)
        }
    }
})

export const {eventAdded} = eventSlice.actions

export default eventSlice.reducer