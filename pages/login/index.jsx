"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const [userData, setUserData] = useState([])
    const router = useRouter();

  const handleUserData = (e) => {
    e.preventDefault()
    setUserData({...userData, [e.target.name]: e.target.value})
  }
  
  const handleLogin = async(e) => {
    e.preventDefault()
    try {
      const options = {
        'Content-Type': 'application/json'
      }
      const data = await request('/auth/login/', "POST", options, {email, password})
      // dispatch(login(data))
      router("/")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex max-w-[1400px] mx-auto flex-col justify-center items-center pt-[180px] bg-[#101928] text-[#FAFCFF] pb-[30px]">
      <div className="grid gap-[40px] max-w-[600px] w-full px-[20px] justify-items-center pb-[20px]">
        <h2 className="text-2xl">Register your account</h2>
        <form
          onSubmit={handleLogin}
          className="grid gap-5 grid-cols-1 w-full"
        >
          <div className="formCont grid gap-5 grid-cols-1 w-full">
            
            <div className="formItem grid gap-[10px] w-full">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                required
                type="email"
                placeholder="mail@example.com"
                className="text-sm text-[#EFF2F9] p-[10px] rounded-lg bg-[#101928] border border-[#5D6676]"
                onChange={handleUserData}
              />
            </div>
            <div className="formItem grid gap-[10px] w-full">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                required
                type="password"
                placeholder="*****"
                className="text-sm text-[#EFF2F9] p-[10px] rounded-lg bg-[#101928] border border-[#5D6676]"
                onChange={handleUserData}
              />
            </div>
          </div>
          <button  className="mt-[50px] text-[#fff] bg-[#1958FF] px-[10px] py-[10px] pt-[15px] rounded-xl w-full text-center">
            Login
          </button>
        </form>

        <p className="text-[#7E8695] py-[10px]">
          New to Symptoms.ai?{" "}
          <Link href="/signup" className="text-[#fff]">
            Create an account
          </Link>
        </p>

        <p className="text-[#7E8695] mt-[50px] text-sm md:text-xl text-center">
          By creating an account, you agree to the <br /> our{" "}
          <span className="text-[#fff]">Terms of Service</span> and{" "}
          <span className="text-[#fff]">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
