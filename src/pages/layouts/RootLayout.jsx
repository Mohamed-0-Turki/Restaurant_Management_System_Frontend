import { ToastContainer } from 'react-toastify';
import { Outlet, ScrollRestoration } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import AdminSidebar from './AdminSidebar';
import ManagerSidebar from './ManagerSidebar';
import Chat from '../../components/ui/Chat';

const RootLayout = () => {
  const { role } = useSelector((state) => state.auth);  // Now inside a component


  return (
    <div className="flex min-h-screen">

      {role === "admin" && <AdminSidebar /> }
      {role === "manager" && <ManagerSidebar /> }

      {/* Main Content Wrapper */}
      <div className="flex flex-col w-full">
        <Navbar />
        {/* Page Content + Footer */}
        <div className="w-full flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
      <Chat />
      <ScrollRestoration />
      <ToastContainer />
    </div>
  );
};

export default RootLayout