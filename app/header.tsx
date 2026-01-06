import React from "react";
import { UserIcon } from "lucide-react";
import { SearchIcon } from "lucide-react";
import { WorkflowIcon } from "lucide-react";

export default function Header() { 
    return (
        <div className="w-full py-5 px-5 h-16 bg-indigo-500 text-white font-sans text-lg font-semibold flex items-center fixed top-0"> 
           <div className="w-[25%]"> NGO Dashboard Logo </div>
            <div className="w-[40%] flex items-center"> 
<div className="relative w-full">
  <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-white" />

  <input
    type="search"
    className="w-full py-5 pl-14 pr-5 h-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Search a Contributor"
  />
</div>
            </div>
            <div className="w-[35%] text-right pr-10 flex items-center justify-end"> 
                <span className="mr-4"><WorkflowIcon className="w-6 h-6"/></span>
                <select className="bg-indigo-500 border-none outline-none"> 
                    <option> Current Project </option>
                    <option> Project 1 </option>
                    <option> Project 2 </option>
                </select>
                 <>
                <span className="mr-4 ml-8"><UserIcon className="w-6 h-6"/></span>
                User
                </>
            </div>
        </div>
    )
}