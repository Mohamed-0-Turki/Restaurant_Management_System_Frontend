import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    <div className="min-h-screen flex">

      {/* Main Content Wrapper */}
      <div className="flex flex-col w-full">
        <h1>navbar</h1>
        {/* Page Content + Footer */}
        <div className="w-full min-h-screen flex-grow">
          <Outlet />
        </div>
        <h1>footer</h1>
      </div>

      <ToastContainer />
    </div>
  );
};

export default RootLayout