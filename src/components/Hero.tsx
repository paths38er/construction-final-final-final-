import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a] z-10"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />

      <div className="absolute inset-0 opacity-30">
        <img
          src="/jothom 5 .jpg"
          alt="Construction Site"
          className="w-full h-full object-cover"
          style={{ transform: `scale(${1 + scrollY * 0.0003})` }}
        />
      </div>

      <div className="absolute inset-0 blueprint-overlay opacity-10 z-20" />

      <div className="absolute inset-0 grid-overlay opacity-5 z-20" />

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7a7a7a] to-transparent z-30" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7a7a7a] to-transparent z-30" />
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#7a7a7a] to-transparent z-30" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#7a7a7a] to-transparent z-30" />

      <div className="relative z-30 h-full flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="floating-particles mb-8">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>

          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#00a4b8]" />
            <span className="text-[#00a4b8] tracking-[0.3em] text-sm font-light uppercase">Est. 2017</span>
            <div className="h-px w-12 bg-[#00a4b8]" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-tight">
            <span className="block text-reveal" style={{ animationDelay: '0.2s' }}>
              BUILDING THE
            </span>
            <span className="block text-reveal bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent" style={{ animationDelay: '0.4s' }}>
              FUTURE
            </span>
            <span className="block text-[#c72c7e] text-reveal" style={{ animationDelay: '0.6s' }}>
              WITH PRECISION
            </span>
          </h1>

          <div className="h-px w-32 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8" />

          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed fade-in" style={{ animationDelay: '0.8s' }}>
            Jothom Construction delivers world-class structures engineered with integrity and innovation.
          </p>

          <button
            onClick={() => navigate('/project-inquiry')}
            className="group relative px-12 py-5 bg-transparent border-2 border-[#00a4b8] text-white font-bold tracking-wider uppercase overflow-hidden transition-all duration-500 hover:text-black fade-in"
            style={{ animationDelay: '1s' }}
          >
            <span className="relative z-10">Start Your Project</span>
            <div className="absolute inset-0 bg-[#00a4b8] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            <div className="absolute inset-0 border border-white/20 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
          </button>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-[#c72c7e]" />
          </div>
        </div>
      </div>

      <div className="absolute top-8 left-8 z-40 flex flex-col items-center gap-3">
        <div className="w-32 h-32 bg-white border border-white/20 flex items-center justify-center overflow-hidden">
          <img
            src="/Screenshot 2025-11-16 at 15.58.36.png"
            alt="Jothom Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
