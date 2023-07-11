import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Register = () => {

    const [errorStatus , setErrorStatus ] = useState({
        status: false,
        color: 'green',
        msg: ""
    })

   

    const handleSubmit = async (e) => {
        // page ko refresh hony sy rokny ky liya 
        e.preventDefault()
        setErrorStatus({
            status: false,
            msg: ""
        })
        const username = document.querySelector("#username").value
        const email = document.querySelector("#email").value
        const password = document.querySelector("#password").value
        const confirmPassword = document.querySelector("#confirmPassword").value

        var formData = {
            "name": String(username) , 
            "email": String(email) , 
            "password": String(password) ,
            "password_confirmation":  String(confirmPassword),
            tc: true
        }

        try{
            if(username , email , password , confirmPassword){
                let url = 'http://localhost:8000/api/user/register'
                const res = await axios.post(url , formData );
                // console.log(res)
                // setErrorStatus({
                //     status: true,
                //     color: 'green',
                //     msg: "Data saved successfully"
                // })
                setErrorStatus({
                    status: true,
                    color: res.data.status == 'success'? 'green': 'red',
                    msg: res.data.message
                })
            }else{
                setErrorStatus({
                    status: true,
                    color: 'red',
                    msg: "Alfieds are required"
                })
            }
        }catch(err){
            console.log(err)
            setErrorStatus({
                status: true,
                color: 'red',
                msg: "Error while creating"
            })
        }

    }
    return (
        <div>
            <div className="w-full max-w-md mx-auto mt-10">
                <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-center bg-gray-500 text-gray-100">
                    {/*<h1 className="text-base font-bold my-4">VEHICLE MANAGEMENT SYSTEM</h1>*/}
                    <h3 className="text-lg font-bold my-4">SIGNUP FORM</h3>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2 float-left" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2 float-left" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email" type="email" placeholder="Email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-bold mb-2 float-left" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password" type="password" placeholder="******************" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-bold mb-2 float-left" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="confirmPassword" type="password" placeholder="******************" />
                    </div>
                    <div className="mb-6">
                        <button type="button" onClick={handleSubmit}
                            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Signup Now
                        </button>
                    </div>
                    {
                        errorStatus.status ? (<h2 style={{ color: errorStatus.color , backgroundColor: 'white' , borderRadius: '10px' }} >{errorStatus.msg}</h2>) : ''
                    }
                    <p className="text-xs text-center mt-6">Already Registered! <Link to="/login"><span className="underline"> Sign In</span></Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;
