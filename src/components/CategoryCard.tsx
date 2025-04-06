
import { Link } from "react-router-dom";
import { SpaceCategory, categoryLabels } from "@/data/spaces";

interface CategoryCardProps {
  category: SpaceCategory;
  imageUrl: string;
}

const CategoryCard = ({ category, imageUrl }: CategoryCardProps) => {
  return (
    <Link 
      to={`/categories/${category}`}
      className="group relative block h-56 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 z-10"></div>
      <img 
        src={imageUrl} 
        alt={categoryLabels[category]}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 p-4 z-20 w-full">
        <h3 className="text-xl font-semibold text-white">{categoryLabels[category]}</h3>
        <p className="text-white/80 text-sm mt-1">Browse all {categoryLabels[category].toLowerCase()}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
