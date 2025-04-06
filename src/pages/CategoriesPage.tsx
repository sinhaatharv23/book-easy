
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SpaceCategory, categoryLabels, getSpacesByCategory, sampleSpaces } from "@/data/spaces";
import SpaceCard from "@/components/SpaceCard";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

const CategoriesPage = () => {
  const { category } = useParams<{ category?: SpaceCategory }>();
  const [spaces, setSpaces] = useState(sampleSpaces);
  const [activeCategory, setActiveCategory] = useState<SpaceCategory | null>(
    category as SpaceCategory || null
  );

  useEffect(() => {
    if (category && Object.keys(categoryLabels).includes(category)) {
      setSpaces(getSpacesByCategory(category as SpaceCategory));
      setActiveCategory(category as SpaceCategory);
    } else {
      setSpaces(sampleSpaces);
      setActiveCategory(null);
    }
  }, [category]);

  // All available categories
  const allCategories = Object.entries(categoryLabels).map(([key, label]) => ({
    key: key as SpaceCategory,
    label,
  }));

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {activeCategory ? (
          // Category-specific view
          <>
            <div className="mb-8">
              <Link to="/categories">
                <Button 
                  variant="outline" 
                  className="mb-4 flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  All Categories
                </Button>
              </Link>
              <h1 className="text-3xl font-bold">{categoryLabels[activeCategory]} Spaces</h1>
              <p className="text-gray-600 mt-2">
                Browse our selection of {categoryLabels[activeCategory].toLowerCase()} spaces
              </p>
            </div>

            {spaces.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {spaces.map((space) => (
                  <SpaceCard key={space.id} space={space} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">No spaces found</h3>
                <p className="text-gray-600 mb-4">
                  We couldn't find any spaces in this category
                </p>
                <Button asChild>
                  <Link to="/categories">View All Categories</Link>
                </Button>
              </div>
            )}
          </>
        ) : (
          // All categories view
          <>
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold mb-4">Explore Spaces by Category</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find the perfect space for your needs by browsing our diverse categories of venues and spaces available for booking
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCategories.map(({ key, label }) => (
                <Link 
                  key={key}
                  to={`/categories/${key}`}
                  className="group block"
                >
                  <div className="relative h-60 overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 z-10"></div>
                    <img 
                      src={sampleSpaces.find(space => space.category === key)?.images[0]} 
                      alt={label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                      <h3 className="text-2xl font-bold text-white">{label}</h3>
                      <p className="text-white/90 mt-2 group-hover:underline">
                        View all spaces →
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-600">
                      {sampleSpaces.filter(space => space.category === key).length} spaces available
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default CategoriesPage;
