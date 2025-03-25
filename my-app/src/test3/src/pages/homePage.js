import React from 'react';
import banner1 from "../assets/Banner_1.jpg";
import NewEvent from '../components/NewEvent';
import { NEWS } from '../assets/news'; // Đổi từ News thành NEWS

function HomePage() {
  return (
    <div>
        

        {/* Carousel */}
        <div id="carouselExampleIndicators" className="carousel slide w-full container my-4" data-ride="carousel">
            <div className="carousel-inner ">
                <div className="carousel-item active ">
                    <img src={banner1} className="d-block w-100 " alt="Banner" />
                </div>
            </div>
           
        </div>
        
        {/* Blog Section */}
        <div className='blog-section container'>
            <h1 className='text-center py-5'>TIN TỨC & SỰ KIỆN</h1>

            <div className='row py-4'>
                {
                    NEWS.map((item) => (
                      <div className='col-12 col-sm-6 col-md-4' key={item?.id}>
                      <NewEvent
                          id={item?.id}
                          name={item?.name}
                          status={item?.status}
                          date={item?.date}
                          image={item?.image}
                          description={item?.description}
                      />
                  </div>
                    ))
                }
            </div>
        </div>
    </div>
  );
}

export default HomePage;
