import React, { useContext } from 'react'
import { AdminContext } from '../context/adminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { DoctorContext } from '../context/doctorContext'

const Sidebar = () => {
    const {token} = useContext(AdminContext)
    const {dtoken} = useContext(DoctorContext)

  return (
    <div className='min-h-screen bg-white border-r'>
        {
            token  && <ul className='text-[#515151] mt-5'>
                <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4  border-primary': ''}`} to="/admin-dashboard">
                    <img src={assets.home_icon} alt="" />
                    <p className='hidden md:block'>Dashboard</p>
                </NavLink>
                <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4  border-primary': ''}`} to="/all-appointments">
                    <img src={assets.appointment_icon} alt="" />
                    <p className='hidden md:block'>Appointments</p>
                </NavLink>
                <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4  border-primary': ''}`} to="/add-doctor">
                    <img src={assets.add_icon} alt="" />
                    <p className='hidden md:block'>Add Doctor</p>
                </NavLink>
                <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4  border-primary': ''}`} to="/doctors-list">
                    <img src={assets.people_icon} alt="" />
                    <p className='hidden md:block'>Doctors List</p>
                </NavLink>
            </ul>
        }
        {
            dtoken  && <ul className='text-[#515151] mt-5'>
                <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4  border-primary': ''}`} to="/doctor-dashboard">
                    <img src={assets.home_icon} alt="" />
                    <p className='hidden md:block'>Dashboard</p>
                </NavLink>
                <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4  border-primary': ''}`} to="/doctor-appointments">
                    <img src={assets.appointment_icon} alt="" />
                    <p className='hidden md:block'>Appointments</p>
                </NavLink>
                <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4  border-primary': ''}`} to="/doctor-profile">
                    <img src={assets.people_icon} alt="" />
                    <p className='hidden md:block'>Profile</p>
                </NavLink>
            </ul>
        }
    </div>
  )
}

export default Sidebar