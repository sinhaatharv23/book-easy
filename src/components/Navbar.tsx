import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useUser } from "@/lib/useUser";
import { supabase } from "@/lib/supabase";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const user = useUser();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname.startsWith(path) ? "text-bookeasy-blue font-medium" : "text-gray-700";
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-white shadow-sm py-3"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-bookeasy-blue font-heading">
              Book<span className="text-bookeasy-coral">Easy</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/spaces" className={`${isActive('/spaces')} hover:text-bookeasy-blue transition-colors relative after:absolute after:w-full after:h-0.5 after:bg-bookeasy-blue after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-bottom-left pb-1`}>
            Explore Spaces
          </Link>
          <Link to="/categories" className={`${isActive('/categories')} hover:text-bookeasy-blue transition-colors relative after:absolute after:w-full after:h-0.5 after:bg-bookeasy-blue after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-bottom-left pb-1`}>
            Categories
          </Link>
          <Link to="/about" className={`${isActive('/about')} hover:text-bookeasy-blue transition-colors relative after:absolute after:w-full after:h-0.5 after:bg-bookeasy-blue after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-bottom-left pb-1`}>
            About Us
          </Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="icon" className="rounded-full hover:bg-gray-100 transition-colors">
            <Search className="h-5 w-5" />
          </Button>
          {user ? (
            <>
              <span className="text-sm text-gray-700">{user.email}</span>
              <Button onClick={handleLogout} className="bg-red-500 text-white rounded-full px-4 py-2 hover:bg-red-600 transition-colors">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/signup">
                <Button variant="ghost" className="rounded-full hover:bg-gray-100 transition-colors">
                  Sign Up
                </Button>
              </Link>
              <Link to="/login">
                <Button className="bg-bookeasy-blue hover:bg-bookeasy-blue/90 rounded-full transition-colors duration-300 btn-hover-effect">
                  Log In
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden p-1"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden shadow-md animate-in slide-in-from-top">
          <div className="flex flex-col space-y-4 px-4 py-4 bg-white">
            <Link to="/spaces" className={`${isActive('/spaces')} hover:text-bookeasy-blue transition-colors py-2 pl-2 border-l-2 ${isActive('/spaces') ? 'border-bookeasy-blue' : 'border-transparent'}`} onClick={() => setIsMenuOpen(false)}>
              Explore Spaces
            </Link>
            <Link to="/categories" className={`${isActive('/categories')} hover:text-bookeasy-blue transition-colors py-2 pl-2 border-l-2 ${isActive('/categories') ? 'border-bookeasy-blue' : 'border-transparent'}`} onClick={() => setIsMenuOpen(false)}>
              Categories
            </Link>
            <Link to="/about" className={`${isActive('/about')} hover:text-bookeasy-blue transition-colors py-2 pl-2 border-l-2 ${isActive('/about') ? 'border-bookeasy-blue' : 'border-transparent'}`} onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-700">Search</span>
              <Button variant="outline" size="icon" className="rounded-full">
                <Search className="h-5 w-5" />
              </Button>
            </div>
            <div className="pt-2 border-t border-gray-100">
              {user ? (
                <Button onClick={handleLogout} className="w-full bg-red-500 text-white rounded-full py-2 hover:bg-red-600">
                  Logout
                </Button>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)} className="w-full block mb-3">
                    <Button className="bg-bookeasy-blue hover:bg-bookeasy-blue/90 w-full rounded-full">
                      Log In
                    </Button>
                  </Link>
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="w-full block">
                    <Button variant="outline" className="w-full rounded-full">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;