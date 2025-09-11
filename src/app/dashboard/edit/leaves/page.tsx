"use client";
import React, { useState } from "react";
import { Pencil, Trash2, X } from "lucide-react";

type Leave = {
  leaveType: string;
  year: string;
  totalLeaves: string;
};

const LeavesPage = () => {
  const [leaves, setLeaves] = useState<Leave[]>([
    { leaveType: "Casual Leave", year: "2025", totalLeaves: "7" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<Leave>({
    leaveType: "",
    year: "",
    totalLeaves: "",
  });

  const openModal = () => {
    setFormData({ leaveType: "", year: "", totalLeaves: "" });
    setIsModalOpen(true);
  };

  const handleSave = () => {
    setLeaves([...leaves, formData]);
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Employee Allowed Leaves</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#0A0A23] text-white text-sm">
            <th className="px-4 py-2 text-left">Leave Type</th>
            <th className="px-4 py-2 text-left">Year</th>
            <th className="px-4 py-2 text-left">Total Leaves</th>
            <th className="px-4 py-2 w-[100px]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((row, i) => (
            <tr key={i} className="border">
              <td className="px-4 py-2">{row.leaveType}</td>
              <td className="px-4 py-2">{row.year}</td>
              <td className="px-4 py-2">{row.totalLeaves}</td>
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
              colSpan={4}
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

            <h3 className="text-lg font-semibold mb-5 border-b pb-2">
              Add Leave Data
            </h3>

            <div className="space-y-4">
              <input
                placeholder="Leave Type"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, leaveType: e.target.value })
                }
              />
              <input
                placeholder="Year"
                type="number"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, year: e.target.value })
                }
              />
              <input
                placeholder="Total Leaves"
                type="number"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, totalLeaves: e.target.value })
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
                className="px-5 py-2 rounded bg-[#0A0A23] text-white font-medium"
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

export default LeavesPage;
