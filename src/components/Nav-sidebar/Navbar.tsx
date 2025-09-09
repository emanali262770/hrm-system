import React from "react";
import { Bell,  } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white px-6 shadow-md flex justify-between items-center py-3 w-full">
        <div className="flex items-center ">
         
        </div>

        <div className=" flex items-center gap-4 ">
          <Bell size={20} className="text-gray-600 " />
          <div className="users-Info">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
               
              </Avatar>
              <div className="flex flex-col">
                  <span className="text-gray-700 font-semibold">John Doe</span>
                    <span className="text-gray-500  text-[12px]">Admin</span>
              </div>
            
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
