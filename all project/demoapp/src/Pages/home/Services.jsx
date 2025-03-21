import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core swiper styles
import 'swiper/css/pagination'; // Pagination styles
import 'swiper/css/navigation'; // Navigation styles
import { IMAGE } from '../../assets/constent';
import { ReactComponent as YellowSvg } from '../../assets/Svg/yellowGradient.svg';

const Services = () => {
  const services = [
    { id: 1, title: 'Best Tour Guide', description: 'What looked like a small patch of purple grass, above five feet.', image: IMAGE.Earth },
    { id: 2, title: 'Easy Booking', description: 'Square, was moving across the sand in their direction.', image: IMAGE.Bookingpng },
    { id: 3, title: 'Weather Forecast', description: 'What looked like a small patch of purple grass, above five feet.', image: IMAGE.Weather },
    { id: 4, title: 'Best Tour Guide', description: 'What looked like a small patch of purple grass, above five feet.', image: IMAGE.Earth },


  ];

  return (
    <div className="items-center justify-center flex-col flex mt-[128px]">
      <div className='flex flex-col xl:flex-row text-center xl:text-start max-w-[1920px] justify-between items-center gap-10'>
        <div className='  lg:6/12 '>
          <h3 className="font-bold text-secondary text-[16px] tracking-[6px] sm:text-[23px] ">
            Services
          </h3>
          <h1 className="font-bold text-black text-[32px] sm:text-[40px] xl:text-[44px] ">
            Our top value categories for you
          </h1>
        </div>

        <div className=' hidden sm:block mt-16 sm:max-w-xl  xl:max-w-3xl 2xl:max-w-4xl '>
          <Swiper
            className=' '
            slidesPerView={3}
            loop={true}
          >
            {services.map(service => (
              <SwiperSlide key={service.id} className=''>
                <div className=" h-[443px] border-lightgray border rounded-[32px] bg-white shadow-xl sm:flex flex-col items-center p-4 mb-12 sm:mx-[10px] ">
                  <img src={service.image} alt={service.title} className="w-16 h-16 object-cover rounded-md mt-16" />
                  <h2 className="font-semibold text-xl text-black text-[28px] mt-16 text-center">{service.title}</h2>
                  <p className="text-sm text-seconary-text mt-8 text-center  text-[18px] ">{service.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* <div className=" text-center 2xl:text-start mt-16 text-focus-in  ">
          <h3 className="font-bold text-secondary text-[16px] tracking-[6px] sm:text-[23px]  2xl:w-[444px]">
            Services
          </h3>

          <h1 className="font-bold text-black text-[32px] sm:text-[40px] xl:text-[44px] 2xl:w-[444px]  ">
            Our top value categories for you
          </h1>
        </div> */}
      {/* <div className='hidden sm:block w-full sm:h-[443px] bg-transparent'>
          <Swiper
            className='mt-16 '
            slidesPerView={3}
            loop={true}

            breakpoints={{
              350: {
                direction: 'vertical',
              },
              650: {
                direction: "horizontal",
              },
              1536: {
                direction: "horizontal",
                // slidesPerView: 3,
              }
            }}
          >
            {services.map(service => (
              <SwiperSlide key={service.id} className=''>
                <div className=" h-[443px] border-lightgray border rounded-[32px] bg-white shadow-xl sm:flex flex-col items-center p-4 mb-12 sm:mx-[20px] ">
                  <img src={service.image} alt={service.title} className="w-16 h-16 object-cover rounded-md mt-16" />
                  <h2 className="font-semibold text-xl text-black text-[28px] mt-16 text-center">{service.title}</h2>
                  <p className="text-sm text-seconary-text mt-8 text-center  text-[18px] ">{service.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div> */}

      <div className='flex flex-col sm:hidden  items-center justify-center mt-16 mx-5'>
        {services.map(service => (
          <div className=" flex flex-col h-[279px]  justify-center items-center border-lightgray border rounded-[32px] bg-white shadow-xl  p-4 mb-4  ">
            <img src={service.image} alt={service.title} className="w-16 h-16 " />
            <h2 className="font-semibold text-xl text-[23px] mt-8 text-black">{service.title}</h2>
            <p className="text-sm text-seconary-text mt-8 text-[18px] text-center">{service.description}</p>
          </div>
        ))}
      </div>
      <YellowSvg className={` 2xl:block hidden h-[500px] w-[500px] absolute right-0 mb-[300px]`} />
    </div>
  );
};

export default Services;
