import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, User, Phone, Mail, Shield, Lock } from 'lucide-react';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full flex flex-col items-center justify-center pb-12 pt-4 px-2">
      <div className="bg-white rounded-[14px] shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-gray-100 p-6 md:p-10 w-full max-w-[550px] flex flex-col">
        
        {/* Bat & Ball Icon SVG mock */}
        <div className="flex justify-center mb-4">
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M72.23 20.35L54.77 37.81C53.79 38.79 53.79 40.38 54.77 41.36L58.64 45.23C59.62 46.21 61.21 46.21 62.19 45.23L79.65 27.77C80.63 26.79 80.63 25.21 79.65 24.23L75.77 20.35C74.79 19.37 73.21 19.37 72.23 20.35Z" fill="#7C3AED"/>
            <path d="M52.33 43.83L29.74 66.42C28.26 67.9 26.11 68.61 24.01 68.32L17.5 67.43C16.32 67.27 15.68 65.86 16.4 64.92L20.26 59.83C21.43 58.29 23.16 57.26 25.12 56.93L31.63 55.85C33.73 55.5 35.88 56.12 37.4 57.64L60.01 35.03C60.99 34.05 62.58 34.05 63.56 35.03L64.97 36.44C65.95 37.42 65.95 39.01 64.97 39.99L52.33 43.83Z" fill="#FDBA74"/>
            <circle cx="80" cy="50" r="5" fill="#F43F5E"/>
            <path d="M77 50C77 50 78.5 48.5 80 50C81.5 51.5 83 50 83 50" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>

        <h1 className="text-2xl md:text-3xl font-black text-[#121A2B] text-center mb-2">Player Registration</h1>
        <p className="text-gray-500 text-[13px] md:text-sm text-center font-medium mb-8">
          Join the UPL and start your cricketing journey
        </p>

        <form className="flex flex-col gap-4">
          
          {/* Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5 relative">
              <label className="text-[13px] font-black text-gray-800">First Name</label>
              <div className="relative flex items-center">
                <div className="absolute left-4 text-gray-400">
                  <User size={18} strokeWidth={2.5} />
                </div>
                <input 
                  type="text" 
                  placeholder="Virat"
                  className="w-full border border-gray-200 rounded-md pl-11 pr-4 py-3 text-[14px] text-gray-800 focus:outline-none focus:border-[#0F4B81] focus:ring-1 focus:ring-[#0F4B81] transition-colors bg-white shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5 relative">
              <label className="text-[13px] font-black text-gray-800">Last Name</label>
              <div className="relative flex items-center">
                <div className="absolute left-4 text-gray-400">
                  <User size={18} strokeWidth={2.5} />
                </div>
                <input 
                  type="text" 
                  placeholder="Kohli"
                  className="w-full border border-gray-200 rounded-md pl-11 pr-4 py-3 text-[14px] text-gray-800 focus:outline-none focus:border-[#0F4B81] focus:ring-1 focus:ring-[#0F4B81] transition-colors bg-white shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                />
              </div>
            </div>
          </div>

          {/* Contact Row */}
          <div className="flex flex-col gap-1.5 relative">
            <label className="text-[13px] font-black text-gray-800">Phone Number</label>
            <div className="relative flex items-center">
              <div className="absolute left-4 text-gray-400">
                <Phone size={18} strokeWidth={2.5} />
              </div>
              <input 
                type="tel" 
                placeholder="Enter your 10-digit phone number"
                className="w-full border border-gray-200 rounded-md pl-11 pr-4 py-3 text-[14px] text-gray-800 focus:outline-none focus:border-[#0F4B81] focus:ring-1 focus:ring-[#0F4B81] transition-colors bg-white shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5 relative">
            <label className="text-[13px] font-black text-gray-800">Gmail Address</label>
            <div className="relative flex items-center">
              <div className="absolute left-4 text-gray-400">
                <Mail size={18} strokeWidth={2.5} />
              </div>
              <input 
                type="email" 
                placeholder="yourname@gmail.com"
                className="w-full border border-gray-200 rounded-md pl-11 pr-4 py-3 text-[14px] text-gray-800 focus:outline-none focus:border-[#0F4B81] focus:ring-1 focus:ring-[#0F4B81] transition-colors bg-white shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
              />
            </div>
          </div>

          {/* Role */}
          <div className="flex flex-col gap-1.5 relative">
            <label className="text-[13px] font-black text-gray-800">Playing Role</label>
            <div className="relative flex items-center">
              <div className="absolute left-4 text-gray-400">
                <Shield size={18} strokeWidth={2.5} />
              </div>
              <select className="w-full border border-gray-200 rounded-md pl-11 pr-4 py-3 text-[14px] text-gray-800 focus:outline-none focus:border-[#0F4B81] focus:ring-1 focus:ring-[#0F4B81] transition-colors bg-white shadow-[0_1px_2px_rgba(0,0,0,0.02)] appearance-none cursor-pointer">
                <option value="">Select your role</option>
                <option value="batsman">Batsman</option>
                <option value="bowler">Bowler</option>
                <option value="allrounder">All-Rounder</option>
                <option value="wk">Wicket Keeper</option>
              </select>
            </div>
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-1.5 relative">
            <label className="text-[13px] font-black text-gray-800">Create Password</label>
            <div className="relative flex items-center">
              <div className="absolute left-4 text-gray-400">
                <Lock size={18} strokeWidth={2.5} />
              </div>
              <input 
                type={showPassword ? 'text' : 'password'} 
                placeholder="Create a strong password"
                className="w-full border border-gray-200 rounded-md pl-11 pr-16 py-3 text-[14px] text-gray-800 focus:outline-none focus:border-[#0F4B81] focus:ring-1 focus:ring-[#0F4B81] transition-colors bg-white shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[12px] font-bold text-[#0F4B81] hover:text-[#0A3359] hover:underline px-2 py-1 outline-none"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-2 mt-2">
            <input type="checkbox" id="terms" className="mt-1 shrink-0 w-4 h-4 text-[#0F4B81] rounded border-gray-300 focus:ring-[#0F4B81]" />
            <label htmlFor="terms" className="text-[12px] md:text-[13px] text-gray-600 font-medium leading-tight">
              I agree to the <span className="text-[#0F4B81] font-bold hover:underline cursor-pointer">UPL Rules & Constitution</span>, and confirm that all details provided are correct.
            </label>
          </div>

          <button 
            type="button"
            className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-bold text-[15px] py-3.5 rounded-md mt-4 transition-colors shadow-sm outline-none"
          >
            Register Now
          </button>
        </form>

        <p className="text-center text-[13px] text-gray-600 mt-6 font-medium">
          Already registered? <Link to="/login" className="text-[#0F4B81] font-bold hover:underline">Login here</Link>
        </p>

      </div>
    </div>
  );
};

export default Register;
