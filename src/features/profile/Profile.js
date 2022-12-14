import React, { useState } from 'react';
import {  useDispatch } from 'react-redux';
import { setName } from './profileSlice';


export function Profile(){
    const [name, setUpdateName] = useState('')
    // const profileName = useSelector(selectName)
    
    const dispatch = useDispatch()
    return (
        <div className='d-flex justify-content-center'>
            <div className='card flex-row mt-5'>
              <label className="form-label m-1">Update  Name</label>
                <input className="form-control m-1" value={name} onChange={(e)=>setUpdateName(e.target.value)} />
                <button className='btn btn-primary m-1' onClick={()=> dispatch(setName(name))}>Add</button>
            </div>
        </div>
    )
}