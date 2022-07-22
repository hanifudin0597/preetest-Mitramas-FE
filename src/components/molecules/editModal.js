/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function editModal() {
  const onCLose = () => {
    window.location.reload();
  };
  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/* content */}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/* header */}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Edit Customer</h3>
              <button
                type="button"
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
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
                  <input className="w-[500px] mt-2 rounded pl-2 border border-black" type="text" />
                  <label htmlFor="">Address</label>
                  <input className="w-[500px] mt-2 rounded pl-2 border border-black" type="text" />
                  <label htmlFor="">Country</label>
                  <input className="w-[500px] mt-2 rounded pl-2 border border-black" type="text" />
                  <label htmlFor="">Phone Number</label>
                  <input className="w-[500px] mt-2 rounded pl-2 border border-black" type="text" />
                  <label htmlFor="">Job title</label>
                  <input className="w-[500px] mt-2 rounded pl-2 border border-black" type="text" />
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
                onClick={() => onCLose()}>
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </div>
  );
}
