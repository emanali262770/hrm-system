"use client";
import React, { useState } from "react";
import { Pencil, Trash2, X } from "lucide-react";

type ContactInfo = {
  type: string;
  contact: string;
  email: string;
};

type AddressInfo = {
  type: string;
  city: string;
  address: string;
  zip: string;
  isPostal: boolean;
};

type EmergencyInfo = {
  relation: string;
  name: string;
  type: string;
  contact: string;
};

const Contactpage = () => {
  const [contactData, setContactData] = useState<ContactInfo[]>([
    { type: "Personal", contact: "3434343434", email: "test@gmail.com" },
  ]);

  const [addressData, setAddressData] = useState<AddressInfo[]>([
    {
      type: "Current",
      city: "Lahore",
      address: "Muslim Town Lahore",
      zip: "54000",
      isPostal: true,
    },
  ]);

  const [emergencyData, setEmergencyData] = useState<EmergencyInfo[]>([]);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTable, setActiveTable] = useState<
    "contact" | "address" | "emergency" | null
  >(null);
  const [formData, setFormData] = useState<any>({});

  const openModal = (table: "contact" | "address" | "emergency") => {
    setActiveTable(table);
    setFormData({});
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (activeTable === "contact") {
      setContactData([...contactData, formData]);
    } else if (activeTable === "address") {
      setAddressData([...addressData, { ...formData, isPostal: !!formData.isPostal }]);
    } else if (activeTable === "emergency") {
      setEmergencyData([...emergencyData, formData]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-8">
      {/* Contact Information */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#0A0A23] text-white text-sm">
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Contact</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 w-[100px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contactData.map((row, i) => (
              <tr key={i} className="border">
                <td className="px-4 py-2">{row.type}</td>
                <td className="px-4 py-2">{row.contact}</td>
                <td className="px-4 py-2">{row.email}</td>
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
                onClick={() => openModal("contact")}
                className="bg-gray-200 font-semibold text-center py-2 text-sm cursor-pointer"
              >
                Add New
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Address */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Address</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#0A0A23] text-white text-sm">
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">City</th>
              <th className="px-4 py-2 text-left">Address</th>
              <th className="px-4 py-2 text-left">Zip Code</th>
              <th className="px-4 py-2 text-left">Is Postal</th>
              <th className="px-4 py-2 w-[100px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {addressData.map((row, i) => (
              <tr key={i} className="border">
                <td className="px-4 py-2">{row.type}</td>
                <td className="px-4 py-2">{row.city}</td>
                <td className="px-4 py-2">{row.address}</td>
                <td className="px-4 py-2">{row.zip}</td>
                <td className="px-4 py-2">
                  <input type="checkbox" checked={row.isPostal} readOnly />
                </td>
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
                colSpan={6}
                onClick={() => openModal("address")}
                className="bg-gray-200 font-semibold text-center py-2 text-sm cursor-pointer"
              >
                Add New
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Emergency Contact */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Emergency Contact</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#0A0A23] text-white text-sm">
              <th className="px-4 py-2 text-left">Relation</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Contact No</th>
              <th className="px-4 py-2 w-[100px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {emergencyData.map((row, i) => (
              <tr key={i} className="border">
                <td className="px-4 py-2">{row.relation}</td>
                <td className="px-4 py-2">{row.name}</td>
                <td className="px-4 py-2">{row.type}</td>
                <td className="px-4 py-2">{row.contact}</td>
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
                onClick={() => openModal("emergency")}
                className="bg-gray-200 font-semibold text-center py-2 text-sm cursor-pointer"
              >
                Add New
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/5 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md w-[400px] relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              <X size={20} />
            </button>

            <h3 className="text-lg font-bold mb-4">Add New Data</h3>

            <div className="space-y-3">
              {activeTable === "contact" && (
                <>
                  <input
                    placeholder="Type"
                    className="w-full border px-3 py-2 rounded"
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                  />
                  <input
                    placeholder="Contact"
                    className="w-full border px-3 py-2 rounded"
                    onChange={(e) =>
                      setFormData({ ...formData, contact: e.target.value })
                    }
                  />
                  <input
                    placeholder="Email"
                    className="w-full border px-3 py-2 rounded"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </>
              )}

              {activeTable === "address" && (
                <>
                  <input
                    placeholder="Type"
                    className="w-full border px-3 py-2 rounded"
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                  />
                  <input
                    placeholder="City"
                    className="w-full border px-3 py-2 rounded"
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                  />
                  <input
                    placeholder="Address"
                    className="w-full border px-3 py-2 rounded"
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                  />
                  <input
                    placeholder="Zip Code"
                    className="w-full border px-3 py-2 rounded"
                    onChange={(e) =>
                      setFormData({ ...formData, zip: e.target.value })
                    }
                  />
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        setFormData({ ...formData, isPostal: e.target.checked })
                      }
                    />
                    <span>Is Postal</span>
                  </label>
                </>
              )}

              {activeTable === "emergency" && (
                <>
                  <input
                    placeholder="Relation"
                    className="w-full border px-3 py-2 rounded"
                    onChange={(e) =>
                      setFormData({ ...formData, relation: e.target.value })
                    }
                  />
                  <input
                    placeholder="Name"
                    className="w-full border px-3 py-2 rounded"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <input
                    placeholder="Type"
                    className="w-full border px-3 py-2 rounded"
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                  />
                  <input
                    placeholder="Contact No"
                    className="w-full border px-3 py-2 rounded"
                    onChange={(e) =>
                      setFormData({ ...formData, contact: e.target.value })
                    }
                  />
                </>
              )}
            </div>

            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded bg-[#0A0A23] text-white"
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

export default Contactpage;
