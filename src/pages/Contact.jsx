import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `Hi! I'm ${formData.name}.\n\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-black mb-6 tracking-tight uppercase">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600">
              Have questions? Want to place an order? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-display font-bold text-black mb-8 uppercase tracking-tight">
                Contact Information
              </h2>
              <p className="text-base text-gray-600 mb-12 leading-relaxed">
                Fill out the form and we'll get back to you as soon as possible. 
                You can also reach us directly through any of the methods below.
              </p>

              {/* Contact Methods */}
              <div className="space-y-8">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start group"
                >
                  <div className="w-12 h-12 border-2 border-black flex items-center justify-center flex-shrink-0 group-hover:bg-black transition-colors">
                    <svg className="w-6 h-6 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-sm font-display font-bold text-black uppercase tracking-wider mb-1">
                      WhatsApp
                    </h3>
                    <p className="text-gray-600">+91 1234567890</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:hello@kuttikart.com"
                  className="flex items-start group"
                >
                  <div className="w-12 h-12 border-2 border-black flex items-center justify-center flex-shrink-0 group-hover:bg-black transition-colors">
                    <svg className="w-6 h-6 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-sm font-display font-bold text-black uppercase tracking-wider mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600">hello@kuttikart.com</p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+911234567890"
                  className="flex items-start group"
                >
                  <div className="w-12 h-12 border-2 border-black flex items-center justify-center flex-shrink-0 group-hover:bg-black transition-colors">
                    <svg className="w-6 h-6 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-sm font-display font-bold text-black uppercase tracking-wider mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-600">+91 1234567890</p>
                  </div>
                </a>
              </div>

              {/* Social Media */}
              <div className="mt-16">
                <h3 className="text-sm font-display font-bold text-black mb-6 uppercase tracking-widest">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-12">
              <h2 className="text-2xl font-display font-bold text-black mb-8 uppercase tracking-tight">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-black mb-3 uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 text-sm focus:outline-none focus:border-black transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-black mb-3 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 text-sm focus:outline-none focus:border-black transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-black mb-3 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 text-sm focus:outline-none focus:border-black transition-colors"
                    placeholder="+91 1234567890"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-black mb-3 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 text-sm focus:outline-none focus:border-black transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary">
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Store Policies */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-black mb-16 text-center uppercase tracking-tight">
            Customer Care
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-lg font-display font-bold text-black mb-4 uppercase tracking-wide">Shipping</h3>
              <p className="text-gray-600 leading-relaxed">
                We ship across India. Orders are processed within 2-3 business days. 
                Delivery times vary by location.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-display font-bold text-black mb-4 uppercase tracking-wide">Returns</h3>
              <p className="text-gray-600 leading-relaxed">
                7-day return policy on all products. Items must be unused and in original 
                condition with tags attached.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-display font-bold text-black mb-4 uppercase tracking-wide">Custom Orders</h3>
              <p className="text-gray-600 leading-relaxed">
                We accept custom orders and alterations. Contact us to discuss your 
                specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
