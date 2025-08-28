import { Helmet } from "react-helmet-async";
import { site } from "@/config/site";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { useMemo } from "react";

const Pickup = () => {
  const formAction = useMemo(() => site.formspreeId ? `https://formspree.io/f/${site.formspreeId}` : "", []);

  return (
    <main className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Request Pickup – GreenCycle</title>
        <meta
          name="description"
          content="Schedule a plastic waste pickup with GreenCycle. Enter your details and choose a convenient date."
        />
        <link rel="canonical" href="/pickup" />
      </Helmet>

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">Pickup Request Form</h1>
        <p className="mt-3 max-w-prose text-muted-foreground">
          Fill out the form and our team will confirm your pickup.
        </p>
      </header>

      {!formAction && (
        <Alert className="mb-6">
          <AlertTitle>Form not configured</AlertTitle>
          <AlertDescription>
            To receive submissions, set your Formspree form ID in <code>src/config/site.ts</code> (site.formspreeId).
          </AlertDescription>
        </Alert>
      )}

      <form
        action={formAction || undefined}
        method={formAction ? "POST" : undefined}
        className="grid gap-6 rounded-lg border bg-card p-6 shadow-sm"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" name="name" required placeholder="Jane Doe" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone number</Label>
            <Input id="phone" name="phone" required type="tel" placeholder="(555) 123-4567" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required placeholder="you@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" name="address" required placeholder="123 Eco Street, Greentown" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="grid gap-2">
            <Label htmlFor="plasticType">Type of plastic</Label>
            <Select name="plasticType">
              <SelectTrigger id="plasticType">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="PET">PET (bottles)</SelectItem>
                <SelectItem value="HDPE">HDPE (containers)</SelectItem>
                <SelectItem value="LDPE">LDPE (bags/film)</SelectItem>
                <SelectItem value="PP">PP (cups/lids)</SelectItem>
                <SelectItem value="Mixed">Mixed plastics</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input id="quantity" name="quantity" placeholder="e.g., 3 bags (~10kg)" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="date">Preferred date</Label>
            <div className="relative">
              <Input id="date" name="date" type="date" required className="pr-10" />
              <CalendarIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
        </div>

        <input type="hidden" name="_subject" value="New GreenCycle Pickup Request" />

        <div className="flex items-center gap-3">
          <Button type="submit" variant="hero" size="lg" disabled={!formAction}>
            Submit Request
          </Button>
          {!formAction && (
            <p className="text-sm text-muted-foreground">Set your Formspree ID to enable submissions.</p>
          )}
        </div>
      </form>
    </main>
  );
};

export default Pickup;
