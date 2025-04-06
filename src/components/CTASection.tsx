
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="bg-bookeasy-blue py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to find your perfect space?
        </h2>
        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
          Join thousands of users who find and book local spaces with BookEasy. 
          From meetings to events, we've got the perfect space for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/spaces">
            <Button size="lg" className="bg-white text-bookeasy-blue hover:bg-white/90 rounded-full">
              Explore Spaces
            </Button>
          </Link>
          <Link to="/categories">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-full">
              Browse Categories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
