
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { sampleSpaces, Space, SpaceCategory, categoryLabels } from "@/data/spaces";
import SpaceCard from "@/components/SpaceCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";
import Layout from "@/components/Layout";

const SpacesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredSpaces, setFilteredSpaces] = useState<Space[]>([]);
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedCategory, setSelectedCategory] = useState<SpaceCategory | "all">("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1500]);
  const [capacity, setCapacity] = useState<number>(1);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    filterSpaces();
  }, [searchQuery, selectedCategory, priceRange, capacity]);

  const filterSpaces = () => {
    let spaces = [...sampleSpaces];
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      spaces = spaces.filter(
        space => 
          space.name.toLowerCase().includes(query) || 
          space.description.toLowerCase().includes(query) ||
          space.location.toLowerCase().includes(query)
      );
    }
    
    // Filter by category
    if (selectedCategory !== "all") {
      spaces = spaces.filter(space => space.category === selectedCategory);
    }
    
    // Filter by price range
    spaces = spaces.filter(
      space => space.price >= priceRange[0] && space.price <= priceRange[1]
    );
    
    // Filter by capacity
    spaces = spaces.filter(space => space.capacity >= capacity);
    
    setFilteredSpaces(spaces);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    filterSpaces();
    
    // Update URL search params
    if (searchQuery) {
      searchParams.set("search", searchQuery);
    } else {
      searchParams.delete("search");
    }
    setSearchParams(searchParams);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setPriceRange([0, 1500]);
    setCapacity(1);
    searchParams.delete("search");
    setSearchParams(searchParams);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Find Your Perfect Space</h1>
          <p className="text-gray-600">
            Browse through our collection of spaces for any occasion
          </p>
        </div>
        
        {/* Search and filters */}
        <div className="mb-8">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3 mb-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                type="text"
                placeholder="Search spaces, locations..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button type="submit" className="bg-bookeasy-blue hover:bg-bookeasy-blue/90">
              Search
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={toggleFilters}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </form>
          
          {showFilters && (
            <div className="p-4 border rounded-md bg-white">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <Select
                    value={selectedCategory}
                    onValueChange={(value) => setSelectedCategory(value as SpaceCategory | "all")}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {Object.entries(categoryLabels).map(([value, label]) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <Slider
                    defaultValue={[0, 1500]}
                    max={1500}
                    step={10}
                    value={priceRange}
                    onValueChange={(value) => setPriceRange(value as [number, number])}
                    className="mt-4"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Minimum Capacity: {capacity} {capacity === 1 ? 'person' : 'people'}
                  </label>
                  <Slider
                    defaultValue={[1]}
                    min={1}
                    max={200}
                    step={1}
                    value={[capacity]}
                    onValueChange={(value) => setCapacity(value[0])}
                    className="mt-4"
                  />
                </div>
                
                <div className="flex items-end">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={clearFilters}
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600">
            Found {filteredSpaces.length} space{filteredSpaces.length !== 1 ? 's' : ''}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpaces.length > 0 ? (
            filteredSpaces.map((space) => (
              <SpaceCard key={space.id} space={space} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No spaces found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters or search query
              </p>
              <Button onClick={clearFilters} variant="outline">
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SpacesPage;
