import React from 'react';
import {
  Twitter,
  Facebook,
  YouTube,
  LinkedIn,
  Instagram
} from '@material-ui/icons';
import freelets from '../../../assets/images/thumb_freelets.png';
import { Link } from 'react-router-dom';


const FooterMain = () => {
  return (
    <div className='bg-gray-400 text-white w-full flex flex-col'>
      <div className='w-full flex items-center justify-between flex-wrap'>
        <div className='w-full sm:w-48 ml-3 mb-3 sm:mb-0'>
          <img src={freelets} alt="Freelets logo" className='w-full' />
        </div>
        <div className='w-full sm:w-1/3 flex justify-center'>
        <div className='w-full sm:w-1/3 flex justify-center'>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='mx-2'>
            <Twitter />
          </a>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='mx-2'>
            <Facebook />
          </a>
          <a href='https://youtube.com' target='_blank' rel='noopener noreferrer' className='mx-2'>
            <YouTube />
          </a>
          <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='mx-2'>
            <LinkedIn />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='mx-2'>
            <Instagram />
          </a>
        </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-between my-8 mx-4 sm:mx-12'>
        <div className='mb-4 sm:mb-0'>
          <p className='font-semibold text-sm mb-2'>Freelets Property Limited</p>
          <p className='text-sm'>Meridian House, Wheatfield way</p>
          <p className='text-sm'>Hinckley, Leicestershire</p>
          <p className='text-sm mb-2'>LE10 1YG</p>
          <p className='text-sm'>Call: 0333050202 </p>
          <p className='text-sm'>Email: hello@freelets.com</p>
        </div>
        <div className='mb-4 sm:mb-0'>
          <p className='font-semibold text-sm mb-2'>Information</p>
          <Link to='/information/generaltermsandconditions' className='text-sm block mb-1'>General terms and conditions</Link>
          <Link to='/information/paymenttermsandconditions' className='text-sm block mb-1'>Payment terms and conditions</Link>
          <Link to='/information/nosalenofee' className='text-sm block mb-1'>No Sale, No Fee</Link>
          <Link to='/information/privacypolicy' className='text-sm block mb-1'>Privacy Policy</Link>
          <Link to='/information/cookiepolicy' className='text-sm block mb-1'>Cookie Policy</Link>
          <Link to='/information/press' className='text-sm block mb-1'>Press</Link>
        </div>
        <div className='mb-4 sm:mb-0'>
          <p className='font-semibold text-sm mb-2'>Useful Links</p>
          <Link to='/information/contact' className='text-sm block mb-1'>Contact</Link>
          <Link to='/information/faqs' className='text-sm block mb-1'>FAQs</Link>
          <Link to='/information/complaints' className='text-sm block mb-1'>Complaints Procedure</Link>
          <Link to='/user_account/landlord' className='text-sm block mb-1'>Login</Link>
          <Link to='/information/free-evaluation' className='text-sm block mb-1'>Book a free evaluation</Link>
          <Link to='#' className='text-sm block mb-1'>Instant online evaluation</Link>
          <Link to='/find_properties' className='text-sm block mb-1'>Property Search</Link>
          <Link to='/information/carerrs' className='text-sm block mb-1'>Careers</Link>
        </div>
        <div className='w-full sm:w-48'></div>
      </div>
      <div className='w-full bg-gray-600 px-4 sm:px-12 py-4'>
        <p className='text-sm text-center sm:text-left'>
          © {new Date().getFullYear()} Your Website. All rights reserved.
        </p>
        <p className='text-sm text-center sm:text-left'>
          Registered Office: Meridian House, Wheatfield way, Hinckley, Leicestershire, Hinckley, Leicestershire
        </p>
      </div>
    </div>
  );
}

export default FooterMain;
