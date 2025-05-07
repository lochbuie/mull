export default function Hero() {
  return (
    <section className="book-texture text-ivory">
      <div className="container mx-auto px-4 md:px-8 py-20 md:py-36 relative">
        <div className="max-w-3xl mx-auto">
          <div className="border-l-4 border-gold pl-6 mb-8">
            <p className="font-baskerville text-gold/80 italic mb-2">Dartmouth College</p>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Alexander Johnson
            </h1>
            <p className="text-lg md:text-xl text-ivory/90 font-garamond mb-2">
              Master of Engineering Management
            </p>
          </div>
          <p className="text-lg md:text-xl text-ivory/80 max-w-2xl mb-10 font-baskerville leading-relaxed">
            A life of scholarly pursuit and adventure — exploring the misty trails of New England 
            and the hallowed halls of academia with equal curiosity.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#travel" className="gold-trim bg-transparent text-gold font-medium px-8 py-3 hover:bg-gold/10 transition-colors text-center">
              ⟶ Expedition Journal
            </a>
            <a href="#projects" className="bg-transparent text-ivory px-8 py-3 border border-ivory/30 hover:border-ivory/60 transition-colors text-center">
              ⟶ Scholarly Works
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-0 right-0 h-24 w-24 border-r-4 border-b-4 border-gold/30 opacity-70"></div>
        <div className="absolute top-0 left-0 h-24 w-24 border-l-4 border-t-4 border-gold/30 opacity-70"></div>
      </div>
    </section>
  );
}
