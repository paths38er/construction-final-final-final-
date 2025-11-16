import { useEffect, useRef, useState } from 'react';

const WhoWeAre = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="who-we-are" ref={sectionRef} className="relative py-32 px-6 bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
          <div className="relative aspect-[4/5] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#c72c7e]/20 to-transparent z-10" />
            <div className="absolute top-0 left-0 w-full h-full border-2 border-[#c72c7e] transform translate-x-4 translate-y-4" />
            <img
              src="/jothom 5  copy.jpg"
              alt="Construction Excellence"
              className="relative z-20 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#00a4b8] flex items-center justify-center z-30">
              <div className="text-center">
                <div className="text-4xl font-black">9+</div>
                <div className="text-xs tracking-wider">YEARS</div>
              </div>
            </div>
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-[#00a4b8]" />
              <span className="text-[#00a4b8] tracking-[0.3em] text-sm uppercase font-light">The Jothom Story</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
              WHO WE <span className="text-[#c72c7e]">ARE</span>
            </h2>
          </div>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              For over 9 years, Jothom Construction has been at the forefront of architectural excellence,
              transforming visions into structural masterpieces that stand the test of time.
            </p>
            <p className="text-lg">
              We combine cutting-edge engineering with traditional craftsmanship, delivering projects that
              exceed expectations in durability, aesthetics, and innovation.
            </p>
            <div className="relative border-l-4 border-[#00a4b8] pl-8 py-6 my-8 bg-black/30">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00a4b8] to-transparent" />
              <p className="text-2xl font-light italic text-white leading-relaxed">
                "Craftsmanship is our foundation. Excellence is our standard."
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-4xl font-black text-[#00a4b8] mb-2">500+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-center border-l border-r border-gray-700">
                <div className="text-4xl font-black text-[#c72c7e] mb-2">98%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">On-Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-[#00a4b8] mb-2">50+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Team</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#c72c7e]/5 rounded-full blur-3xl" />
    </section>
  );
};

export default WhoWeAre;
