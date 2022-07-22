/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BiPencil } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
import Navbar from '../components/organisms/navbar';
import EditModal from '../components/molecules/editModal';

export default function dashboard() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [updateData, setUpdateData] = useState({
    name: '',
    address: '',
    country: '',
    phone_number: '',
    job_title: '',
    status: '',
  });
  useEffect(() => {
    const Authorization = localStorage.getItem('Authorization');
    axios
      .get(`https://mitramas-test.herokuapp.com/customers`, {
        headers: { Authorization },
      })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onDeleteCustomer = (id) => {
    console.log(id);
    Swal.fire({
      title: 'Are you sure delete this recipe?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        const token = localStorage.getItem('Authorization');
        console.log(token);
        axios
          .delete(`https://mitramas-test.herokuapp.com/customers`, id, {
            headers: {
              Authorization: token,
            },
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  console.log(updateData);
  // const getId = (id) => {
  //   setShowModal(true);
  //   const bodyEdit = {
  //     id,
  //     name: updateData.name,
  //     address: updateData.address,
  //     country: updateData.country,
  //     phone_number: updateData.phone_number,
  //     job_title: updateData.job_title,
  //     status: updateData.status,
  //   };

  //   const onUpdateCustomer = (bodyEdit) => {};
  // };

  const onCreateCustomer = (updateData) => {
    const Authorization = localStorage.getItem('Authorization');
    axios
      .post('https://mitramas-test.herokuapp.com/customers', updateData, {
        headers: { Authorization },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="flex px-5 grid-cols-2 w-full bg-[#f0f5ed]">
        <div className="w-30%">
          <button
            type="button"
            className="border bg-green-600 text-white rounded-md h-10 px-4 mb-6 mr-6"
            onClick={() => setShowModal(true)}>
            Create customer
          </button>
        </div>

        <div className="">
          <input type="text" className="border rounded-md h-10 w-[800px] outline-0 pl-3" />
          <select
            name="status"
            id="status"
            className="border border-l-white -ml-2 outline-0 h-10 w-[100px]">
            <option value="volvo">Active</option>
            <option value="saab">Non Active</option>
          </select>
          <select
            name="sort"
            id="sort"
            className="border border-l-white -ml-1 outline-0 h-10 w-[100px] rounded-r-md">
            <option value="volvo">Name </option>
          </select>
          <button
            type="button"
            className='"border bg-green-600 text-white  rounded-md  w-[100px] ml-8 h-10'>
            Search
          </button>
        </div>
      </div>
      <div className="flex px-5 grid-cols-2 w-full bg-[#f0f5ed] min-h-screen">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Address
              </th>
              <th scope="col" className="py-3 px-6">
                Country
              </th>
              <th scope="col" className="py-3 px-6">
                Phone Number
              </th>
              <th scope="col" className="py-3 px-6">
                Job Title
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((items, indeks) => (
              <tr key={indeks} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="py-4 px-6">{items.name}</td>
                <td className="py-4 px-6">{items.address}</td>
                <td className="py-4 px-6">{items.country}</td>
                <td className="py-4 px-6">{items.phone_number}</td>
                <td className="py-4 px-6">{items.job_title}</td>
                <td className="py-4 px-6"> {items.status ? 'Aktiv' : 'NonActive'}</td>
                <td className="py-4 px-6 flex">
                  <BiPencil
                    onClick={() => setShowEditModal(true)}
                    className="h-5 w-5 text-green-700 cursor-pointer"
                  />
                  <RiDeleteBin5Line
                    onClick={() => onDeleteCustomer(items.id)}
                    className="h-5 w-5 text-red-600 ml-2 cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showEditModal ? <EditModal /> : null}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/* content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* header */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add Customer</h3>
                  <button
                    type="button"
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}>
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/* body */}
                <div className="relative p-4 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    <form
                      // onSubmit={(e) => onCreateCustomer(e)}
                      className="flex flex-col px-20"
                      action="">
                      <label htmlFor="">Name</label>
                      <input
                        onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })}
                        className="w-[500px] mt-2 rounded pl-2 border border-black"
                        type="text"
                      />
                      <label htmlFor="">Address</label>
                      <input
                        onChange={(e) => setUpdateData({ ...updateData, address: e.target.value })}
                        className="w-[500px] mt-2 rounded pl-2 border border-black"
                        type="text"
                      />
                      <label htmlFor="">Country</label>
                      <input
                        onChange={(e) => setUpdateData({ ...updateData, country: e.target.value })}
                        className="w-[500px] mt-2 rounded pl-2 border border-black"
                        type="text"
                      />
                      <label htmlFor="">Phone Number</label>
                      <input
                        onChange={(e) =>
                          setUpdateData({ ...updateData, phone_number: e.target.value })
                        }
                        className="w-[500px] mt-2 rounded pl-2 border border-black"
                        type="text"
                      />
                      <label htmlFor="">Job title</label>
                      <input
                        onChange={(e) =>
                          setUpdateData({ ...updateData, job_title: e.target.value })
                        }
                        className="w-[500px] mt-2 rounded pl-2 border border-black"
                        type="text"
                      />
                      <label htmlFor="">Status</label>
                      {/* <input
                        onChange={(e) => setUpdateData({ ...updateData, status: e.target.value })}
                        className="w-[500px] mt-2 rounded pl-2 border border-black"
                        type="text"
                      /> */}
                      <div className="flex items-center mb-4">
                        <input
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="default-radio-1"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                          Active
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          checked
                          id="default-radio-2"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="default-radio-2"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                          NonActive
                        </label>
                      </div>
                    </form>
                  </p>
                </div>
                {/* footer */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}>
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={onCreateCustomer}>
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
    </div>
  );
}
