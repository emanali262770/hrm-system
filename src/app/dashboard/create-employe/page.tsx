"use client"
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    empCode: "",
    title: "Mr.",
    fullName: "",
    fatherName: "",
    cnic: "",
    dob: "",
    gender: "",
    image: null,
    contact: "",
    email: "",
    city: "",
    address: "",
    branch: "NMDC GRW",
    contract: "",
    department: "",
    jobTitle: "",
    joiningDate: "",
  });

  const handleChange = (e:any) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form Submitted! Check console for data.");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center ">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-7xl"
      >
        {/* Personal Information */}
        <h2 className="text-lg font-bold mb-4">Personal Information</h2>
        <div className="grid grid-cols-3 gap-4">
          <input
            name="empCode"
            type="text"
            placeholder="Old Emp. Code"
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option>Mr.</option>
            <option>Ms.</option>
            <option>Mrss.</option>
          </select>
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="fatherName"
            type="text"
            placeholder="Father Name"
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="cnic"
            type="text"
            placeholder="CNIC"
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="dob"
            type="date"
            onChange={handleChange}
            className="border p-2 rounded"
          />
         
          <select
            name="gender"
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="">--Select--</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <input
            name="image"
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        {/* Contact & Address */}
        <h2 className="text-lg font-bold mt-6 mb-4">Contact & Address</h2>
        <div className="grid grid-cols-3 gap-4">
          <input
            name="contact"
            type="text"
            placeholder="Contact No."
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <select
            name="city"
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="">--Select--</option>
            <option>Lahore</option>
            <option>Karachi</option>
            <option>Islamabad</option>
            <option>Gujranwala</option>
          </select>
          <input
            name="address"
            type="text"
            placeholder="Address"
            onChange={handleChange}
            className="col-span-3 border p-2 rounded"
          />
         
           <input
            name="address"
            type="text"
            placeholder="Address"
            onChange={handleChange}
            className="col-span-3 border p-2 rounded"
          />
        </div>

        {/* Appointment */}
        <h2 className="text-lg font-bold mt-6 mb-4">Appointment</h2>
        <div className="grid grid-cols-3 gap-4">
          <select
            name="branch"
            onChange={handleChange}
            className="border p-2 rounded"
            value={formData.branch}
          >
            <option>NMDC GRW</option>
            <option>LHR Branch</option>
            <option>KHI Branch</option>
          </select>
          <select
            name="contract"
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="">--Select--</option>
            <option>Permanent</option>
            <option>Contract</option>
          </select>
          <select
            name="department"
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="">--Select--</option>
            <option>IT</option>
            <option>HR</option>
            <option>Finance</option>
          </select>
          <select
            name="jobTitle"
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="">--Select--</option>
            <option>Manager</option>
            <option>Developer</option>
            <option>Officer</option>
          </select>
          <input
            name="joiningDate"
            type="date"
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Save
        </button>
      </form>
    </div>
  );
}
