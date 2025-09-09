'use client'
import React, { useEffect, useState } from 'react'
import {
  Home,
  Users,
  CalendarDays,
  DollarSign,
  BarChart,
  Briefcase,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react"

const menuItems = [
  { label: 'Dashboard', icon: Home, url: '/dashboard' },
  { label: 'Employees', icon: Users, url: '#' },
  { label: 'Attendance', icon: CalendarDays, url: '#' },
  { label: 'Payroll', icon: DollarSign, url: '#' },
  { label: 'Performance', icon: BarChart, url: '#' },
  { label: 'Recruitment', icon: Briefcase, url: '#' },
  { label: 'Settings', icon: Settings, url: '#' },
]

const bottomItems = [
  { label: 'Help', icon: HelpCircle, url: '#' },
  { label: 'Log Out', icon: LogOut, url: '#' },
]

const AppSidebar = () => {
  const [selectedPath, setSelectedPath] = useState<string>('')
  function selectedpath() {
   const pathname=window.location.pathname;
   setSelectedPath(pathname)
}
useEffect(()=>{
    selectedpath();
},[selectedPath])
  return (
    <aside className="w-64 min-h-screen  bg-[#0A0A23] text-white flex flex-col justify-between shadow-xl">
      {/* Top Section */}
      <div>
        <div className="px-6 py-6 text-2xl font-bold tracking-widest border-b border-[#1F1F3B]">
          HRM
        </div>
        <nav className="mt-4 px-4 space-y-1">
          {menuItems.map(({ label, icon: Icon, url }) => (
            <a
              key={label}
              href={url}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${selectedPath==url?'bg-[#1F1F3B] text-blue-400 border-blue-400 duration-300 border-r-4 transition-colors':'hover:bg-[#1F1F3B] hover:text-blue-400 hover:border-blue-400 duration-300 hover:border-r-4 transition-colors'} `}
            >
              <Icon size={18} className="shrink-0" />
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="px-4 pb-6">
        <div className="border-t border-[#1F1F3B] pt-4 space-y-2">
          {bottomItems.map(({ label, icon: Icon, url }) => (
            <a
              key={label}
              href={url}
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-[#1F1F3B] hover:text-blue-400 hover:border-blue-400 duration-300 hover:border-r-4 transition-colors"
            >
              <Icon size={18} className="shrink-0" />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default AppSidebar
