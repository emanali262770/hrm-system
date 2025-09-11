import AppSidebar from "@/components/Nav-sidebar/AppSidebar"
import Navbar from "@/components/Nav-sidebar/Navbar"


const Dasboardlayout = ({children}:any) => {
  return (
   <div className="flex min-h-screen ">
          <AppSidebar />

          <main className="flex-1">
            <Navbar />
            {children}
          </main>
        </div>
  )
}

export default Dasboardlayout