export default function Hero() {
  return (
    <section className="bg-dartmouth text-white">
      <div className="container mx-auto px-4 md:px-8 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Engineering Management Student & Adventure Seeker
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mb-10">
            Master of Engineering Management student at Dartmouth College with a passion for travel, technology, and sharing experiences through photography and blogging.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#travel" className="bg-white text-dartmouth font-medium px-6 py-3 rounded hover:bg-offwhite transition-colors text-center">
              Explore My Travels
            </a>
            <a href="#projects" className="border border-white text-white px-6 py-3 rounded hover:bg-white/10 transition-colors text-center">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
