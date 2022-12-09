import React from 'react'

export default function Event(props) {
  return (
    <div>
        <div className="card m-4" >
            <div className="card-body">
                <h4 className="card-title">Event title : {props.name} </h4>
             
                <h6 className="card-subtitle mb-2 text-muted">{props.time}</h6>
                <h5>Venue: {props.venue} </h5>
                <h5>Duration: {props.duration} </h5>
                <p className="card-text">{props.description}</p>
                
             </div>
        </div>
    </div>
  )
}
