"use client";
import { Pencil, Trash2 } from "lucide-react"; // or use any SVG icons you want

export default function DepartmentTableUI() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-4xl mx-auto mt-6">
      {/* Header */}
      <div className="flex items-center bg-[#171B77] p-4 rounded-t-lg">
        <input
          type="text"
          placeholder="Search departments..."
          className="flex-1 bg-[#24308F] text-white placeholder:text-white/70 px-4 py-2 rounded focus:outline-none"
          readOnly
        />
        <button className="ml-4 bg-white text-[#171B77] px-5 py-2 rounded shadow text-sm font-semibold hover:bg-gray-100">
          + Add New
        </button>
      </div>
      {/* Table */}
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 text-sm border-b">
            <th className="py-3 px-4 font-medium">DEPARTMENT NAME</th>
            <th className="py-3 px-4 font-medium">STATUS</th>
            <th className="py-3 px-4 font-medium">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {/* 5 static rows */}
          {[
            "Human Resources",
            "Information Technology",
            "Finance",
            "Marketing",
            "Operations",
          ].map((name, idx) => (
            <tr key={name} className="border-b last:border-0 hover:bg-gray-50">
              <td className="py-3 px-4">{name}</td>
              <td className="py-3 px-4">
                {/* UI-only switch toggle */}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                  />
                  <div className="w-11 h-6 bg-[black] rounded-full peer peer-checked:bg-[#171B77]"></div>
                  <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow transition-transform duration-200 peer-checked:translate-x-5"></div>
                </label>
              </td>
              <td className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <button className="p-2 text-[#171B77] hover:bg-gray-100 rounded">
                    <Pencil size={18} />
                  </button>
                  <button className="p-2 text-red-500 hover:bg-gray-100 rounded">
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Footer */}
      <div className="flex justify-between items-center p-4 text-sm text-gray-500 bg-white rounded-b-lg">
        <span>Showing 1 to 5 of 8 entries</span>
        <div className="flex items-center gap-2">
          <button className="px-2 py-1 rounded opacity-50">&lt;</button>
          <button className="px-2 py-1 rounded bg-[#171B77] text-white">
            1
          </button>
          <button className="px-2 py-1 rounded hover:bg-gray-100">2</button>
          <button className="px-2 py-1 rounded hover:bg-gray-100">&gt;</button>
        </div>
      </div>
    </div>
  );
}
