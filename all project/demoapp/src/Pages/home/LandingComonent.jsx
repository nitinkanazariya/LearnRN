import React from 'react'
import { Button } from '../../component/Button'
import { IMAGE } from '../../assets/constent'
import { ReactComponent as PlaySvg } from '../../assets/Svg/play.svg';
import { ReactComponent as Bag } from '../../assets/Svg/bag.svg';
import { ReactComponent as RedwGradient } from '../../assets/Svg/redGradient.svg';
import { ReactComponent as OrangeArrowSvg } from '../../assets/Svg/orangearrow.svg';
import { ReactComponent as YellowSvg } from '../../assets/Svg/yellowGradient.svg';

const LandingComonent = () => {
  return (
    <div className='h-full'>
      <RedwGradient height={500} width={500} className='hidden sm:flex xl:hidden absolute top-0 left-0 ' />
      <div className='xl:flex justify-center  xl:gap-[150px] content-center mt-[177px]'>
        <div>
          <div className='hidden xl:flex'>
            <button
              onClick={() => { }}
              className={` w-[224px] flex px-4 py-[21px] text-[14px] justify-around font-semibold rounded-[100px] text-secondary drop-shadow-xl shadow-secondary bg-white hover:animate-pulse `}
            >
              Explore the world!
              <Bag height={20} width={20} />
            </button>
          </div>

          <div className='flex items-center justify-center'>
            <img alt='MainImg' src={IMAGE.MainImg} className='flex xl:hidden h-[362px] w-[396px] sm:h-[772px] sm:w-[713px]  ' />
          </div>
          <div className='flex xl:hidden items-center justify-center'>
            <button
              onClick={() => { }}
              className={` w-[224px] flex px-4 py-[21px] text-[14px] justify-around font-semibold rounded-[100px] text-secondary drop-shadow-xl shadow-secondary bg-white hover:animate-pulse `}
            >
              Explore the world!
              <Bag height={20} width={20} />
            </button>
          </div>
          <div className="flex items-center justify-center ">
            <div className="xl:w-[412px] text-center xl:text-start">
              <h1 className="mt-[43px] xl:text-[69px] sm:text-[56px] text-[40px]  font-bold text-focus-in">
                Travel <span className="text-secondary">top destination</span> of the world
              </h1>
              <p className="sm:mt-[43px] mt-[16px] sm:text-[18px] text-[16px] leading-8 text-gray opacity-50">
                We always make our customer happy by providing as many choices as possible
              </p>
              <div className='sm:flex mt-[43px] gap-4 items-center justify-center xl:items-start xl:justify-start'>
                <OrangeArrowSvg className='sm:absolute xl:hidden  left-[38px] hidden sm:flex  ' />
                <Button label={'Get Started'} className='sm:w-[141px] h-12  w-full' />
                <div className='flex items-center justify-center sm:mt-0 mt-6 border rounded-[100px] border-lightgray'>
                  <button
                    onClick={() => { }}
                    className={` w-full sm:w-[181px] h-12  flex px-4 py-[12px] text-[14px] justify-center sm:justify-around gap-6 sm:gap-0 font-semibold rounded-[100px] text-black hover:animate-pulse `}
                  >
                    <PlaySvg height={20} width={20} />
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img alt='MainImg' src={IMAGE.MainImg} className='hidden xl:flex h-[772px] w-[713px]' />
      </div>
      <YellowSvg height={500} width={500} className='hidden sm:flexabsolute right-0' />
      <div className='flex flex-wrap items-center gap-10 sm:gap-[98px] justify-center xl:mt-[134px] sm:mt-[119px] mt-16 '>
        <OrangeArrowSvg className=' xl:flex left-[38px] hidden absolute mb-[100px] ' />

        <img alt='TripAdvisor' src={IMAGE.TripAdvisor} className=' h-[20px] w-[132px] sm:h-[32px] sm:w-[212px]' />
        <img alt='Expedia' src={IMAGE.Expedia} className='h-[20px] w-[70px] sm:h-[32px] sm:w-[113px] ' />
        <img alt='Booking' src={IMAGE.Booking} className=' h-[20px] w-[117px] sm:h-[32px] sm:w-[188px]' />
        <img alt='AirBnB' src={IMAGE.AirBnB} className='h-[20px] w-[64px] sm:h-[32px] sm:w-[188px]' />
        <img alt='Rbitz' src={IMAGE.Rbitz} className='h-[20px] w-[108px] sm:h-[32px] sm:w-[188px]' />

      </div>

    </div>
  )
}

export default LandingComonent