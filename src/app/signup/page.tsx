"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignupPage() {
  const router  = useRouter()
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false)
  const [loading, setLoading] = useState(false)

  const onSignup = async () => {
    try {
      setLoading(true)
      const response = await axios.post("/api/users/signup",user)
      console.log("signup successfully", response.data)
      router.push("/login")
    } catch (error:any) {
      console.log("signup failed",error.message)
      toast.error(error.message)
    }finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    if(user.email.length>0 && user.password.length>0 && user.username.length>0){
      setButtonDisabled(false)
    }else{
      setButtonDisabled(true)
    }
  }, [user])
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-2">
      <h1>{loading ? "processing" : "Signup"}</h1>
      <br />
      <label htmlFor="username">username</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 "
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      ></input>

      <label htmlFor="email">email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 "
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      ></input>


      <label htmlFor="password">password</label>
            <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 "
            id="password"
            type="password"
            value={user.password}
            onChange={(e)=> setUser({...user,password:e.target.value})}
            placeholder="password"
            ></input>

            <button  
            onClick={onSignup}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
                {buttonDisabled? "No signup" : "Signup"}
            </button>
            <Link href="/login" >Visit Login Page</Link>
    </div>
  );
}
