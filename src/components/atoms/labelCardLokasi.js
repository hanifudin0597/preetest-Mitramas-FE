/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function labelCardLokasi(params) {
  return (
    <div className="flex w-full flex-col items-end justify-center mr-6">
      <label className="text-white text-[30px]" htmlFor="">
        {params.number}
      </label>
      <label className="text-white" htmlFor="">
        {params.description}
      </label>
    </div>
  );
}
