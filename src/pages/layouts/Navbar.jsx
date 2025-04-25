import { NavLink, useNavigate } from "react-router";
import { Button } from "../../components/ui";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/authSlice";

const Navbar = () => {
  const { userId } = useSelector((state) => state.auth);  // Accessing auth state from Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Create the navigate function from React Router

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    navigate('/login');
  };

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900">
          Yummy<span className="text-red-600">.</span>
        </h1>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-6 items-center text-md font-medium text-gray-700">
          <NavLink to="/" className="hover:text-black transition-colors">Home</NavLink>
          <a href="#" className="hover:text-black transition-colors">About</a>
          <NavLink to="/restaurants" className="hover:text-black transition-colors">Restaurants</NavLink>
          <a href="#" className="hover:text-black transition-colors">Contact</a>
        </nav>

        <div className="block space-x-3">
        {userId ? (
          <Button size="md" shape="pill" onClick={handleLogout}>
            logout
          </Button>
        ) : (
          <>
            <NavLink to={"/choose-account"} className={() => ""}>
              <Button size="md" variant="primary" shape="pill">
                Signup
              </Button>
            </NavLink>
            <NavLink to={"/login"} className={() => ""}>
              <Button size="md" variant="outline" shape="pill">
                Login
              </Button>
            </NavLink>
          </>
        )}
        </div>

      </div>
    </header>
  );
};

export default Navbar;
