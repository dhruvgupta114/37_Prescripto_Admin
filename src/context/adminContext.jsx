import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  const [doctors,setDoctors] = useState([])
  const [appointments, setAppointments] = useState([])
  const [dashData, setDashData]= useState([])
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const getAllDoctors = async() => {
    try {
      const {data} = await axios.post(backendUrl+"/api/admin/all-doctors", {}, {
        headers: {token}
      })
      if(data.success){
        setDoctors(data.doctors)
        toast.success(data.message)
        // console.log(data.doctors)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const changeAvailability = async(docId) => {
    try {
      const {data} = await axios.post(backendUrl+"/api/admin/change-availability", {docId}, {
        headers: {token}
      })
      if(data.success){
        toast.success(data.message)
        getAllDoctors()
        // console.log(data.doctors)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const getAllAppointments = async()=>{
    try {
      const {data} = await axios.get(backendUrl+"/api/admin/appointments",{headers:{token}})

    if(data.success){
      setAppointments(data.appointments)
      console.log(data.appointments)
    }else{
      toast.error(data.message)
    }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const cancelAppointment = async(appointmentId)=>{
    try {
      const {data} = await axios.post(backendUrl+"/api/admin/cancel-appointment", {appointmentId}, {
        headers: {token}
      })
      if(data.success){
        toast.success(data.message)
        getAllAppointments()
        // console.log(data.doctors)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const getDashData = async()=>{
    try {
      const {data} = await axios.get(backendUrl+"/api/admin/dashboard", {
        headers: {token}
      })
      if(data.success){
        // toast.success(data.message)
        console.log(data)

        setDashData(data.dashData)
        // console.log("dash-data", data.dashData)
        // console.log(data.doctors)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const value = {
    token,
    setToken,
    backendUrl,
    getAllDoctors,
    doctors,
    changeAvailability,
    getAllAppointments,
    appointments, setAppointments,
    cancelAppointment,
    getDashData,
    dashData
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
