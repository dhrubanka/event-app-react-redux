import React from "react";
import Event from "../features/event/Event";
import { useSelector } from "react-redux";
import FormComponent from "../features/event/Form"

export function Events(){
    const events = useSelector(state => state.event)
    const [isVisible, setIsVisible] = React.useState(false);

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
                {/* <Link className="btn btn-success m-3" to="/">Add</Link> */}
                <button className="btn btn-primary" onClick={() => setIsVisible(!isVisible)}>{isVisible ? 'Hide Form': 'Add'}</button>
            </div>
            <div>
           
            {
                isVisible && (
                    <FormComponent />
                )
            }
            {renderedEvents}
            </div>
        </div>
    )

}