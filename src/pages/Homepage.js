/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { BiPencil, BiBuildingHouse, BiShareAlt } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { TbBuildingWarehouse } from 'react-icons/tb';
import { ImWrench } from 'react-icons/im';
import LabelDetail from '../components/atoms/labelDetailCompany';
import LabelCardLocation from '../components/atoms/labelCardLokasi';
import CardBank from '../components/molecules/accountBank';
import Navbar from '../components/organisms/navbar';

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="flex grid-cols-2 w-full bg-[#f0f5ed] min-h-screen">
        <div className="w-[30%] mb-10">
          <div className="bg-white w-[80%] justify-center items-center mt-6 ml-7 min-h-[80vh] rounded-sm">
            <div className="pb-16">
              <img
                className="w-full h-28 rounded-sm"
                src="https://yambala.co.id/wp-content/uploads/2017/04/proj5.jpg"
                alt=""
              />
              <div className="flex flex-col justify-center items-center -mt-16">
                <img
                  className="rounded-full w-[150px] h-[150px] border"
                  // className="rounded-full w-[150px] h-[150px] border ml-[20%] -mt-16 bg-red"
                  src="http://202.159.35.85/cdn/d:300/company/logo/20210611/c943659b6850d2832a95c6e76f5d39019defad5d1623372588.PNG"
                  alt=""
                />
                <div className="flex flex-col justify-center items-center mt-6">
                  <label htmlFor="" className="font-bold ">
                    Mitramas Infosys Global
                  </label>
                  <p className="text-[#8c8f8a]">Layanan IT</p>
                  <div className="flex mt-4 cursor-pointer">
                    <BiPencil className="text-green-500 h-5 w-h-5 mr-2" />
                    <label className="text-green-500 font-medium text-sm cursor-pointer" htmlFor="">
                      Sunting profil
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-8 mt-10">
                <LabelDetail text="Status Perusahaan" />
                <div>
                  <p className="text-green-700 font-bold">Aktiv</p>
                </div>
                <LabelDetail text="Singkatan" />
                <p>MIG</p>
                <LabelDetail text="Alamat Perusahaan" />
                <p>Jl. Tebet Raya No.42, Jakarta Selatan</p>
                <LabelDetail text="Penanggung Jawab (PIC)" />
                <p>John Doe</p>
                <LabelDetail text="Tanggal PKP" />
                <p>03 Maret 2021</p>
                <LabelDetail text="Email" />
                <div className="flex">
                  <AiOutlineMail className="h-4 w-4 text-green-700 mr-2 mt-1" />
                  <p className="text-green-700 underline underline-offset-1">
                    mig@mitrasolusi.group
                  </p>
                </div>
                <LabelDetail text="No telp" />
                <p className="text-green-700">021-5678-1234</p>
                <LabelDetail text="Situs Web" />
                <p className="text-green-700 underline underline-offset-1">mitramas.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[70%] ">
          <div className="grid mt-6 w-[95%] mr-7">
            {/* card Lokasi */}
            <div className="bg-white mb-8 rounded max-h-[30vh]">
              <div className="relative">
                <label htmlFor="" className="font-bold absolute top-5 left-5">
                  Lokasi
                </label>
                <label htmlFor="" className="text-green-600 absolute right-5 top-5 cursor-pointer">
                  Lihat semua
                </label>
              </div>
              <div className="grid grid-cols-3 mt-14">
                <div className="flex bg-green-700 m-5 rounded">
                  <div className="p-4">
                    <BiBuildingHouse className="h-14 w-14 text-white" />
                  </div>
                  <LabelCardLocation number="20" description="Induk" />
                </div>
                <div className="flex bg-green-600 m-5 rounded">
                  <div className="p-4">
                    <ImWrench className="h-14 w-14 text-white" />
                  </div>
                  <LabelCardLocation number="3" description="Sub Lokasi Level 1" />
                </div>
                <div className="flex bg-green-500 m-5 rounded">
                  <div className="p-4">
                    <TbBuildingWarehouse className="h-14 w-14 text-white" />
                  </div>
                  <LabelCardLocation number="1" description="Sub Lokasi Level 2" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="grid grid-rows-2 mr-12">
                <div className="bg-white mb-6 rounded">
                  <div className="w-full flex">
                    <div className="w-full mt-5 ml-5 font-bold">Akun Bank</div>
                    <div className="w-full flex justify-end mt-4 mr-5">
                      <button
                        className="flex items-center justify-center text-white w-full text-sm border border-green-800 bg-green-800 rounded-md h-8 py-2"
                        type="button">
                        + Tambah Akun Bank
                      </button>
                    </div>
                  </div>
                  <CardBank
                    nameofbank="Bank KB Bukopin"
                    numberofAccount="***** 0876"
                    nameAccount="Yusron Taufik"
                    currency="IDR"
                    // colorCard="bg-green-600"
                  />
                  <CardBank
                    nameofbank="City Bank NA"
                    numberofAccount="***** 5576"
                    nameAccount="Si Tampan"
                    currency="USD"
                    // colorCard="bg-green-600"
                  />
                </div>
                {/* akun Bank */}

                {/* Card Relasi */}
                <div className="bg-white">
                  <div className="relative">
                    <label htmlFor="" className="font-bold absolute top-5 left-5">
                      Relasi
                    </label>
                    <label
                      htmlFor=""
                      className="text-green-600 absolute right-5 top-5 cursor-pointer">
                      Lihat semua
                    </label>
                  </div>
                  <div className="mt-20 ml-5">
                    <div className="flex">
                      <BiShareAlt className="h-10 w-10 mb-6" />
                      <div className="flex flex-col ml-2 -mt-3">
                        <label htmlFor="" className="font-extrabold text-[25px]">
                          20
                        </label>
                        <label htmlFor="" className="text-sm text-[#6f726f]">
                          Memiliki
                        </label>
                      </div>
                    </div>
                    <div className="flex">
                      <BiShareAlt className="h-10 w-10 mb-6" />
                      <div className="flex flex-col ml-2 -mt-3">
                        <label htmlFor="" className="font-extrabold text-[25px]">
                          108
                        </label>
                        <label htmlFor="" className="text-sm text-[#6f726f]">
                          Menggunakan
                        </label>
                      </div>
                    </div>
                    <div className="flex">
                      <BiShareAlt className="h-10 w-10 mb-6" />
                      <div className="flex flex-col ml-2 -mt-3">
                        <label htmlFor="" className="font-extrabold text-[25px]">
                          67
                        </label>
                        <label htmlFor="" className="text-sm text-[#6f726f]">
                          Meminjam
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card Aktivitas */}
              <div className="bg-white rounded">
                <div className="ml-5 mt-5 text-bold font-bold">Aktivitas</div>
                <div className="mt-5 ml-5 mr-2">
                  <label htmlFor="">
                    Yusron baru saja menambahkan lokasi kantor Cabang Baru Jagakarsa
                  </label>
                  <p className="text-sm text-[#6f726f] mt-2">Hari ini, 06.00</p>
                </div>
                <div className="mt-5 ml-5 mr-2">
                  <label htmlFor="">
                    Bintang baru saja menghapus lokasi sublokasi KCP Tebet 4 dari Induk Kantor
                    Cabang Tebet
                  </label>
                  <p className="text-sm text-[#6f726f] mt-2">Hari ini, 17.32</p>
                </div>
                <div className="mt-5 ml-5 mr-2">
                  <label htmlFor="">
                    Yusron melakukan perubahan profil pada induk Kantor Cabang Bekasi
                  </label>
                  <p className="text-sm text-[#6f726f] mt-2">Hari ini, 17.32</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
