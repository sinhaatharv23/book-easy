
import { Search, CalendarCheck, CreditCard } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find a Space",
    description: "Browse through various spaces and apply filters to find the perfect match for your needs."
  },
  {
    icon: CalendarCheck,
    title: "Book it",
    description: "Choose your date and time, then book directly through our simple reservation system."
  },
  {
    icon: CreditCard,
    title: "Pay & Enjoy",
    description: "Secure payment through our platform, then simply show up and enjoy your booked space."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How BookEasy Works</h2>
          <p className="text-gray-600 mt-2">We make booking spaces simple and hassle-free</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-bookeasy-blue/10 flex items-center justify-center mb-4">
                <step.icon className="h-8 w-8 text-bookeasy-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
