import React from 'react'
import { useParams } from "react-router-dom";
import ComplaintsProcedure from './ComplaintsProcedure';
import CookiePolicy from './CookiePolicy';
import FAQ from './FAQ';
import Generaltermsandconditions from './Generaltermsandconditions';
import Paymenttermsandconditions from './Paymenttermsandconditions';
import Press from './Press';
import PrivacyPolicy from './PrivacyPolicy';



const FooterComponents = () => {
  const { info } = useParams();

  let componentToRender;

  switch (info) {
    case 'complaintsprocedure':
      componentToRender = <ComplaintsProcedure />;
      break;
    case 'cookiepolicy':
        componentToRender = <CookiePolicy />;
        break;
    case 'faq':
        componentToRender = <FAQ />;
        break;
    case 'generaltermsandconditions':
        componentToRender = <Generaltermsandconditions />;
        break;
    case 'paymenttermsandconditions':
        componentToRender = <Paymenttermsandconditions />;
        break;
    case 'press':
        componentToRender = <Press />;
        break;
    case 'privacypolicy':
        componentToRender = <PrivacyPolicy />;
        break;
  }

  return (
    <div className='h-96 md:pt-12 pt-48'>
      <h6>{info}</h6>
      {componentToRender}
    </div>
  )
}

export default FooterComponents
