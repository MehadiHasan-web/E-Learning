
import DashboardNavbar from "../components/dashboardComponents/dashboardnavbar";
import Sidebar from "../components/dashboardComponents/sidebar";



export default function DashLayout({ children }) {
  return (
        <div className="lg:flex lg:items-center gap-5 w-full h-full bg-[#002925]">
          {/* sidebar section start */}
          <div className="hidden lg:block lg:w-[8%] h-screen bg-[#0D3431] py-5">
            <Sidebar></Sidebar>
          </div>
          {/* sidebar section end */}
          <div className="w-full lg:w-[90%] h-full">
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