/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { BiPencil } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';

export default function accountBank(params) {
  return (
    <div className="w-full flex mx-5 mt-8 pb-5 ">
      <div className="w-[40%]">
        <div className="rounded-lg h-24 w-[145px] bg-green-400 flex justify-end items-end p-3">
          <label htmlFor="" className="font-extrabold text-white">
            VISA
          </label>
        </div>
      </div>
      <div className="w-[60%] ">
        <div className="flex w-full relative">
          <label htmlFor="" className="font-bold mr-8">
            {params.nameofbank}
          </label>
          <div className="flex absolute right-8">
            <BiPencil className="h-5 w-5 text-green-700" />
            <RiDeleteBin5Line className="h-5 w-5 text-red-600 ml-2" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col mt-6">
            <label className="text-[#696868]" htmlFor="">
              {params.numberofAccount} - {params.nameAccount}
            </label>
            <label className="text-[#696868] text-sm" htmlFor="">
              {params.currency}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
