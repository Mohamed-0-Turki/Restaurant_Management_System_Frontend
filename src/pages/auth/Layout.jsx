import { Outlet } from "react-router";
import { reservationImage } from "../../assets";

const Layout = () => {

  return (
    <div className="flex min-h-screen">
    {/* Left image */}
    <div className="hidden md:block md:w-1/2">
      <img
        src={reservationImage}
        alt="Restaurant setup"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Right form */}
    <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 px-6 py-12">
      <Outlet />
    </div>
  </div>
  )
}

export default Layout
