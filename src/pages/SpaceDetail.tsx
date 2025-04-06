
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getSpaceById, categoryLabels } from "@/data/spaces";
import { format } from "date-fns";
import { createBooking } from "@/data/bookings";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Star,
  MapPin,
  Users,
  Calendar as CalendarIcon,
  Clock,
  Wifi,
  Check,
} from "lucide-react";
import Layout from "@/components/Layout";

const SpaceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const space = getSpaceById(id || "");

  const [date, setDate] = useState<Date | undefined>(undefined);
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [guests, setGuests] = useState<string>("1");

  if (!space) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Space not found</h2>
          <p className="mb-6">The space you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate("/spaces")}>Browse all spaces</Button>
        </div>
      </Layout>
    );
  }

  const handleBooking = () => {
    if (!date || !startTime || !endTime) {
      toast({
        title: "Missing information",
        description: "Please select a date and time for your booking.",
        variant: "destructive",
      });
      return;
    }

    const formattedDate = format(date, "yyyy-MM-dd");
    const guestCount = parseInt(guests);
    
    // Calculate hours difference for price
    const startHour = parseInt(startTime.split(":")[0]);
    const endHour = parseInt(endTime.split(":")[0]);
    const hoursDiff = endHour - startHour;
    const totalPrice = space.price * hoursDiff;

    createBooking({
      spaceId: space.id,
      userId: "u1", // would come from auth in a real app
      date: formattedDate,
      startTime,
      endTime,
      totalPrice,
      status: "pending",
      guestCount,
    });

    toast({
      title: "Booking successful!",
      description: `You have booked ${space.name} for ${formattedDate} from ${startTime} to ${endTime}.`,
    });

    // In a real app, we would redirect to a booking confirmation page
    navigate("/");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Space details */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-2">{space.name}</h1>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{space.rating}</span>
                <span className="text-gray-500">({space.reviewCount} reviews)</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center gap-1 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>{space.location}</span>
              </div>
            </div>

            {/* Image gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {space.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${space.name} - image ${index + 1}`}
                  className="rounded-lg w-full h-60 object-cover"
                />
              ))}
            </div>

            <Separator className="my-8" />

            {/* Space description */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">About this space</h2>
              <p className="text-gray-700 mb-4">{space.description}</p>
              <div className="flex items-center gap-2 text-gray-700">
                <Users className="h-5 w-5" />
                <span>Maximum capacity: {space.capacity} people</span>
              </div>
            </div>

            <Separator className="my-8" />

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {space.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-bookeasy-blue" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Booking form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-2xl font-bold text-bookeasy-blue">${space.price}</span>
                    <span className="text-gray-500"> / hour</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{space.rating}</span>
                  </div>
                </div>

                <Separator className="mb-6" />

                <div className="space-y-4 mb-6">
                  {/* Date picker */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Time pickers */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Start Time</label>
                      <Select
                        value={startTime}
                        onValueChange={setStartTime}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Start" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 12 }).map((_, i) => (
                            <SelectItem key={i} value={`${i + 9}:00`}>
                              {`${i + 9}:00`}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">End Time</label>
                      <Select
                        value={endTime}
                        onValueChange={setEndTime}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="End" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 12 }).map((_, i) => (
                            <SelectItem key={i} value={`${i + 10}:00`}>
                              {`${i + 10}:00`}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Guests</label>
                    <Select
                      value={guests}
                      onValueChange={setGuests}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: Math.min(10, space.capacity) }).map((_, i) => (
                          <SelectItem key={i} value={(i + 1).toString()}>
                            {i + 1} {i === 0 ? "guest" : "guests"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  className="w-full bg-bookeasy-coral hover:bg-bookeasy-coral/90" 
                  size="lg"
                  onClick={handleBooking}
                >
                  Book Now
                </Button>

                <p className="text-center text-xs text-gray-500 mt-4">
                  You won't be charged yet
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SpaceDetail;
