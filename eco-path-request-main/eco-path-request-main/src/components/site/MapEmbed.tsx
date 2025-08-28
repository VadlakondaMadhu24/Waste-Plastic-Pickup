import { site } from "@/config/site";

type MapEmbedProps = {
  title?: string;
};

const MapEmbed = ({ title = "GreenCycle Collection Center" }: MapEmbedProps) => {
  const { lat, lng } = site.contact.location;
  const src = `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`;

  return (
    <div className="relative w-full overflow-hidden rounded-lg border shadow-sm">
      <iframe
        title={title}
        src={src}
        loading="lazy"
        className="h-[360px] w-full md:h-[420px]"
      />
    </div>
  );
};

export default MapEmbed;
