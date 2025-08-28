import activities from "@/assets/recycling-activities.jpg";
import { CalendarCheck2, MapPin, Phone, Recycle, UsersRound } from "lucide-react";

const steps = [
  {
    title: "Request Pickup",
    description: "Tell us what plastics you have and select a date.",
    icon: CalendarCheck2,
  },
  {
    title: "We Confirm",
    description: "You get a quick confirmation and pickup window.",
    icon: Phone,
  },
  {
    title: "Pickup & Sort",
    description: "Our team collects and responsibly sorts your plastics.",
    icon: Recycle,
  },
  {
    title: "Community Impact",
    description: "Together we keep waste out of landfills and oceans.",
    icon: UsersRound,
  },
];

const Steps = () => {
  return (
    <section id="how-it-works" className="scroll-mt-20">
      <div className="container mx-auto grid items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">How GreenCycle works</h2>
          <p className="mt-3 max-w-prose text-muted-foreground">
            Simple steps from request to recycling. It’s fast, friendly, and
            effective.
          </p>
          <ol className="mt-6 space-y-4">
            {steps.map((step, idx) => (
              <li key={step.title} className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold">{idx + 1}. {step.title}</p>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="relative">
          <img
            src={activities}
            alt="Volunteers sorting plastic waste at a GreenCycle activity"
            loading="lazy"
            className="h-full w-full rounded-lg object-cover shadow-xl"
          />
          <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-t from-background/10 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Steps;
