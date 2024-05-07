import { Inter } from "next/font/google";
import Sidebar from "../dashboardComponents/sidebar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex items-center gap-2 w-full h-full">
          {/* sidebar section start */}
          <div className="w-[8%] h-[100%]">
            <Sidebar></Sidebar>
          </div>
          {/* sidebar section end */}
          <div className="w-[90%] h-[100%]">
           {/* body section start */}
            {children}
        {/* body section end */}
          </div>
        </div>
      </body>
    </html>
  );
}