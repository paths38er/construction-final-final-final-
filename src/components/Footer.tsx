import { Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [shimmerActive, setShimmerActive] = useState(false);

  const handleContactClick = () => {
    setShimmerActive(true);
    setTimeout(() => setShimmerActive(false), 2000);
  };

  return (
    <footer className="relative bg-black border-t border-gray-900">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-black" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="text-4xl font-black tracking-tighter mb-6">
              <span className="text-white">JOTHOM</span>
              <span className="text-[#c72c7e]">.</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Building the future with precision, integrity, and innovation since 2017.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/jothomconstruction"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-800 flex items-center justify-center hover:border-[#00a4b8] hover:text-[#00a4b8] transition-all duration-300 group"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-gray-800 flex items-center justify-center hover:border-[#00a4b8] hover:text-[#00a4b8] transition-all duration-300 group"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 tracking-wider uppercase">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                'Structural Construction',
                'Residential Building',
                'Commercial Development',
                'Renovations',
                'Civil Engineering',
                'Project Management',
              ].map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#our-services"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector('#our-services');
                      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="text-gray-400 hover:text-[#c72c7e] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#c72c7e] group-hover:w-4 transition-all duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 tracking-wider uppercase">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '#who-we-are' },
                { label: 'Our Projects', href: '#featured-projects' },
                { label: 'Careers', href: '#' },
                { label: 'Safety Standards', href: '#' },
                { label: 'Certifications', href: '#' },
                { label: 'Contact', href: '#' },
              ].map(
                (item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        if (item.href.startsWith('#')) {
                          e.preventDefault();
                          const element = document.querySelector(item.href);
                          element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      className="text-gray-400 hover:text-[#00a4b8] transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-[#00a4b8] group-hover:w-4 transition-all duration-300" />
                      {item.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 tracking-wider uppercase">
              Contact
            </h3>
            <ul className="space-y-4">
              <li
                className={`flex items-start gap-3 text-gray-400 cursor-pointer transition-all duration-300 ${shimmerActive ? 'shimmer' : ''}`}
                onClick={handleContactClick}
              >
                <MapPin className="w-5 h-5 text-[#00a4b8] mt-1 flex-shrink-0" />
                <span>8793 Pigmelon Street, Ria Vista, Pretoria, 0175</span>
              </li>
              <li
                className={`flex items-center gap-3 text-gray-400 cursor-pointer transition-all duration-300 ${shimmerActive ? 'shimmer' : ''}`}
                onClick={handleContactClick}
              >
                <Phone className="w-5 h-5 text-[#c72c7e] flex-shrink-0" />
                <a
                  href="tel:+27825829847"
                  className="hover:text-[#c72c7e] transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleContactClick();
                  }}
                >
                  +27 82 582 9847
                </a>
              </li>
              <li
                className={`flex items-center gap-3 text-gray-400 cursor-pointer transition-all duration-300 ${shimmerActive ? 'shimmer' : ''}`}
                onClick={handleContactClick}
              >
                <Mail className="w-5 h-5 text-[#00a4b8] flex-shrink-0" />
                <a
                  href="mailto:thomasngilazi@gmail.com"
                  className="hover:text-[#00a4b8] transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleContactClick();
                  }}
                >
                  thomasngilazi@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[#c72c7e]/30 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>&copy; {currentYear} Jothom Construction. All rights reserved.</p>
            <div className="hidden md:block w-px h-4 bg-gray-800" />
            <p className="text-gray-600">Built on Precision. Inspired by Innovation.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#c72c7e] transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#c72c7e] transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c72c7e] to-transparent" />
    </footer>
  );
};

export default Footer;
