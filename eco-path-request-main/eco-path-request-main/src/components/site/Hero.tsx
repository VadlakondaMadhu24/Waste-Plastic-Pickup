
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative">
      <div className="container mx-auto grid items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Recycle More. Waste Less.
          </h1>
          <p className="mt-4 max-w-prose text-lg text-muted-foreground">
            GreenCycle makes recycling plastics easy with free community pickups
            and a friendly team. Join neighbors making a real impact.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/pickup">Request Pickup</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#how-it-works">How it works</a>
            </Button>
          </div>
        </div>
        <div className="relative">
          <img
            src="/lovable-uploads/7db674ad-bf8c-40cb-986a-0a35bc73b643.png"
            alt="GreenCycle hero image: plastic waste on beach shoreline"
            loading="eager"
            className="h-full w-full rounded-lg object-cover shadow-xl"
          />
          <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-t from-background/10 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
