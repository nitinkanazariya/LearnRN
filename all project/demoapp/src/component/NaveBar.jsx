import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as MyLogo } from '../assets/Svg/logo.svg';
import { ReactComponent as Menu } from '../assets/Svg/menu.svg';
import { Button } from './Button';
import ScrollProgressBar from './ScrollProgressBar';



const NaveBar = () => {

  const [isActive, setIsActive] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  const selectedTab = (num) => {
    return num ? 'text-black font-bold text-[16px]' : 'text-gray opacity-50 hover:opacity-100 hover:text-black hover:font-bold '
  }
  return (
    <>
      <div className='flex justify-between items-center px-[20px] sm:px-[64px] xl:px-[137px]  p-[30px]'>
        <div className='hidden sm:flex xl:hidden'>
          <Menu className='cursor-pointer' onClick={() => { setIsActive(0); setMenuOpen(true) }} />
        </div>
        <MyLogo height={40} width={150} />
        <div className='hidden xl:flex  items-center gap-[64px] '>
          <Link to={'/'} onClick={() => setIsActive(1)}>
            <p className={`text-[14px] ${selectedTab(isActive === 1)}`}>Home</p>
          </Link>
          <Link to={'/Discover'} onClick={() => setIsActive(2)}>
            <p className={`text-[14px] ${selectedTab(isActive === 2)}`}>Discover</p>
          </Link>
          <Link to={'/SpecialDeals'} onClick={() => setIsActive(3)}>
            <p className={`text-[14px] ${selectedTab(isActive === 3)}`}>Special Deals</p>
          </Link>
          <Link to={'/Contact'} onClick={() => setIsActive(4)}>
            <p className={`text-[14px]${selectedTab(isActive === 4)}`}>Contact</p>
          </Link>
        </div>
        <div className='hidden  sm:flex'>
          <Button label={'Log In'} bgempty={true} className='px-6' />
          <Button label={'Sign Up'} className='px-6 ' />
        </div>
        <Link className='flex sm:hidden '>
          <Menu className='cursor-pointer' onClick={() => { setIsActive(0); setMenuOpen(true) }} />
        </Link>


      </div>
      <ScrollProgressBar />

      <div className={`fixed top-0 left-0 w-full h-svh z-50 bg-white border-t-[1px] border-gray-200 shadow-md transition-all duration-500 ease-linear ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>

        <ul className='flex flex-col gap-[16px]'>
          <Link to={'/'} onClick={() => { setIsActive(1); setMenuOpen(false) }}>
            <li><p className={`text-[14px] ${selectedTab(isActive === 1)}`}>Home</p></li>
          </Link>
          <Link to={'/Discover'} onClick={() => { setIsActive(2); setMenuOpen(false) }}>
            <li><p className={`text-[14px] ${selectedTab(isActive === 2)}`}>Discover</p></li>
          </Link>
          <Link to={'/SpecialDeals'} onClick={() => { setIsActive(3); setMenuOpen(false) }}>
            <li><p className={`text-[14px] ${selectedTab(isActive === 3)}`}>Special Deals</p></li>
          </Link>
        </ul>
        <Button onClick={() => { setMenuOpen(false) }} />
      </div>

    </>

  )
}

export default NaveBar