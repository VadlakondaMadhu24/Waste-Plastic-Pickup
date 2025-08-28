import { Helmet } from "react-helmet-async";
import Steps from "@/components/site/Steps";

const About = () => {
  return (
    <main className="container mx-auto px-4 py-12">
      <Helmet>
        <title>About GreenCycle – Our Mission & Impact</title>
        <meta
          name="description"
          content="Learn how GreenCycle reduces plastic waste through community pickups and responsible recycling."
        />
        <link rel="canonical" href="/about" />
      </Helmet>
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">About GreenCycle</h1>
        <p className="mt-3 max-w-prose text-muted-foreground">
          We are a community-driven program making it simple to recycle plastics.
          Our mission is to reduce plastic waste by offering scheduled pickups
          and responsible processing.
        </p>
      </header>
      <figure className="mb-8 overflow-hidden rounded-lg border bg-card shadow-sm">
        <img
          src="/lovable-uploads/d02162b0-42f4-4f8b-8970-4633a744cd14.png"
          alt="GreenCycle volunteers collecting plastic bottles during a park cleanup"
          loading="lazy"
          decoding="async"
          className="h-64 w-full object-cover sm:h-80 md:h-96"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
        />
        <figcaption className="p-3 text-center text-sm text-muted-foreground">
          Community cleanup in action
        </figcaption>
      </figure>
      <section className="prose max-w-none dark:prose-invert prose-p:my-3 prose-headings:mb-2 prose-headings:mt-8">
        <h2>Our mission</h2>
        <p>
          Empower communities to recycle more and waste less. By simplifying the
          process and educating neighbors, we collectively keep plastics out of
          landfills and oceans.
        </p>
        <h2>How the program works</h2>
        <p>
          You schedule a pickup, our team collects and sorts, and we ensure
          materials go to trusted recycling partners.
        </p>
      </section>
      <div className="mt-10">
        <Steps />
      </div>
    </main>
  );
};

export default About;
