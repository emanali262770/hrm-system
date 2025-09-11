"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "Profile", href: "/dashboard/edit/profile" },
  { name: "Contact & Address", href: "/dashboard/edit/contact-detail" },
  { name: "Education", href: "/dashboard/edit/education" },
  { name: "Employment History", href: "/dashboard/edit/employment" },
  { name: "Appointments", href: "/dashboard/edit/appointment" },
  { name: "Documents", href: "/dashboard/edit/documents" },
  { name: "Leaves", href: "/dashboard/edit/leaves" },
];

export default function EditTabsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="bg-white shadow-md rounded-md p-6">
      {/* Top Tabs */}
      <div className="border-b mb-6 flex space-x-6 overflow-x-auto">
        {tabs.map((tab) => {
          const active = pathname === tab.href;
          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={`px-3 py-2 text-sm font-medium ${
                active
                  ? "border-b-2 border-[#0A0A23] text-[#0A0A23]"
                  : "text-gray-500 hover:text-[#0A0A23]"
              }`}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>

      {/* Page Content */}
      <div>{children}</div>
    </div>
  );
}
