
const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GreenCycle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
