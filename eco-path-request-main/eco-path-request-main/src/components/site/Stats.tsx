import { Leaf, Recycle, Truck } from "lucide-react";

const items = [
  {
    icon: Recycle,
    value: "12,500+ kg",
    label: "Plastic diverted",
  },
  {
    icon: Truck,
    value: "3,200+",
    label: "Pickups completed",
  },
  {
    icon: Leaf,
    value: "5 neighborhoods",
    label: "Served weekly",
  },
];

const Stats = () => {
  return (
    <section aria-labelledby="stats-heading" className="border-y bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <h2 id="stats-heading" className="sr-only">
          GreenCycle impact statistics
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.label}
              className="group rounded-lg border bg-card p-6 shadow-sm transition-colors hover:bg-card/80"
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <p className="text-2xl font-bold">{item.value}</p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
