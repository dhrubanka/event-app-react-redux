import React from 'react'

export default function Event(props) {
  // const t1 = {props.time}
  // const t = t1.toDateString()
  // console.log(props)
  
  return (
    <div>
        <div className="card m-4" >
            <div className="card-body">
                <h4 className="card-title text-success">Event title : {props.name} </h4>
             
                <h3 className="card-subtitle mb-2 text-primary"> Time:  {props.time}</h3>
                <h5>Venue: {props.venue} </h5>
                <h5>Duration: {props.duration} Mins</h5>
                <p className="card-text">{props.description}</p>
                
             </div>
        </div>
    </div>
  )
}
