"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { request } from "../../utils/fetchApi";

const Signin = () => {
  const [userData, setUserData] = useState([])
    const router = useRouter();

  const handleUserData = (e) => {
    e.preventDefault()
    setUserData({...userData, [e.target.name]: e.target.value})
    console.log(userData);
  }
  
  const handleSubmit = async (e) => {
    console.log("check");
    e.preventDefault();
    console.log(userData);
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const data = await request("/auth/signup", "POST", headers, {
        ...userData,
      });
      console.log("data", data);
      router.push('/chatboard', {scroll: false})
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex max-w-[1400px] mx-auto flex-col justify-center items-center pt-[180px] bg-[#101928] text-[#FAFCFF] pb-[30px]">
      <div className="grid gap-[40px] max-w-[600px] w-full px-[20px] justify-items-center pb-[20px]">
        <h2 className="text-2xl">Register your account</h2>
        <form
          onSubmit={handleSubmit}
          className="grid gap-5 grid-cols-1 w-full"
        >
          <div className="formCont grid md:grid-cols-2 gap-5 grid-cols-1 w-full">
            <div className="formItem grid gap-[10px] w-full">
              <label htmlFor="first_name">First Name</label>
              <input
                name="first_name"
                type="text"
                required
                className="p-[10px] rounded-lg text-[#EFF2F9] bg-[#101928] border border-[#5D6676]"
                placeholder="Jane"
                onChange={handleUserData}
              />
            </div>
            <div className="formItem grid gap-[10px] w-full">
              <label htmlFor="last_name">Last Name</label>
              <input
                name="last_name"
                required
                type="text"
                placeholder="Doe"
                className="p-[10px] rounded-lg text-[#EFF2F9] bg-[#101928] border border-[#5D6676]"
                onChange={handleUserData}
              />
            </div>
            <div className="formItem grid gap-[10px] w-full">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                required
                type="email"
                placeholder="mail@example.com"
                className="p-[10px] rounded-lg text-[#EFF2F9] bg-[#101928] border border-[#5D6676]"
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
                className="p-[10px] rounded-lg text-[#EFF2F9] bg-[#101928] border border-[#5D6676]"
                onChange={handleUserData}
              />
            </div>
            <div className="formItem grid gap-[10px] w-full">
              <label htmlFor="country">Country</label>
              <input
                name="country"
                required
                type="text"
                placeholder="Enter Your Country"
                className="p-[10px] rounded-lg text-[#EFF2F9] bg-[#101928] border border-[#5D6676]"
                onChange={handleUserData}
              />
            </div>
            <div className="formItem grid gap-[10px] w-full">
              <label htmlFor="phone_number">Phone</label>
              <input
                name="phone_number"
                required
                type="number"
                placeholder="+234-000-000-000"
                className="p-[10px] rounded-lg text-[#EFF2F9] bg-[#101928] border border-[#5D6676]"
                onChange={handleUserData}
              />
            </div>
            <div className="formItem grid gap-[10px] w-full">
              <label htmlFor="phone_code">Phone Code</label>
              <input
                name="phone_code"
                required
                type="text"
                placeholder="*****"
                className="p-[10px] rounded-lg text-[#EFF2F9] bg-[#101928] border border-[#5D6676]"
                onChange={handleUserData}
              />
            </div>
            <div className="formItem grid gap-[10px] w-full h-full">
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                id="gender"
                className="border bg-[#101928] border-[#5D6676] p-[10px] rounded-lg text-[#EFF2F9]"onChange={handleUserData}
              >
                <option value="male" className="border-[#5D6676]" onChange={handleUserData}>
                  Select You Gender
                </option>
                <option value="male" className="border-[#5D6676]" onChange={handleUserData}>
                  Male
                </option>
                <option value="female" className="border-[#5D6676]" onChange={handleUserData}>
                  Female
                </option>
              </select>
            </div>
          </div>
          <button  className="mt-[50px] text-[#fff] bg-[#1958FF] px-[10px] py-[10px] pt-[15px] rounded-lg w-full text-center">
            Register account
          </button>
        </form>

        <p className="text-[#7E8695] py-[10px]">
          Already have an account?{" "}
          <Link href="/login" className="text-[#fff]">
            Log In
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

export default Signin;
