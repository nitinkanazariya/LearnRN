import React, { useState } from 'react'
import ArrowButton from '../../component/ArrowButton'
import { IMAGE } from '../../assets/constent'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core swiper styles
import 'swiper/css/pagination'; // Pagination styles
import 'swiper/css/navigation'; // Navigation styles
import { ReactComponent as RatingSvg } from '../../assets/Svg/star.svg';



const Destination = () => {
  const [isfocouse, setIsFocuse] = useState(2)
  const services = [
    { id: 1, title: 'Paradise Beach, Bantayan Island', price: '$550.16', location: 'Rome, Italy', rating: '4.8', image: IMAGE.Beach },
    { id: 2, title: 'Ocean with full of Colors', price: '$20.99', location: 'Maldives', rating: '4.5', image: IMAGE.Fish },
    { id: 3, title: 'Mountain View, Above the cloud', price: '$150.99', location: 'United Arab Emeries ', rating: '5.0', image: IMAGE.Mountain },
    { id: 4, title: 'Paradise Beach, Bantayan Island', price: '$550.16', location: 'Rome, Italy', rating: '4.8', image: IMAGE.Beach },



  ];
  return (
    <div className='mt-[64px] xl:mt-[200px] block sm:flex sm:justify-center items-center flex-col'>
      <div className={`block 2xl:flex xl:justify-between items-center w-full `}>
        <div className='text-center 2xl:text-start text-focus-in '>
          <p className='text-[16px] md:text-[23px] tracking-[6px] font-bold text-secondary'>
            Top Destination
          </p>
          <p className='text-[32px] md:text-[ 44px] font-bold text-black'>
            Explore top destination
          </p>
        </div>

        <div className='flex 2xl:mt-0  mt-[64px] gap-8  justify-between  sm:justify-center items-center'>
          <ArrowButton onClick={() => { setIsFocuse(1) }} type={isfocouse === 1 ? 'right' : 'left'} IMG={isfocouse === 1 ? IMAGE.LeftWhiteArrow : IMAGE.LeftArrow} color={'bg-secondary'} />
          <ArrowButton onClick={() => { setIsFocuse(2) }} type={isfocouse === 2 ? 'right' : 'left'} IMG={isfocouse === 1 ? IMAGE.RightBlackArrow : IMAGE.RightArrow} color={'bg-secondary'} />
        </div>
      </div>
      <div className='hidden sm:block mt-16 lg:max-w-3xl sm:max-w-2xl  xl:max-w-5xl  w-full '>
        <Swiper
          className='mt-16 '
          slidesPerView={3}
          loop={true}
        >
          {services.map(service => (
            <SwiperSlide key={service.id} className=''>
              <div className=" h-[575px] border-lightgray border rounded-[32px] bg-white shadow-xl sm:flex flex-col items-center mb-12 sm:mx-[20px]  ">
                <img src={service.image} alt={service.title} className=" h-[373px] w-full object-cover rounded-tr-[32px] rounded-tl-[32px]   " />
                <div className='p-8  w-full'>

                  <div className='justify-between flex items-center'>
                    <div>
                      <h2 className="font-semibold text-xl text-black text-[28px]  flex-1">{service.title}</h2>
                      <p className=" text-seconary-text  text-[18px] flex-1">{service.location}</p>
                    </div>
                    <p className=" text-seconary-text text-center text-[18px] ">{service.price}</p>
                  </div>
                  <div className='flex gap-[10px] items-center  mt-[50px]'>
                    <p className=" text-orange font-bold text-[23px] ">{service.rating}</p>
                    <RatingSvg />
                  </div>
                </div>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
      <div className='block sm:hidden mt-8'>

        {services.map(service => (
          <div className=" h-[575px] border-lightgray border rounded-[32px] bg-white shadow-xl sm:flex flex-col items-center mb-12 sm:mx-[20px]  ">
            <img src={service.image} alt={service.title} className=" h-[373px] w-full object-cover rounded-tr-[32px] rounded-tl-[32px]   " />
            <div className='p-8  w-full'>

              <div className='justify-between flex items-center'>
                <div>
                  <h2 className="font-semibold text-xl text-black text-[28px]  flex-1">{service.title}</h2>
                  <p className=" text-seconary-text  text-[18px] flex-1">{service.location}</p>
                </div>
                <p className=" text-seconary-text text-center text-[18px] ">{service.price}</p>
              </div>
              <div className='flex gap-[10px] items-center  mt-[20px] sm:mt-[50px]'>
                <p className=" text-orange font-bold text-[23px] ">{service.rating}</p>
                <RatingSvg />
              </div>
            </div>
          </div>

        ))}
      </div>

    </div>
  )
}

export default Destination  