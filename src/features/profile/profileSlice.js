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

export const {setName} = profileSlice.actions

export const selectName = (state) => state.profile.value

export default profileSlice.reducer