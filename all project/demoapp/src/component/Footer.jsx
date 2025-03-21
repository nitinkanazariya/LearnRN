import React from 'react'
import { ReactComponent as MyLogo } from '../assets/Svg/logo.svg';
import { IMAGE } from '../assets/constent';


const Footer = () => {
  return (
    <div className='flex justify-between flex-[1] mt-[128px] gap-[32px] pb-16'>
      {/* <img alt='IMAGE.WireShap' src={IMAGE.WireShap} className=' ' /> */}
      <div className=' flex-1'>
        <MyLogo height={40} width={142} />
        <p className='text-[23px] text-[#191825] opacity-[50%] mt-8 font-[400]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
        <div className='flex gap-8 mt-16'>
          <img alt='IMAGE.FB' src={IMAGE.FB} className='h-8 w-8' />
          <img alt='IMAGE.TW' src={IMAGE.TW} className='h-8 w-8' />
          <img alt='IMAGE.Insta' src={IMAGE.Insta} className='h-8 w-8' />
        </div>
      </div>
      <div className=' flex gap-20'>
        <div className="footer-column">
          <h3 className='text-[#191825] text-[23px] font-bold'>Company</h3>
          <ul className='text-[18px] opacity-[75%] '>
            <li className='mt-8'><a href="/about-us">About Us</a></li>
            <li className='mt-8'><a href="/careers">Careers</a></li>
            <li className='mt-8'><a href="/blog">Blog</a></li>
            <li className='mt-8'><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className='text-[#191825] text-[23px] font-bold'>Contact</h3>
          <ul className='text-[18px] opacity-[75%] '>
            <li className='mt-8'><a href="/contact-us">Contact Us</a></li>
            <li className='mt-8'><a href="/support">Support</a></li>
            <li className='mt-8'><a href="/faq">FAQ</a></li>
            <li className='mt-8'><a href="/feedback">Feedback</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className='text-[#191825] text-[23px] font-bold'>Meet Us</h3>
          <ul className='text-[18px] opacity-[75%] '>
            <li className='mt-8'><a href="/our-locations">Our Locations</a></li>
            <li className='mt-8'><a href="/events">Events</a></li>
            <li className='mt-8'><a href="/partners">Partners</a></li>
            <li className='mt-8'><a href="/media">Media</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer