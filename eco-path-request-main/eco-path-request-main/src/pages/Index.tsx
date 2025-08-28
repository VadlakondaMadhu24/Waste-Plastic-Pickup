import { Helmet } from "react-helmet-async";
import Hero from "@/components/site/Hero";
import Stats from "@/components/site/Stats";
import Steps from "@/components/site/Steps";
import CTA from "@/components/site/CTA";
import Gallery from "@/components/site/Gallery";

const Index = () => {
  return (
    <main>
      <Helmet>
        <title>GreenCycle – Community Plastic Collection</title>
        <meta
          name="description"
          content="Request a plastic pickup with GreenCycle and help reduce waste in your community. Fast, friendly, and free."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <Hero />
      <Stats />
      <Steps />
      <Gallery />
      <CTA />
    </main>
  );
};

export default Index;
