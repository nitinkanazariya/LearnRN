import React from 'react'
import LandingComonent from './LandingComonent'
import Services from './Services'
import Destination from './Destination';
import TravelPoint from './TravelPoint';
import Footer from '../../component/Footer';


const HomePage = () => {
  const screenHeight = window.outerHeight;
  console.log("Full screen height :", screenHeight);

  return (
    <>
      <div className='px-[20px] sm:px-[64px] xl:px-[137px] justify-center items-center'>
        <LandingComonent />
        <Services />
        <Destination />

      </div >
      <div className='px-[-137px]'>
        <TravelPoint />
      </div>
      <div className='px-[20px] sm:px-[64px] xl:px-[137px] justify-center items-center'>
        <Footer />
      </div>
    </>

  )
}

export default HomePage