import React from 'react'
import { IMAGE } from '../../assets/constent'
import CountUp from 'react-countup';
import { ReactComponent as YellowStar } from '../../assets/Svg/yellowstar.svg';


const TravelPoint = () => {
  const TravelInfo = [
    { id: 1, name: 'Holiday Package', number: 500 }, //i want this number 500+
    { id: 2, name: 'Luxury Hotel', number: 100 },
    { id: 3, name: 'Premium Airlines', number: 7 },
    { id: 4, name: 'Happy Customer', number: 2000 }, // this is 2k+

  ]

  const formatNumber = (number) => {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(0) + 'M+'; // For millions
    } else if (number >= 1000) {
      return (number / 1000).toFixed(0) + 'k+'; // For thousands
    } else if (number >= 500) {
      return number + '+'
    } else {
      return number
    }
  };
  console.log(formatNumber(1));

  return (
    <div className='flex xl:flex-row flex-col mt-[128px] mx-auto  justify-center'>
      <img alt={IMAGE.TravelPoint} src={IMAGE.TravelPoint} className='w-[398px] h-[318px] sm:w-[871px] sm:h-[697px]' />

      <div className=" text-center 2xl:text-start mt-16 xl:mt-0 text-focus-in  w-auto px-[20px] sm:px[50px] xl:px-0   ">
        <h3 className="font-bold text-secondary text-[16px] tracking-[6px] sm:text-[23px]  ">
          Services
        </h3>
        <h1 className="font-bold text-black text-[32px] sm:text-[40px] xl:text-[44px] ">
          Our top value categories for you
        </h1>
        <div className='flex'>
          <p className='text-[18px] text-seconary-text mt-8 flex '>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <YellowStar className='h-[112px] w-[112px] mt-8 -mr-5' />

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TravelInfo.map((info) => (
            <div
              key={info.id}
              className="bg-white border border-lightgray rounded-lg  p-4 flex flex-col items-center"
            >
              <p className="sm:text-[35px] text-orange font-bold">
                <CountUp
                  start={0}
                  end={info.number}
                  duration={2.5}
                // formattingFn={() => formatNumber(info.number)}
                />
              </p>
              <h2 className="text-xl font-semibold">{info.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TravelPoint


