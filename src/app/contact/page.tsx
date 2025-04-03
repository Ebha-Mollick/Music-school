import React from "react";
import { Meteors } from "@/components/ui/meteors";
function page() {
  return (
    <div className="min-h-screen bg-[#101524] py-12 pt-36">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">Contact Us</h1>
        <p className="text-center font-sans mt-8 font-light text-gray-400">
            We're here too help with any questions about our courses, programs, or <br />
            events. Reach out and let us know how we can assist you in your musical <br />
            journey.
        </p>
        <div className="max-w-md mx-auto p-4 bg-[#101524]  rounded-lg shadow-md mt-10">
            {/* <label className="block mb-2 text-sm font-medium text-gray-400">Email</label> */}
            <input type="email" placeholder="Enter your email" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
  
  
            <label className="block mt-6 mb-2 text-sm font-medium text-gray-700"></label>
            <textarea placeholder="Enter your message" className="w-full p-2 h-32 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>

            <button className="mt-4 w-full bg-[#429089] text-white py-2 rounded-md hover:bg-[#6fa29e]">Submit</button>
        </div>
        <Meteors number={60} />
    </div>
  )
}

export default page