/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
// import axios from 'axios';
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const body = {
      email: form.email,
      password: form.password,
    };
    axios
      .post(`https://mitramas-test.herokuapp.com/auth/login`, body)
      .then((response) => {
        localStorage.setItem('Authorization', response.data.access_token);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Berhasil masuk',
        });
        return navigate('/dashboard');
      })
      .catch((err) => {
        if (err.response.data.code === 401) {
          Swal.fire({
            icon: 'error',
            title: 'Failed',
            text: `${err.response.data.error}`,
          });
        }
      });
  };
  return (
    <div>
      <div className="flex justify-center items-center pl-5 grid-cols-2 w-full bg-[#f0f5ed] min-h-screen">
        <form onSubmit={(e) => onSubmit(e)} action="">
          <div className="flex flex-col">
            <div className="flex justify-center mb-16 text-6xl">
              <label htmlFor="" className="font-bold text-green-900">
                Login
              </label>
            </div>
            <div className="flex flex-col w-[400px] bg-white p-10 rounded-lg">
              <label className="mb-4" htmlFor="">
                Email
              </label>
              <input
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="h-12 mb-8 border-2 pl-2 border-black rounded-md"
                type="text"
              />
              <label className="mb-4" htmlFor="">
                Password
              </label>
              <input
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="h-12 mb-8 border-2 pl-2 border-black rounded-md"
                type="password"
              />
              <button type="submit" className="bg-green-400 border-green-400 rounded-lg h-12">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
