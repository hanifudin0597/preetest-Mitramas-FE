/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function labelDetailCompany(params) {
  return (
    <div className="mb-2 mt-4">
      <label className="text-[#8c8f8a]" htmlFor="">
        {params.text}
      </label>
    </div>
  );
}
