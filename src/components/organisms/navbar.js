/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { IoIosArrowForward, IoIosNotificationsOutline } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function navbar() {
  const navigate = useNavigate();
  const onDashboard = () => {
    navigate('/login');
  };
  return (
    <div className="px-7 py-5 bg-[#f0f5ed] flex">
      <div className="flex w-[30%]">
        <div className="text-[#878885]">Perusahaan</div>
        <IoIosArrowForward className="mt-[6px] mx-2 text-[#878885]" />
        <div>Mitramas Infosys Global</div>
      </div>
      <div className="flex w-[70%] justify-end mr-7">
        <AiOutlineSearch className="h-5 w-5 mr-3" />
        <IoIosNotificationsOutline className="h-5 w-5 mr-10" />
        <img
          className="rounded-full h-7 w-7 mr-3 -mt-1"
          src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
          alt=""
        />
        <label onClick={() => onDashboard()} className="cursor-pointer" htmlFor="">
          John Doe
        </label>
      </div>
    </div>
  );
}
