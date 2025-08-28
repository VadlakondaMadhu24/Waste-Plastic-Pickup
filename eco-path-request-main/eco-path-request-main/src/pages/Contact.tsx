import { Helmet } from "react-helmet-async";
import { site } from "@/config/site";

const Contact = () => {
  return (
    <main className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Contact GreenCycle – Get in Touch</title>
        <meta
          name="description"
          content="Contact GreenCycle for questions about plastic pickups, partnerships, or volunteering."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">Contact</h1>
        <p className="mt-3 max-w-prose text-muted-foreground">
          We’d love to hear from you. Reach out anytime.
        </p>
      </header>

      <section className="rounded-lg border bg-card p-6 shadow-sm">
        <dl className="space-y-3 text-sm">
          <div>
            <dt className="font-medium text-foreground">Address</dt>
            <dd className="text-muted-foreground">{site.contact.address || "—"}</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Phone</dt>
            <dd className="text-muted-foreground">{site.contact.phone || "—"}</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Email</dt>
            <dd className="text-muted-foreground">{site.contact.email || "—"}</dd>
          </div>
        </dl>
      </section>
    </main>
  );
};

export default Contact;
