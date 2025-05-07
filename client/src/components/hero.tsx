export default function Hero() {
  return (
    <section className="bg-dartmouth text-cream pinstripe">
      <div className="container mx-auto px-4 md:px-8 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Exploring the Intersection of History, Literature & Cultural Studies
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mb-10">
            Associate Professor of History at Oxford University specializing in 19th-century European intellectual movements, with a focus on Anglo-American literary relationships.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#research" className="bg-cream text-dartmouth font-medium px-6 py-3 rounded hover:bg-cream/90 transition-colors text-center">
              View Research
            </a>
            <a href="#contact" className="border border-cream text-cream px-6 py-3 rounded hover:bg-cream/10 transition-colors text-center">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
