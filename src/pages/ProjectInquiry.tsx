import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Upload, Check } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const ProjectInquiry = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    preferred_contact_method: 'Email',
    project_type: '',
    street_or_area: '',
    city_town: '',
    property_ownership_status: '',
    budget_range: '',
    timeline: '',
    project_description: '',
  });

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadedFiles(prev => [...prev, ...Array.from(e.target.files || [])]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('project_inquiries').insert([formData]);

      if (error) throw error;

      setSubmitSuccess(true);
      setFormData({
        full_name: '',
        email: '',
        phone_number: '',
        preferred_contact_method: 'Email',
        project_type: '',
        street_or_area: '',
        city_town: '',
        property_ownership_status: '',
        budget_range: '',
        timeline: '',
        project_description: '',
      });
      setUploadedFiles([]);
      setCurrentStep(1);

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.full_name && formData.email && formData.phone_number;
      case 2:
        return formData.project_type;
      case 3:
        return formData.street_or_area && formData.city_town && formData.property_ownership_status;
      case 4:
        return formData.budget_range;
      case 5:
        return formData.timeline;
      case 6:
        return formData.project_description;
      default:
        return true;
    }
  };

  const features = [
    { title: 'Custom Home Builds & Renovations', icon: '🏗️' },
    { title: '12+ Years of Industry Experience', icon: '⭐' },
    { title: 'Transparent Pricing & Detailed Project Breakdown', icon: '💰' },
    { title: 'Safety-Certified & Fully Compliant', icon: '✓' },
  ];

  const roadmap = [
    { step: '1', title: 'Review & Consultation', desc: 'We analyze your details and call you' },
    { step: '2', title: 'Optional Site Visit', desc: 'A project manager visits the location' },
    { step: '3', title: 'Quotation & Project Plan', desc: 'You receive a full breakdown & timeline' },
  ];

  const testimonials = [
    { name: 'Rachemula Sipho', rating: 5, quote: 'Exceptional work and attention to detail' },
    { name: 'Melissa', rating: 4, quote: 'Professional team, great communication' },
    { name: 'John Smith', rating: 5, quote: 'Completed on time and budget' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a] z-10" />

        <div className="absolute inset-0 opacity-30">
          <img
            src="/jothom 5 .jpg"
            alt="Project Vision"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-30 h-full flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-tight">
              <span className="block text-reveal" style={{ animationDelay: '0.2s' }}>
                LET'S BUILD YOUR
              </span>
              <span className="block text-reveal bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent" style={{ animationDelay: '0.4s' }}>
                VISION
              </span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed fade-in" style={{ animationDelay: '0.8s' }}>
              Tell us what you want to build — our team will get back to you within 24 hours with a plan, timeline, and next steps.
            </p>

            <button
              onClick={scrollToForm}
              className="group relative px-12 py-5 bg-transparent border-2 border-[#00a4b8] text-white font-bold tracking-wider uppercase overflow-hidden transition-all duration-500 hover:text-black fade-in mb-12"
              style={{ animationDelay: '1s' }}
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-[#00a4b8] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <div className="absolute inset-0 border border-white/20 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
            </button>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToForm}>
              <ChevronDown className="w-8 h-8 text-[#c72c7e]" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-[#00a4b8]" />
              <span className="text-[#00a4b8] tracking-[0.3em] text-sm uppercase font-light">Why Choose Us</span>
              <div className="w-12 h-px bg-[#00a4b8]" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
              WHY START WITH <span className="text-[#c72c7e]">US</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative p-8 bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg hover:border-[#00a4b8] transition-all duration-500 hover:transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#c72c7e] transition-colors duration-300">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={formRef} className="relative py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
              PROJECT <span className="text-[#c72c7e]">DETAILS</span>
            </h2>
            <p className="text-gray-400 text-lg">Step {currentStep} of 7</p>
          </div>

          {submitSuccess && (
            <div className="mb-8 p-6 bg-green-500/10 border border-green-500 rounded-lg flex items-center gap-4">
              <Check className="w-6 h-6 text-green-500" />
              <div>
                <h3 className="font-bold text-green-400">Submission Successful!</h3>
                <p className="text-green-300 text-sm">We'll get back to you within 24 hours.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {currentStep === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-2xl font-bold mb-8">Personal Details</h3>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Full Name</label>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-lg focus:border-[#00a4b8] focus:outline-none transition-colors duration-300 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-lg focus:border-[#00a4b8] focus:outline-none transition-colors duration-300 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Phone Number</label>
                  <input
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleInputChange}
                    placeholder="Your phone number"
                    className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-lg focus:border-[#00a4b8] focus:outline-none transition-colors duration-300 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Preferred Contact Method</label>
                  <select
                    name="preferred_contact_method"
                    value={formData.preferred_contact_method}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-lg focus:border-[#00a4b8] focus:outline-none transition-colors duration-300 text-white"
                  >
                    <option>Call</option>
                    <option>WhatsApp</option>
                    <option>Email</option>
                  </select>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-2xl font-bold mb-8">Project Type</h3>
                <div className="space-y-3">
                  {['Home Renovation', 'New Construction', 'Room Addition', 'Kitchen/Bath Remodel', 'Commercial Project', 'Other'].map(type => (
                    <label key={type} className="flex items-center p-4 bg-black/40 border border-gray-700 rounded-lg cursor-pointer hover:border-[#00a4b8] transition-colors duration-300">
                      <input
                        type="radio"
                        name="project_type"
                        value={type}
                        checked={formData.project_type === type}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#00a4b8] cursor-pointer"
                        required
                      />
                      <span className="ml-4 text-white font-medium">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-2xl font-bold mb-8">Project Location</h3>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Street or Area</label>
                  <input
                    type="text"
                    name="street_or_area"
                    value={formData.street_or_area}
                    onChange={handleInputChange}
                    placeholder="Street address or area name"
                    className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-lg focus:border-[#00a4b8] focus:outline-none transition-colors duration-300 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">City/Town</label>
                  <input
                    type="text"
                    name="city_town"
                    value={formData.city_town}
                    onChange={handleInputChange}
                    placeholder="City or town"
                    className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-lg focus:border-[#00a4b8] focus:outline-none transition-colors duration-300 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Property Ownership Status</label>
                  <select
                    name="property_ownership_status"
                    value={formData.property_ownership_status}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-lg focus:border-[#00a4b8] focus:outline-none transition-colors duration-300 text-white"
                    required
                  >
                    <option value="">Select status</option>
                    <option value="Own">Own</option>
                    <option value="Not yet">Not yet</option>
                    <option value="In process">In process</option>
                  </select>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-2xl font-bold mb-8">Estimated Budget</h3>
                <div className="space-y-3">
                  {['Under R100,000', 'R100,000 – R300,000', 'R300,000 – R1,000,000', 'R1,000,000 – R5,000,000', 'R5,000,000+'].map(budget => (
                    <label key={budget} className="flex items-center p-4 bg-black/40 border border-gray-700 rounded-lg cursor-pointer hover:border-[#00a4b8] transition-colors duration-300">
                      <input
                        type="radio"
                        name="budget_range"
                        value={budget}
                        checked={formData.budget_range === budget}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#00a4b8] cursor-pointer"
                        required
                      />
                      <span className="ml-4 text-white font-medium">{budget}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-2xl font-bold mb-8">Timeline</h3>
                <div className="space-y-3">
                  {['Immediately', '1–3 months', '3–6 months', 'Just collecting quotes'].map(time => (
                    <label key={time} className="flex items-center p-4 bg-black/40 border border-gray-700 rounded-lg cursor-pointer hover:border-[#00a4b8] transition-colors duration-300">
                      <input
                        type="radio"
                        name="timeline"
                        value={time}
                        checked={formData.timeline === time}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#00a4b8] cursor-pointer"
                        required
                      />
                      <span className="ml-4 text-white font-medium">{time}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 6 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-2xl font-bold mb-8">Project Description</h3>
                <textarea
                  name="project_description"
                  value={formData.project_description}
                  onChange={handleInputChange}
                  placeholder="Describe your project. Include styles, materials, sizes, and any inspiration you have."
                  className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-lg focus:border-[#00a4b8] focus:outline-none transition-colors duration-300 text-white h-32 resize-none"
                  required
                />
              </div>
            )}

            {currentStep === 7 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-2xl font-bold mb-8">Upload Files</h3>
                <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-[#00a4b8] transition-colors duration-300">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <label className="cursor-pointer">
                    <span className="text-[#00a4b8] hover:text-[#00c5cc] font-semibold">Click to upload</span>
                    <p className="text-gray-400 text-sm mt-2">Images, sketches, blueprints, inspiration photos</p>
                    <input
                      type="file"
                      multiple
                      onChange={handleFileUpload}
                      className="hidden"
                      accept="image/*,.pdf"
                    />
                  </label>
                </div>
                {uploadedFiles.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-300">Uploaded files:</p>
                    {uploadedFiles.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-black/40 border border-gray-700 rounded-lg">
                        <span className="text-sm text-gray-300">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(idx)}
                          className="text-red-500 hover:text-red-400 text-sm font-semibold"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="flex gap-4 pt-8 border-t border-gray-700">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="flex-1 px-6 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-lg transition-colors duration-300"
                >
                  Back
                </button>
              )}
              {currentStep < 7 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(prev => prev + 1)}
                  disabled={!isStepValid()}
                  className="flex-1 px-6 py-4 bg-[#00a4b8] hover:bg-[#00c5cc] disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-bold rounded-lg transition-colors duration-300"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting || !isStepValid()}
                  className="flex-1 px-6 py-4 bg-[#c72c7e] hover:bg-[#e83a94] disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-colors duration-300"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Project Details'}
                </button>
              )}
            </div>

            {currentStep === 7 && (
              <p className="text-center text-sm text-gray-400">
                We'll respond within 24 hours.
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="relative py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-[#00a4b8]" />
              <span className="text-[#00a4b8] tracking-[0.3em] text-sm uppercase font-light">The Process</span>
              <div className="w-12 h-px bg-[#00a4b8]" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
              WHAT HAPPENS <span className="text-[#c72c7e]">NEXT</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {roadmap.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#00a4b8] rounded-full flex items-center justify-center mx-auto mb-6 font-black text-2xl">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
                {idx < roadmap.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[40%] h-px bg-gradient-to-r from-[#00a4b8] to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-[#00a4b8]" />
              <span className="text-[#00a4b8] tracking-[0.3em] text-sm uppercase font-light">What They Say</span>
              <div className="w-12 h-px bg-[#00a4b8]" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
              CLIENT <span className="text-[#c72c7e]">TESTIMONIALS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="group relative p-8 bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg hover:border-[#c72c7e] transition-all duration-500">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#00a4b8] text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
                <p className="font-bold text-white">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
            READY TO BRING YOUR <span className="text-[#c72c7e]">PROJECT TO LIFE</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Start your journey with Jothom Construction today
          </p>
          <button className="group relative px-12 py-5 bg-transparent border-2 border-[#00a4b8] text-white font-bold tracking-wider uppercase overflow-hidden transition-all duration-500 hover:text-black">
            <span className="relative z-10">Start Your Project</span>
            <div className="absolute inset-0 bg-[#00a4b8] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            <div className="absolute inset-0 border border-white/20 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectInquiry;
