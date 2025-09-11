import Image from "next/image";
import React from "react";

const EditSidebar = () => {
  return (
    <div className="w-[250px] bg-white shadow-md border-t-[4px] border-[#0A0A23] rounded-md p-4 text-center">
      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <Image
          src={'/Images/image.png'} 
          width={112}
          height={112}
          alt="Profile"
          className="h-28 w-28 rounded-full object-cover border"
        />
      </div>

      {/* Name + Emp Code */}
      <h2 className="text-lg text-[#121212] font-semibold">Haider Murad</h2>
      <p className="text-sm text-gray-500">Emp. Code: 1001</p>

      {/* Divider */}
      <hr className="my-4" />

      {/* Contact Info */}
      <div className="space-y-3 text-left text-sm">
        <div className="border-b border-gray-200 pb-2">
          <p className="font-medium text-[14px] text-[#121212]">Contact</p>
          <p className="text-gray-800">3434343434</p>
        </div>

        <div className="border-b border-gray-200 pb-2">
          <p className="font-medium text-[14px] text-[#121212]">Email</p>
          <p className="text-gray-800">test@gmail.com</p>
        </div>

        <div>
          <p className="font-medium text-[14px] text-[#121212]">Status</p>
          <p className="text-green-600 font-medium">Working</p>
        </div>
      </div>
    </div>
  );
};

export default EditSidebar;
