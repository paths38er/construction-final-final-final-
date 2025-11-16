import { useState, useRef, useEffect } from 'react';

const projects = [
  {
    title: 'JOTHOM HOUSE PROJECT',
    location: 'Pretoria, South Africa',
    category: 'Residential',
    height: 'Multi-Story',
    duration: '12 months',
    image: '/jothom house.jpg',
  },
  {
    title: 'CONSTRUCTION PHASE 3',
    location: 'Pretoria, South Africa',
    category: 'Structural',
    height: 'N/A',
    duration: '8 months',
    image: '/jothom 3.jpg',
  },
  {
    title: 'STRUCTURAL WORK',
    location: 'Pretoria, South Africa',
    category: 'Commercial',
    height: 'N/A',
    duration: '10 months',
    image: '/jothom 4 .jpg',
  },
  {
    title: 'MODERN RESIDENTIAL',
    location: 'Pretoria, South Africa',
    category: 'Residential Development',
    height: 'N/A',
    duration: '14 months',
    image: '/jothom 5 .jpg',
  },
];

const Portfolio = () => {
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
    <section ref={sectionRef} id="featured-projects" className="relative py-32 px-6 bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_1px,transparent_1px)] bg-[length:50px_50px] opacity-20" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-[#00a4b8]" />
            <span className="text-[#00a4b8] tracking-[0.3em] text-sm uppercase font-light">Case Studies</span>
            <div className="w-12 h-px bg-[#00a4b8]" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            FEATURED <span className="text-[#c72c7e]">PROJECTS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transforming architectural visions into iconic structures
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden bg-black border border-gray-800 transition-all duration-700 hover:border-[#00a4b8] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c72c7e] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
