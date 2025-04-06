
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Animation effect on load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/spaces?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="relative h-[650px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="BookEasy hero"
        className="absolute inset-0 object-cover w-full h-full transform scale-105 animate-slowly-zoom"
      />
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className={`max-w-3xl text-white transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Find the perfect space, <span className="text-bookeasy-coral">book it easily</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl">
            Discover and book local spaces for meetings, events, workouts, and more. 
            BookEasy connects you with unique venues in your area.
          </p>
          
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-lg">
            <div className="relative flex-grow group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-bookeasy-blue transition-colors duration-300" />
              <Input 
                type="text"
                placeholder="Search for spaces, locations, or categories..."
                className="pl-10 h-12 bg-white/95 backdrop-blur-sm text-black rounded-full border-0 shadow-lg focus:ring-2 focus:ring-bookeasy-coral/50 transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button 
              type="submit" 
              className="h-12 px-6 bg-bookeasy-coral hover:bg-bookeasy-coral/90 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Search
            </Button>
          </form>

          <div className="mt-12 flex flex-wrap gap-3">
            <span className="text-white/80 text-sm mr-2">Popular searches:</span>
            {["Coworking", "Meeting rooms", "Event spaces", "Studios", "Fitness spaces"].map((term) => (
              <span 
                key={term} 
                className="text-sm bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full cursor-pointer transition-all duration-300"
                onClick={() => {
                  setSearchQuery(term);
                  navigate(`/spaces?search=${encodeURIComponent(term)}`);
                }}
              >
                {term}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-1 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
    </div>
  );
};

export default Hero;
