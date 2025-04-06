import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import TanayImg from "@/assets/Tanay.jpg";
import RajaImg from "@/assets/Raja.jpg";
import AtharvaImg from "@/assets/Atharva.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-bookeasy-blue text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to BookEasy</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Your go-to platform for finding and booking the best spaces in town — effortlessly and instantly.
          </p>
        </div>
      </section>

      {/* About Mission Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-bookeasy-blue mb-4">Why We Exist</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At BookEasy, we believe that finding the perfect space for your meeting, event, or class should be as easy as booking a ride.
              We’re on a mission to simplify venue discovery and help communities thrive by utilizing underused spaces.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
            alt="People meeting in a modern workspace"
            className="rounded-2xl shadow-md"
          />
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Meet Our Team</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[ 
              { name: "Tanay", role: "Frontend Developer", img: TanayImg },
              { name: "Raja", role: "UI/UX Designer", img: RajaImg },
              { name: "Atharva", role: "Backend & APIs", img: AtharvaImg },
            ].map((member) => (
              <div key={member.name} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
                <img src={member.img} alt={member.name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
                <div className="text-bookeasy-blue mb-2">
                  <Sparkles className="w-6 h-6 mx-auto" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-bookeasy-blue text-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Let’s get you started</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Ready to discover amazing spaces? BookEasy helps you find the perfect venue — fast, easy, and stress-free.
          </p>
          <Link to="/spaces">
            <Button
              variant="secondary"
              className="rounded-full px-6 py-3 text-bookeasy-blue bg-white hover:bg-gray-100 text-lg font-medium"
            >
              Explore Spaces
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
