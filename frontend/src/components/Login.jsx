import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Login = () => {

    const storeToken = (value) => {
        localStorage.setItem('token', value)
    }

    const [showUser , setShowUser] = useState(false)
    const [userNameDB , setUserNameDB] = useState("")


    const getToken = () => {
        let token = localStorage.getItem('token')
        return token
      }

      const removeToken = (value) => {
        localStorage.removeItem(value)
      }

    const fetchUser = async() => {
        let url = "http://localhost:8000/api/user/loggeduser";
        let token = getToken()
        const res = await axios.get(url , {
            headers: {
              'Authorization': `Bearer ${token}`
            },
          })

          if(res.data.status == 'failed'){
            setShowUser(false)
          }else if (res.data.status == 'success'){
            setUserNameDB(res.data.user.name)
            setShowUser(true)
          }

          console.log(res.data)
    }

    useEffect(
        ()=>{
            fetchUser()
        } , []
    )

    const [errorStatus, setErrorStatus] = useState({
        status: false,
        color: 'green',
        msg: ""
    })

    const handleLogOut = async (e) => {
        e.preventDefault()
        setErrorStatus({
            status: false,
            msg: ""
        })
        removeToken('token')
        setShowUser(false)
    }

    const handleSubmit = async (e) => {
        // page ko refresh hony sy rokny ky liya 
        e.preventDefault()

        setErrorStatus({
            status: false,
            msg: ""
        })

        const userName = document.querySelector('#username').value;

        try {
            if (userName) {

                let url = "http://localhost:8000/api/user/login"
                const res = await axios.post(url, {
                    "email": userName,
                    "password": document.querySelector('#password').value
                })
                console.log(res.data)
                storeToken(res.data.token)
                setErrorStatus({
                    status: true,
                    color: res.data.status == 'success'? 'green': 'red',
                    msg: res.data.message
                })
                fetchUser()
                setShowUser(true)
            }
        } catch (error) {
            console.log(error)
            setErrorStatus({
                status: true,
                color: 'red',
                msg: "Error while creating"
            })
        }

    }
    return (
        <div className="w-full max-w-md mx-auto mt-16">

            { showUser == true ? (<div style={{ height: '60vh' , display: 'flex' , alignItems:'center' , justifyContent:'center' , flexDirection: 'column' }} ><h1 className="text-base font-bold my-4">Hye! {userNameDB} </h1>
            <button style={{ padding: 5 , color: 'red' , border: '2px solid black' , borderRadius: '10px' }} onClick={handleLogOut} >Logout</button>
            </div> ) : (<form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-center bg-gray-500 text-gray-100">
                <h1 className="text-base font-bold my-4">VEHICLE MANAGEMENT SYSTEM</h1>
                <h3 className="text-lg font-bold my-4">Login Form</h3>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2 float-left" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" placeholder="Username" />
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
                    <button type="button" onClick={handleSubmit}
                        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">SIGN
                        IN
                    </button>
                </div>
                {
                    errorStatus.status ? (<h2 style={{ color: errorStatus.color, backgroundColor: 'white', borderRadius: '10px' }} >{errorStatus.msg}</h2>) : ''
                }
                <Link to="/register"><p className="underline text-xs text-center mt-6">Register Yourself!</p></Link>
            </form>) }
            
        </div>
    );
};

export default Login;
