import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { News } from '../assets/news'

function DetailsPage() {
    const { id } = useParams();

  return (
    <div className='container'>
        <div className='p-2'>
            <Link to={`/`}>
                <button className='button'>Back To Home</button>
            </Link>
        </div>
        {
            News.map((item) => {
                if(item?.id != id) return null;

                return (
                    <div className='blog container' key={item?.id}>
                        <img src={item?.image} className='' />
                        <div className='blog-content'>
                            <p className='text-center font-weight-bold'>{item?.title}</p>
                            <p className='text-center'>{item?.description}</p>
                            <div className='text-center p-2'>{item?.date} | Event</div>
                        </div>
                    </div>
                )
            })
        }
    
    
    </div>
  )
}

export default DetailsPage