import React from 'react'
import { Link } from 'react-router-dom'
import { Events } from './Events'

export default function Home() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <div className='card m-4'>
                <Link className='btn btn-secondary p-4' to='profile'>Check Profile Name</Link>
            </div>
          </div>
          <div className='col-sm-12 col-md-6'>
            <div className='card m-4'>
                <Link className='btn btn-secondary p-4' to='events'> Events page</Link>
            </div>
          </div>
          <div className='col-sm-12'>
            <Events/>
          </div>
        </div>
      </div>
    </div>
  )
}
