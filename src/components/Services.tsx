import { useEffect, useRef, useState } from 'react';
import { Building2, Home, Wrench, Compass, Hammer, Layers, ClipboardCheck } from 'lucide-react';

const services = [
  { icon: Building2, title: 'Structural Construction', desc: 'Foundation to finish, built to last generations' },
  { icon: Home, title: 'Residential Building', desc: 'Custom homes crafted with precision and care' },
  { icon: Wrench, title: 'Renovations & Upgrades', desc: 'Transforming spaces with modern innovation' },
  { icon: Compass, title: 'Civil Engineering', desc: 'Infrastructure that shapes communities' },
  { icon: Hammer, title: 'Architectural Planning', desc: 'Design excellence meets structural integrity' },
  { icon: Layers, title: 'Infrastructure Projects', desc: 'Large-scale developments engineered right' },
  { icon: ClipboardCheck, title: 'Project Management', desc: 'End-to-end oversight and execution' },
];

const Services = () => {
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
    <section ref={sectionRef} id="our-services" className="relative py-32 px-6 bg-gradient-to-b from-[#0a0a0a] via-[#121212] to-[#0a0a0a]">
      <div className="absolute inset-0 grid-overlay opacity-5" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-[#00a4b8]" />
            <span className="text-[#00a4b8] tracking-[0.3em] text-sm uppercase font-light">What We Do</span>
            <div className="w-12 h-px bg-[#00a4b8]" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight">
            OUR <span className="text-[#c72c7e]">SERVICES</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group relative bg-black/40 backdrop-blur-sm border border-gray-800 p-8 transition-all duration-700 hover:border-[#00a4b8] hover:bg-[#00a4b8]/5 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-0 h-px bg-[#c72c7e] group-hover:w-full transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-0 h-px bg-[#c72c7e] group-hover:w-full transition-all duration-500" />
              <div className="absolute top-0 left-0 w-px h-0 bg-[#c72c7e] group-hover:h-full transition-all duration-500 delay-200" />
              <div className="absolute bottom-0 right-0 w-px h-0 bg-[#c72c7e] group-hover:h-full transition-all duration-500 delay-200" />


              <div className="relative z-10">
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-[#00a4b8]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <service.icon className="w-12 h-12 text-[#00a4b8] transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-[#c72c7e] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </div>

              <div className="absolute top-4 right-4 text-6xl font-black text-white/5 group-hover:text-[#00a4b8]/10 transition-colors duration-500">
                {String(idx + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
