import React from "react";
import { assets } from "../assets/assets";
import { useNavigate,Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import { Circle, CirclePlus } from "lucide-react";
const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`w-60 xl:w-72 bg-white border-r border-gray-200 flex flex-col
         justify-between items-center max-sm:absolute top-0 bottom-0 z-20 ${
           sidebarOpen ? "translate-x-0" : "max-sm:-translate-x-full"
         } transition-all duration-300 ease-in-out`}
    >
      <div className="w-full ">
        <img
          onClick={() => navigate("/")}
          src={assets.logo}
          className="w-26 ml-7 my-2 cursor-pointer"
          alt=""
        />
        <hr className="border-gray-300 mb-8" />
        <MenuItems setSidebarOpen={setSidebarOpen} />
        <Link to='/create-post' className="flex items-center justify-center gap-2 py-2.5 mt-6 mx-6 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600
        hover:from-indigo-700 hover:to-purple-800 active:scale-95 transition text-white cursor-pointer   ">
         <CirclePlus className="w-5 h-5"/>
         Create Post
        </Link>
      </div>

         <div className="flex ga-2 items-center cursor-pointer">
          <img src={assets.sample_profile} alt="" className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-sm font-medium">John Warren</p>
            <p className="text-xs text-gray-500">john_warren</p>
          </div>
         </div>
    </div>
  );
};

export default Sidebar;
