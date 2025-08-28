const photos = [
  {
    src: "/lovable-uploads/5256733c-bf6e-4a2d-9b3a-e2580ecc6e28.png",
    alt: "GreenCycle gallery: volunteers picking up plastic bottles in a park",
    caption: "Local cleanup volunteers",
  },
  {
    src: "/lovable-uploads/3e1367ab-57d9-4a8c-9f6e-6765cd0b0485.png",
    alt: "GreenCycle gallery: sea turtle swimming above plastic pollution in ocean",
    caption: "Protecting oceans from plastic",
  },
  {
    src: "/lovable-uploads/934a6c9d-0a73-4c5f-b7db-02a90bc1fd0f.png",
    alt: "GreenCycle gallery: plastic bottles and trash scattered on sandy beach shoreline",
    caption: "Beaches deserve better",
  },
  {
    src: "/lovable-uploads/7917076b-fe98-4a66-b842-d059be378853.png",
    alt: "GreenCycle gallery: mixed recyclable plastic items sorted for processing",
    caption: "Sorting plastics for recycling",
  },
  {
    src: "/lovable-uploads/5440ef47-eaf4-43e8-bd6a-c7a2ad72f970.png",
    alt: "GreenCycle gallery: volunteers picking up plastic bottles during community cleanup",
    caption: "Community cleanup in action",
  },
];


const Gallery = () => {
  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <header className="mb-6 sm:mb-8">
          <h2 id="gallery-heading" className="text-2xl font-bold tracking-tight md:text-3xl">
            Photo Gallery
          </h2>
          <p className="mt-2 max-w-prose text-muted-foreground">
            A glimpse of the plastic waste challenge and our community efforts.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map((p, i) => (
            <figure key={i} className="overflow-hidden rounded-lg border bg-card shadow-sm">
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                className="h-48 w-full object-cover sm:h-56 md:h-60"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <figcaption className="p-3 text-center text-sm text-muted-foreground">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
