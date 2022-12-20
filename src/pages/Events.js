import React from "react";
import Event from "../features/event/Event";
import { useSelector } from "react-redux";
import FormComponent from "../features/event/Form"

export function Events(){
    const events = useSelector(state => state.event)
    // console.log(localStorage.getItem('events'));
    // const events = localStorage.getItem('events');
    const [isVisible, setIsVisible] = React.useState(false);

 

     let   renderedEvents = events.map(event => {
            console.log(event);
            let dateTime = new Date(event.time)

            return <Event 
                key={event.id}
                name={event.name}
                time={dateTime.toLocaleString()}
                venue={event.venue}
                duration={event.duration}
                description={event.description}
                />
        })
    


    return (
        <div className="container">
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