"use client";
import React from "react";
import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

const page = () => {
  const router=useRouter()
  const users = [
    {
      id: "3",
      name: "Charlie123",
      father: "taib",
      cnic: "3535353535353",
      dob: "nothing",
      Active: "on",
      email: "charlie@test.com",
      address: {
        city: "Islamabad",
        country: "Pakistan",
      },
    },

    {
      id: "5",
      name: "Eve",
      father: "taib",
      cnic: "3535353535353",
      dob: "nothing",
      Active: "on",
      email: "eve@example.com",
      address: {
        city: "Multan",
        country: "Pakistan",
      },
    },
    {
      id: "6",
      name: "Fahad",
      father: "taib",
      cnic: "3535353535353",
      dob: "nothing",
      Active: "on",
      email: "fahad@example.com",
      address: {
        city: "Peshawar",
        country: "Pakistan",
      },
    },
    {
      id: "7",
      name: "Gulzar",
      father: "taib",
      cnic: "3535353535353",
      dob: "nothing",
      Active: "on",
      email: "gulzar@example.com",
      address: {
        city: "Quetta",
        country: "Pakistan",
      },
    },
    {
      id: "8",
      name: "Hina",
      father: "taib",
      cnic: "3535353535353",
      dob: "nothing",
      Active: "on",
      email: "hina@example.com",
      address: {
        city: "Sialkot",
        country: "Pakistan",
      },
    },
    {
      id: "9",
      name: "Imran",
      father: "taib",
      cnic: "3535353535353",
      dob: "nothing",
      Active: "on",
      email: "imran@example.com",
      address: {
        city: "Hyderabad",
        country: "Pakistan",
      },
    },
    {
      id: "10",
      name: "Junaid",
      father: "taib",
      cnic: "3535353535353",
      dob: "nothing",
      Active: "on",
      email: "junaid@example.com",
      address: {
        city: "Rawalpindi",
        country: "Pakistan",
      },
    },
    {
      id: "7046",
      name: "Taib Butt",
      father: "taib",
      cnic: "3535353535353",
      dob: "nothing",
      Active: "on",
      email: "Nidarashid@gmail.com",
      phone: "03427280782",
    },
    {
      id: "eb21",
      name: "Taib Butt",
      father: "taib",
      cnic: "3535353535353",
      dob: "nothing",
      Active: "on",
      email: "Nidarashid@gmail.com",
      phone: "03427280782",
    },
  ];
function handleNavigateToEdit() {

router.push('/dashboard/edit/profile')
}
  return (
    <div className="flex flex-col bg-[#F5F5F5] px-6 py-4 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-left">
        Employee List
      </h1>

      <div className="overflow-x-auto">
        <div className="w-full   border-gray-200 shadow-lg p-6">
          <table className="w-full border-collapse rounded-lg">
            <thead>
              <tr className="bg-[#0A0A23] text-white">
                <th className="px-4 py-3 text-left text-sm font-medium">ID</th>
                <th className="px-4 py-3 text-left text-sm font-medium">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium">
                  Father Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium">
                  CNIC
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium">DOB</th>
                <th className="px-4 py-3 text-left text-sm font-medium">
                  Working Status
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((d, i) => (
                <tr key={i} className="text-black transition">
                  <td className="px-4 py-3 text-sm border border-blue-700">
                    {d.id}
                  </td>
                  <td className="px-4 py-3 text-sm border border-blue-700 font-medium">
                    {d.name}
                  </td>
                  <td className="px-4 py-3 text-sm border border-blue-700">
                    {d.father}
                  </td>
                  <td className="px-4 py-3 text-sm border border-blue-700">
                    {d.cnic}
                  </td>
                  <td className="px-4 py-3 text-sm border border-blue-700">
                    {d.dob}
                  </td>

                  {/* Radix Select Dropdown */}
                  <td className="px-4 py-3 border   border-blue-900">
                    <Select.Root defaultValue={"Active"}>
                      <Select.Trigger className="inline-flex items-center justify-between w-[150px] border border-blue-500 bg-white rounded-lg px-3 py-1.5 text-sm text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400">
                        <Select.Value />
                        <ChevronDown className="h-4 w-4 opacity-70" />
                      </Select.Trigger>

                      <Select.Content
                        className="bg-white rounded-md shadow-lg border w-full border-gray-200 z-50 relative"
                        
                      >
                        <Select.Viewport className="p-2">
                          <Select.Item
                            value="Active"
                            className="flex items-center px-2 py-1.5 text-sm text-gray-800 hover:bg-blue-100 rounded-md cursor-pointer"
                          >
                            <Select.ItemText>Active</Select.ItemText>
                            <Select.ItemIndicator className="ml-auto">
                              <Check className="h-4 w-4 text-blue-600" />
                            </Select.ItemIndicator>
                          </Select.Item>

                          <Select.Item
                            value="On Leave"
                            className="flex items-center px-2 py-1.5 text-sm text-gray-800 hover:bg-blue-100 rounded-md cursor-pointer"
                          >
                            <Select.ItemText>On Leave</Select.ItemText>
                            <Select.ItemIndicator className="ml-auto">
                              <Check className="h-4 w-4 text-blue-600" />
                            </Select.ItemIndicator>
                          </Select.Item>

                          <Select.Item
                            value="Resigned"
                            className="flex items-center px-2 py-1.5 text-sm text-gray-800 hover:bg-blue-100 rounded-md cursor-pointer"
                          >
                            <Select.ItemText>Resigned</Select.ItemText>
                            <Select.ItemIndicator className="ml-auto">
                              <Check className="h-4 w-4 text-blue-600" />
                            </Select.ItemIndicator>
                          </Select.Item>

                          <Select.Item
                            value="Terminated"
                            className="flex items-center px-2 py-1.5 text-sm text-gray-800 hover:bg-blue-100 rounded-md cursor-pointer"
                          >
                            <Select.ItemText>Terminated</Select.ItemText>
                            <Select.ItemIndicator className="ml-auto">
                              <Check className="h-4 w-4 text-blue-600" />
                            </Select.ItemIndicator>
                          </Select.Item>
                        </Select.Viewport>
                      </Select.Content>
                    </Select.Root>
                  </td>

                  <td className="px-4 py-3 border border-blue-700">
                    <button onClick={handleNavigateToEdit} className="bg-blue-900 hover:bg-indigo-600 text-white text-sm px-4 py-1.5 rounded-lg shadow transition">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
