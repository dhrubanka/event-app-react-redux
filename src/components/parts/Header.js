import React from 'react'
import { selectName } from '../../features/profile/profileSlice'
import { useSelector } from 'react-redux'
import { Route, Routes, Link } from "react-router-dom"
import { Profile } from '../../features/profile/Profile'
import Home from '../../pages/Home'
import { Events } from '../../pages/Events'
import Form from '../../features/event/Form'

function User({name}){
    if(name===null) return null
    return <div className='text-white'>Welcome {name}</div>
}
export default function Header() {
    const name = useSelector(selectName)
    
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"> Event Calender </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item p-2">
                            <Link className='text-white' to="/">Home</Link> 
                        </li>
                        <li className="nav-item p-2">
                        <Link className='text-white' to="/events">Events</Link> 
                        </li>
                        <li className="nav-item p-2">
                        <Link className='text-white' to="/profile">Profile</Link> 
                        </li>
                    </ul>
                    <span className="navbar-text">
                    <User name={name}/> 
                    </span>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/events" element={<Events />} />
                <Route path="/form" element={<Form />} />
            </Routes>
        </div>
    )
}
