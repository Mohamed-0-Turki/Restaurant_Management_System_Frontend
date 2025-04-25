import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import AdminSidebar from './AdminSidebar';

const RootLayout = () => {
  return (
    <div className="flex min-h-screen">

      <AdminSidebar />

      {/* Main Content Wrapper */}
      <div className="flex flex-col w-full">
        <Navbar />
        {/* Page Content + Footer */}
        <div className="w-full flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>

      <ToastContainer />
    </div>
  );
};

export default RootLayout