'use client'
import React, { useState } from 'react'
import { Search, Users, HelpCircle, LogOut, ChevronDown, ChevronUp } from "lucide-react"
import { Input } from "../ui/input"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { 
    label: 'Employees', 
    icon: Users, 
    url: '#',
    children: [
      { label: 'Create Employee', url: '/employees/add' },
      { label: 'Employee List', url: '/employees/list' },
      { label: 'Attendance', url: '/employees/attendance' },
    ]
  },
]

const bottomItems = [
  { label: 'Help', icon: HelpCircle, url: '#' },
  { label: 'Log Out', icon: LogOut, url: '#' },
]

const AppSidebar = () => {
  const pathname = usePathname()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <aside className="w-64 min-h-screen bg-[#0A0A23] text-white flex flex-col justify-between shadow-xl rounded-tr-3xl rounded-br-3xl">
      <div className="px-4">
        {/* HRM Header */}
        <div className="px-2 py-5 text-2xl font-bold tracking-widest border-b border-[#1F1F3B] mt-4">
          HRM
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 border-[1px] bg-gray-100 rounded-md px-3 w-full py-1 mt-3">
          <Search size={15} className="text-gray-500 " />
          <Input
            placeholder="Search"
            className="w-full border-none outline-none bg-transparent text-black"
          />
        </div>

        {/* Main Menu */}
        <nav className="mt-4 space-y-1">
          {menuItems.map(({ label, icon: Icon, url, children }) => (
            <div key={label}>
              <button
                onClick={() => setOpenDropdown(openDropdown === label ? null : label)}
                className={`w-full flex items-center justify-between gap-3 px-3 py-2 rounded-md text-sm cursor-pointer
                  ${pathname === url ? 'bg-[#1F1F3B] text-blue-400 border-blue-400 border-r-4' 
                  : 'hover:bg-[#1F1F3B] hover:text-blue-400 hover:border-blue-400 hover:border-r-4'} 
                  transition-all duration-300`}
              >
                <span className="flex items-center gap-3">
                  <Icon size={18} className="shrink-0" />
                  {label}
                </span>
                {children && (
                  openDropdown === label ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                )}
              </button>

              {/* Sub-menu */}
              {children && openDropdown === label && (
                <div className="ml-8 mt-1 space-y-1 transition-all duration-300">
                  {children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.url}
                      className={`block px-3 py-2 text-sm rounded-md transition-colors cursor-pointer
                        ${pathname === child.url ? 'bg-[#1F1F3B] text-blue-400 border-blue-400 border-r-4' 
                        : 'hover:bg-[#1F1F3B] hover:text-blue-400'}`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="px-4 pb-6">
        <div className="border-t border-[#1F1F3B] pt-4 space-y-2">
          {bottomItems.map(({ label, icon: Icon, url }) => (
            <Link
              key={label}
              href={url}
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-[#1F1F3B] hover:text-blue-400 hover:border-blue-400 duration-300 hover:border-r-4 transition-colors cursor-pointer"
            >
              <Icon size={17} className="shrink-0" />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default AppSidebar
