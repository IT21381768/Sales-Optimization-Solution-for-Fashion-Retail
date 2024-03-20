import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./css/register.css";

function Register(){
    const [data,setData] = useState({
        firstName:"",
        lastName:"",
        address:"",
        contactNo:"",
        email:"",
        password:""
    })
    const [error,setError] = useState("")

    const navigate = useNavigate();

    const handleChange = ({ currentTarget:input }) => {
        setData({...data,[input.name]: input.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            const url = "http://localhost:5000/api/users";
            const { data:res } = await axios.post(url,data);
            navigate("/")
            console.log(res.message);
        }catch(error){
            if(error.response && error.response.status >= 400 && error.response.status <= 500){
                setError(error.response.data.message)
            }

        }
    }

    return(
        <section class="register-bk">
        <div class="flex items-center justify-center h-screen">
            <div class="register-tr">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create an account
                    </h1>
                    <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div class="flex space-x-4"> 
                            <div class="w-1/2">
                                <label for="firstName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                <input type="text" name="firstName" id="firstName" class="field" placeholder="First Name" value={data.firstName} required onChange={handleChange}/>
                            </div>
                            <div class="w-1/2">
                                <label for="lastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                <input type="text" name="lastName" class="field" placeholder="Last Name" value={data.lastName} required onChange={handleChange}/>
                            </div>
                        </div>
                        <div>
                            <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                            <input type="text" name="address" class="field" placeholder="Address" value={data.address}  required 
                        onChange={handleChange}/>
                            
                        </div>
                        <div>
                            <label for="contactNo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact No</label>
                            <input type="text" name="contactNo"  class="field" placeholder="Contact No" value={data.contactNo}  required
                        onChange={handleChange}/>
                        </div>

                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E mail</label>
                            <input type="email" name="email" class="field" placeholder="Email" value={data.email}  required
                        onChange={handleChange}/>
                        
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password"  id="password" class="field" placeholder="Password" value={data.password}  required
                        onChange={handleChange}/>
                            
                        </div>
                     
                              
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        {error && <div className="error_msg">{error}</div>}
                        <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account?  <Link to={"/"} class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
    
    )
}

export default Register;