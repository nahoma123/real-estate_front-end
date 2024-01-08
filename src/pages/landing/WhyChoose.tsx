import React from 'react';
import House from '../../assets/images/House.jpg';
import Hands from '../../assets/images/Hands.jpg';
import MobileStat from '../../assets/images/MobileStat.jpg';

const WhyChoose = () => {
  return (
    <div className="w-full pb-8 md:pb-24 bg-blue-100">
        
      <div className="w-full pt-8 flex items-center justify-center">
        <p className="font-semibold text-lg md:text-xl lg:text-2xl mb-4">
          Why Choose FreeLets?
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-between justify-evenly">
        <div className="w-full md:w-96 flex flex-col items-center justify-center mx-8 mb-8 md:mb-0">
          <div className="w-full h-60 md:h-80 flex items-center">
            <img src={House} alt="House" className="w-full h-full object-cover" />
          </div>
          <div className="mt-4">
            <p className="text-sm font-semibold">Save Money</p>
          </div>
          <div className="mt-2">
            <p className="text-sm text-center md:w-72">
              Save an average of £2700 with pay later, or choose the traditional No sale, No Fee option.
            </p>
          </div>
        </div>

        <div className="w-full md:w-96 flex flex-col items-center justify-center mx-8 mb-8 md:mb-0">
          <div className="w-full h-60 md:h-80 flex items-center">
            <img src={Hands} alt="Hands" className="w-full h-full object-cover" />
          </div>
          <div className="mt-4">
            <p className="text-sm font-semibold">Sell Faster</p>
          </div>
          <div className="mt-2">
            <p className="text-sm text-center md:w-72">
              Use the power of online marketing to sell 17% faster than with the average estate agent.
            </p>
          </div>
        </div>

        <div className="w-full md:w-96 flex flex-col items-center justify-center mx-8">
          <div className="w-full h-60 md:h-80 flex items-center">
            <img src={MobileStat} alt="MobileStat" className="w-full h-full object-cover" />
          </div>
          <div className="mt-4">
            <p className="text-sm font-semibold">See More</p>
          </div>
          <div className="mt-2">
            <p className="text-sm text-center md:w-72">
              Ensure you're getting the best price for your home with online viewing feedback and fully transparent offers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
