import React from 'react';
import { Link } from 'react-router-dom';
import { KeyRound, Mail, ArrowLeft, ShieldAlert } from 'lucide-react';

const Forgot = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center pb-12 pt-4 px-2">
      <div className="bg-white rounded-[14px] shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-gray-100 p-6 md:p-10 w-full max-w-[500px] flex flex-col items-center">
        
        {/* Top Icon */}
        <div className="w-16 h-16 bg-[#EFF6FF] rounded-full flex items-center justify-center mb-6 shadow-inner">
          <KeyRound size={28} className="text-[#0F4B81]" strokeWidth={2.5} />
        </div>

        <h1 className="text-2xl md:text-3xl font-black text-[#121A2B] text-center mb-3">Forgot Password?</h1>
        <p className="text-gray-500 text-[13px] md:text-sm text-center font-medium mb-8 leading-relaxed px-4">
          No worries! Enter your registered email or phone number below and we'll send you instructions to reset it.
        </p>

        <form className="flex flex-col gap-5 w-full">
          
          {/* Input Field with Icon */}
          <div className="flex flex-col gap-1.5 relative">
            <label className="text-[13px] font-black text-gray-800">Email or Phone Number</label>
            <div className="relative flex items-center">
              <div className="absolute left-4 text-gray-400">
                <Mail size={18} strokeWidth={2.5} />
              </div>
              <input 
                type="text" 
                placeholder="Enter your email or phone"
                className="w-full border border-gray-200 rounded-md pl-11 pr-4 py-3.5 text-[14px] text-gray-800 focus:outline-none focus:border-[#0F4B81] focus:ring-1 focus:ring-[#0F4B81] transition-colors bg-white shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
              />
            </div>
          </div>

          <button 
            type="button"
            className="w-full bg-[#0F4B81] hover:bg-[#0A3359] text-white font-bold text-[15px] py-3.5 rounded-md mt-2 transition-colors shadow-sm outline-none flex items-center justify-center gap-2"
          >
            <ShieldAlert size={18} />
            Send Reset Link
          </button>
        </form>

        {/* Back to Login */}
        <Link 
          to="/login" 
          className="mt-8 flex items-center gap-2 text-[13px] font-bold text-gray-500 hover:text-[#0F4B81] transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Login
        </Link>

      </div>
    </div>
  );
};

export default Forgot;
