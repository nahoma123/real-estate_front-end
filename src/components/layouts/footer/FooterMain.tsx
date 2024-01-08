import React from 'react';
import {
  Twitter,
  Facebook,
  YouTube,
  LinkedIn,
  Instagram
} from '@material-ui/icons';
import freelets from '../../../assets/images/thumb_freelets.png';

const FooterMain = () => {
  return (
    <div className='bg-blue-950 text-white w-full flex flex-col'>
      <div className='w-full flex items-center justify-between flex-wrap'>
        <div className='w-full sm:w-48 ml-3 mb-3 sm:mb-0'>
          <img src={freelets} alt="Freelets logo" className='w-full' />
        </div>
        <div className='w-full sm:w-1/3 flex justify-center'>
          <Twitter className='mx-2' />
          <Facebook className='mx-2' />
          <YouTube className='mx-2' />
          <LinkedIn className='mx-2' />
          <Instagram className='mx-2' />
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
          <p className='text-sm'>General terms and conditions</p>
          <p className='text-sm'>Payment terms and conditions</p>
          <p className='text-sm'>No Sale, No Fee</p>
          <p className='text-sm'>Privacy Policy</p>
          <p className='text-sm'>Cookie Policy</p>
          <p className='text-sm'>Press</p>
        </div>
        <div className='mb-4 sm:mb-0'>
          <p className='font-semibold text-sm mb-2'>Useful Links</p>
          <p className='text-sm'>Contact</p>
          <p className='text-sm'>FAQs</p>
          <p className='text-sm'>Complaints Procedure</p>
          <p className='text-sm'>Login</p>
          <p className='text-sm'>Book a free evaluation</p>
          <p className='text-sm'>Instant online evaluation</p>
          <p className='text-sm'>Property Search</p>
          <p className='text-sm'>Careers</p>
        </div>
        <div className='w-full sm:w-48'></div>
      </div>
      <div className='w-full bg-blue-900 px-4 sm:px-12 py-4'>
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
