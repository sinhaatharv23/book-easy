
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import FeaturedSpaces from "@/components/FeaturedSpaces";
import CategoriesSection from "@/components/CategoriesSection";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedSpaces />
      <CategoriesSection />
      <HowItWorks />
      <CTASection />
    </Layout>
  );
};

export default Index;
