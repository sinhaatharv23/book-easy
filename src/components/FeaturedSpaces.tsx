
import SpaceCard from "./SpaceCard";
import { getFeaturedSpaces } from "@/data/spaces";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedSpaces = () => {
  const featuredSpaces = getFeaturedSpaces();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Spaces</h2>
            <p className="text-gray-600 mt-2">Discover some of our highest-rated spaces</p>
          </div>
          <Link to="/spaces">
            <Button variant="outline" className="flex items-center gap-2">
              View All <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSpaces.map((space) => (
            <SpaceCard key={space.id} space={space} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpaces;
