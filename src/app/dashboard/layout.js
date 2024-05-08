
import DashboardNavbar from "../components/dashboardComponents/dashboardnavbar";
import Sidebar from "../components/dashboardComponents/sidebar";



export default function DashLayout({ children }) {
  return (
        <div className="flex items-center gap-2 w-full h-full bg-[#002925]">
          {/* sidebar section start */}
          <div className="w-[8%] h-full">
            <Sidebar></Sidebar>
          </div>
          {/* sidebar section end */}
          <div className="w-[90%] h-full pl-4">
            {/* dashboardnavbar section start */}
            <DashboardNavbar></DashboardNavbar>
            {/* dashboardnavbar section end */}
            {/* body section start */}
            {children}
            {/* body section end */}
          </div>
        </div>

  );
}