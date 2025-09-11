export default function ProfilePage() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Old Emp. Code</label>
          <input type="text" className="w-full border rounded-md px-3 py-2 text-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Title *</label>
          <select className="w-full border rounded-md px-3 py-2 text-sm">
            <option>Mr.</option>
            <option>Ms.</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name *</label>
          <input type="text" defaultValue="Haider Murad" className="w-full border rounded-md px-3 py-2 text-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Father Name *</label>
          <input type="text" className="w-full border rounded-md px-3 py-2 text-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">CNIC *</label>
          <input type="text" defaultValue="35243-4343434-3" className="w-full border rounded-md px-3 py-2 text-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date of Birth *</label>
          <input type="date" defaultValue="2025-04-21" className="w-full border rounded-md px-3 py-2 text-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date of Retirement *</label>
          <input type="date" defaultValue="2085-04-20" className="w-full border rounded-md px-3 py-2 text-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Gender *</label>
          <select className="w-full border rounded-md px-3 py-2 text-sm">
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Image *</label>
          <input type="file" className="w-full border rounded-md px-3 py-2 text-sm" />
          <p className="text-xs text-gray-500 mt-1">Max size is 500kb & Dimensions (200x200)</p>
        </div>
      </div>

      {/* Other Information */}
      <h2 className="text-lg font-semibold mb-4">Other Information</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Religion</label>
          <select className="w-full border rounded-md px-3 py-2 text-sm">
            <option>Islam</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Nationality</label>
          <select className="w-full border rounded-md px-3 py-2 text-sm">
            <option>Pakistan</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Marital Status</label>
          <select className="w-full border rounded-md px-3 py-2 text-sm">
            <option>--Select--</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Blood Group</label>
          <select className="w-full border rounded-md px-3 py-2 text-sm">
            <option>--Select--</option>
          </select>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Back to List</button>
        <div className="space-x-3">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md">Clear</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md">Save Profile</button>
        </div>
      </div>
   
    </div>
  );
}
