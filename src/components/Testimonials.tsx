import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rachemula Sipho',
    rating: 5,
  },
  {
    name: 'Melissa',
    rating: 4,
  },
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 px-6 bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-gradient-radial from-[#c72c7e]/5 via-transparent to-transparent" />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-[#00a4b8]/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-[#00a4b8]" />
            <span className="text-[#00a4b8] tracking-[0.3em] text-sm uppercase font-light">Testimonials</span>
            <div className="w-12 h-px bg-[#00a4b8]" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            CLIENT TRUST <span className="text-[#c72c7e]">BUILT IN</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hear from the partners who trust us with their most important projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00a4b8]/10 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-black/60 backdrop-blur-md border border-gray-800 rounded-lg p-8 h-full transition-all duration-500 group-hover:border-[#c72c7e] group-hover:transform group-hover:-translate-y-2 flex flex-col items-center justify-center text-center">
                <div className="absolute top-0 left-8 w-16 h-1 bg-[#c72c7e] transform -translate-y-1/2" />

                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#00a4b8] text-[#00a4b8]" />
                  ))}
                </div>

                <div className="font-bold text-white group-hover:text-[#c72c7e] transition-colors duration-300 text-lg">
                  {testimonial.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
