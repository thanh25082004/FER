import React from 'react'
import { Link } from 'react-router-dom'

function NewEvent(props) {

  return (
    <div className='blog'>
        <img src={props?.image} className='image' />
        <div className='blog-content'>
            <p className='text-center font-weight-bold'>{props?.title}</p>
            <p className='text-center line-clamp'>{props?.description}</p>
        </div>
        <div className='p-2'>
            <Link to={`/news/${props?.id}`}>
                <button className='button text-center'>Xem chi tiết</button>
            </Link>
        </div>

        {/* absolute */}
        <div className='absolute-box'>
            <div className='text-center p-2'>{props?.date} | Event</div>
        </div>
    </div>
  )
}

export default NewEvent