"use client";
import React, { useState } from "react";
import { Pencil, Trash2, X } from "lucide-react";

type Appointment = {
  contractType: string;
  department: string;
  jobTitle: string;
  status: string;
};

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      contractType: "Permanent",
      department: "HR",
      jobTitle: "Director Operations",
      status: "Working",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<Appointment>({
    contractType: "",
    department: "",
    jobTitle: "",
    status: "",
  });

  const openModal = () => {
    setFormData({ contractType: "", department: "", jobTitle: "", status: "" });
    setIsModalOpen(true);
  };

  const handleSave = () => {
    setAppointments([...appointments, formData]);
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Appointment History</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#0A0A23] text-white text-sm">
            <th className="px-4 py-2 text-left">Contract Type</th>
            <th className="px-4 py-2 text-left">Department</th>
            <th className="px-4 py-2 text-left">Job Title</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 w-[100px]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((row, i) => (
            <tr key={i} className="border">
              <td className="px-4 py-2">
                {row.contractType}{" "}
               
              </td>
              <td className="px-4 py-2">{row.department}</td>
              <td className="px-4 py-2">{row.jobTitle}</td>
              <td className="px-4 py-2">{row.status}</td>
              <td className="px-4 py-2 flex space-x-2">
                <button className="p-1 bg-teal-500 text-white rounded">
                  <Pencil size={16} />
                </button>
                <button className="p-1 bg-red-500 text-white rounded">
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td
              colSpan={5}
              onClick={openModal}
              className="bg-gray-200 font-semibold text-center py-2 text-sm cursor-pointer"
            >
              Add New
            </td>
          </tr>
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/5 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[420px] relative">
            {/* Close */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>

            <h3 className="text-lg font-bold mb-5 border-b pb-2">
              Add Appointment Data
            </h3>

            <div className="space-y-4">
              <input
                placeholder="Contract Type"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, contractType: e.target.value })
                }
              />
              <input
                placeholder="Department"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, department: e.target.value })
                }
              />
              <input
                placeholder="Job Title"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, jobTitle: e.target.value })
                }
              />
              <input
                placeholder="Status"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
              />
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-5 py-2 rounded bg-[#0A0A23] text-white  font-medium"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentsPage;
