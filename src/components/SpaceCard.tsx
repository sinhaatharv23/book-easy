
import { Link } from "react-router-dom";
import { Space } from "@/data/spaces";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { categoryLabels } from "@/data/spaces";
import { Card, CardContent } from "@/components/ui/card";

interface SpaceCardProps {
  space: Space;
}

const SpaceCard = ({ space }: SpaceCardProps) => {
  return (
    <Link to={`/spaces/${space.id}`}>
      <Card className="overflow-hidden space-card h-full">
        <div className="relative h-48 overflow-hidden">
          <img
            src={space.images[0]}
            alt={space.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <Badge className="absolute top-3 left-3 bg-bookeasy-coral text-white border-0">
            {categoryLabels[space.category]}
          </Badge>
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg line-clamp-1">{space.name}</h3>
            <div className="flex items-center gap-1 text-sm">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{space.rating}</span>
              <span className="text-gray-400">({space.reviewCount})</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-2 line-clamp-2">{space.location}</p>
          <p className="text-sm text-gray-700 line-clamp-2 mb-3">{space.description}</p>
          <div className="flex justify-between items-center">
            <p className="font-medium">
              <span className="text-bookeasy-blue">${space.price}</span>
              <span className="text-gray-500 text-sm"> / hour</span>
            </p>
            <span className="text-sm text-gray-600">Capacity: {space.capacity}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default SpaceCard;
