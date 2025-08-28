import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="rounded-2xl border bg-gradient-to-r from-primary to-accent p-8 text-primary-foreground shadow-lg md:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                Ready to schedule your pickup?
              </h2>
              <p className="mt-2 max-w-prose text-primary-foreground/90">
                It only takes a minute. Our team will handle the rest with care.
              </p>
            </div>
            <Button asChild variant="hero" size="lg" className="bg-primary text-primary-foreground">
              <Link to="/pickup">Request Pickup</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
