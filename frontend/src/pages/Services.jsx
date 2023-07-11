import React, { useState } from 'react'
import Navbar from '../components/Header/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'

const Services = () => {
// const [varibale , functionToSet] = useState()
    const [errorStatus , setErrorStatus ] = useState({
        status: false,
        color: 'green',
        msg: ""
    })

    const getToken = () => {
        let token = localStorage.getItem('token')
        return token
      }

    const handleSubmit = async (e) => {
        // page ko refresh hony sy rokny ky liya 
        e.preventDefault()
        setErrorStatus({
            status: false,
            msg: ""
        })
        console.log(document.querySelector('#name').value)
        const name = document.querySelector('#name').value
        const department = document.querySelector('#Department').value
        const type = document.querySelector('#type').value
        const rate = document.querySelector('#rate').value
        const date = document.querySelector('#date').value
        const destination = document.querySelector('#Destination').value
        const pickup = document.querySelector('#pickup').value
        const reason = document.querySelector('#reason').value
        const email = document.querySelector('#e-mail').value
        const mobile = document.querySelector('#mobile').value

        const formData = {
            "name": name,
            "department": department,
            "type": type,
            "rate": rate,
            "date": date,
            "destination": destination,
            "pickup": pickup,
            "reason": reason,
            "email": email,
            "mobile": mobile
        }

        try{
            if(name , department , type , rate , date , destination , pickup , reason , email , mobile){
                let token = getToken()
                let url = "http://localhost:8000/api/vehicle/add";
                // axios.post()
            const response = await axios.post(url , formData , {
                headers: {
                  "Content-Type": "application/json",
                  'Authorization': `Bearer ${token}`
                },
              });
            // setErrorStatus({
            //     status: true,
            //     color: 'green',
            //     msg: "Data saved successfully"
            // })
            setErrorStatus({
                status: true,
                color: response.data.status == 'success'? 'green': 'red',
                msg: response.data.message
            })
            }else{
                setErrorStatus({
                    status: true,
                    color: 'red',
                    msg: "Alfieds are required"
                })
            }
            

        }catch(err){
            console.log("Error" + err)
            setErrorStatus({
                status: true,
                color: 'red',
                msg: "Error saving data! Please login or Refresh your session!"
            })

        }
    }
    return (
        <div>
            <Navbar />
            <div className="w-full max-w-md mx-auto mt-16">
                <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-center bg-gray-500 text-gray-100">
                    <h1 className="text-base font-bold my-4">VEHICLE MANAGEMENT SYSTEM</h1>
                    <h3 className="text-lg font-bold my-4"></h3>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2 float-left" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name" type="text" placeholder="name" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-bold mb-2 float-left" htmlFor="department">
                            Department
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Department" type="text" placeholder="Department" />

                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-bold mb-2 float-left" htmlFor="vehicle type">
                            Vehicle type
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="type" type="option" placeholder="vehicle type" />

                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-bold mb-2 float-left" htmlFor="rate">
                            Rate of requirments
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="rate" type="text" placeholder="rate of requirments" />

                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-bold mb-2 float-left" htmlFor="date">
                            Date of return
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="date" type="date" placeholder="date of return" />

                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-bold mb-2 float-left" htmlFor="Destination">
                            Destination
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Destination" type="text" placeholder="Destination" />

                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-bold mb-2 float-left" htmlFor="pickup">
                            Pickup point
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="pickup" type="text" placeholder="pick up point" />

                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-bold mb-2 float-left" htmlFor="reason">
                            Reason for booking
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="reason" type="text" placeholder="reason" />

                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-bold mb-2 float-left" htmlFor="e-mail">
                            E-mail
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="e-mail" type='email' placeholder="E-mail" />

                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-bold mb-2 float-left" htmlFor="mobile">
                            Mobile
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="mobile" type="tel" placeholder="mobile" />

                    </div>
                    <div className="mb-6">
                        <button
                            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={handleSubmit} >Submit
                        </button>
                    </div>
                    {
                        errorStatus.status ? (<h2 style={{ color: errorStatus.color , backgroundColor: 'white' , borderRadius: '10px' }} >{errorStatus.msg}</h2>) : ''
                    }
                    


                </form>
            </div>
            <Footer />
        </div>


    )
}

export default Services