import React from 'react';
import houseIcon from './house-solid-1.svg';
import buildingIcon from './building-solid-1.svg';
import briefcaseIcon from './briefcase-solid-1.svg';

const Features = () => {
  return (
    <section className="bg-[#b3aeae] py-12 text-center">
      <div className="flex justify-around">
        <div className="bg-[#d9d9d9] p-6 rounded-lg">
          <img src={houseIcon} alt="Small Shifting" className="mx-auto w-32 h-32" />
          <h2 className="text-3xl mt-4">Small Shifting</h2>
        </div>
        <div className="bg-[#d9d9d9] p-6 rounded-lg">
          <img src={buildingIcon} alt="Full House Moving" className="mx-auto w-32 h-32" />
          <h2 className="text-3xl mt-4">Full House Moving</h2>
        </div>
        <div className="bg-[#d9d9d9] p-6 rounded-lg">
          <img src={briefcaseIcon} alt="Office Moving" className="mx-auto w-32 h-32" />
          <h2 className="text-3xl mt-4">Office Moving</h2>
        </div>
      </div>
    </section>
  );
};

export default Features;