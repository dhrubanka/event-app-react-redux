import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
    
    name: 'profile',
    
    initialState: {
        value: null,
    },
    
    reducers: {
        setName: (state, action) => {
            state.value = action.payload
        }
    }
})
function loadEvents(){
    let arrayString = localStorage.getItem('events') || '[]';

    // Convert the string back into an array
    let events = JSON.parse(arrayString);

    return events
}
export const {setName} = profileSlice.actions

export const selectName = (state) => state.profile.value

export default profileSlice.reducer