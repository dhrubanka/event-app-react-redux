import React from "react";
import Event from "../features/event/Event";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function Events(){
    const events = useSelector(state => state.event)

    const renderedEvents = events.map(event => {
     return <Event 
        key={event.id}
        name={event.name}
        venue={event.venue}
        duration={event.duration}
        description={event.description}
    />})
    return (
        <div>
            <div className="d-flex justify-content-between m-4">
                <h1 className="p-2">List of events </h1> 
                <Link className="btn btn-success m-3" to="/form">Add</Link>
            </div>
            <div>
            {renderedEvents}
            </div>
        </div>
    )

}