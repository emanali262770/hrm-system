import EditSidebar from "@/components/EditComponents/EditSidebar";
import EditTabsLayout from "./EditTabsLayout";

export default function EditLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      {/* Left Sidebar */}
      <div className="w-[250px] px-6 py-10">
        <EditSidebar />
      </div>

      {/* Right Content with tabs */}
      <div className="flex-1 px-9 py-10">
        <EditTabsLayout>{children}</EditTabsLayout>
      </div>
    </div>
  );
}
