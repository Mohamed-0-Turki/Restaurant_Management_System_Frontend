import { NavLink } from "react-router";
import { Button } from "../../components/ui";

const Navbar = () => {
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
          <a href="#" className="hover:text-black transition-colors">Menu</a>
          <a href="#" className="hover:text-black transition-colors">Events</a>
          <a href="#" className="hover:text-black transition-colors">Chefs</a>
          <a href="#" className="hover:text-black transition-colors">Gallery</a>
        </nav>

        {/* Call to Action */}
        <div className="hidden md:block space-x-3">
          <NavLink to={"/login"} className={() => ""}>
            <Button size="md" variant="outline" shape="pill" >
              Login
            </Button>
          </NavLink>
          <NavLink to={"/signup"} className={() => ""}>
            <Button size="md" variant="primary" shape="pill" >
              signup
            </Button>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
