import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const UniversityCarousel = () => {
  const universities = [
    'Cornell University',
    'UC Berkeley',
    'UCLA',
    'USC',
    'Pepperdine University',
    'UT Austin',
    'Boston College',
    'Emory University',
    'UC San Diego'
  ];

  return (
    <div className="w-full bg-white/10 backdrop-blur-sm rounded-lg p-6">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {universities.map((university, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-auto">
              <div className="px-8 py-4 rounded-lg border text-center min-w-[250px] md:min-w-[250px] transition-all duration-300 bg-white text-primary border-accent shadow-card">
                <div className="font-semibold text-lg">{university}</div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default UniversityCarousel;