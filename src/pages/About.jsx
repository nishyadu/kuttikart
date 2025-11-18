const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="About Hero"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-6xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight">
              ABOUT KUTTIKART
            </h1>
            <p className="text-xl text-gray-200 font-light">
              Creating premium kids clothing for the modern family
            </p>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  src="/neer.JPG"
                  alt="Neeraja - Founder & Creative Director"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 text-center lg:text-left">
                <h3 className="text-xl font-display font-bold text-black uppercase tracking-wide">Neeraja</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Founder & Creative Director</p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-display font-bold text-black mb-8 tracking-tight uppercase">
                My Story
              </h2>
              <div className="space-y-6 text-base text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Kuttikart is the manifestation of my lifelong dream—to create a brand 
                  that celebrates childhood through exceptional design and uncompromising quality.
                </p>
                <p>
                  With a background in fashion design and a deep passion for children's well-being, 
                  I envisioned a label where every stitch tells a story of care, every fabric 
                  choice reflects thoughtfulness, and every design empowers children to express 
                  themselves freely.
                </p>
                <p>
                  "I believe that what children wear should never limit their imagination or movement. 
                  My dream was to create clothing that's as vibrant and dynamic as the children who 
                  wear it—pieces that parents trust and kids truly love."
                </p>
                <p>
                  What started as a passion project has grown into a trusted brand known for attention 
                  to detail, premium materials, and designs that stand the test of time. Today, through 
                  Kuttikart, I continue to blend artistic vision with functional design, creating 
                  collections that stand at the intersection of beauty, comfort, and sustainability.
                </p>
              </div>
              
              <div className="mt-10 pt-10 border-t border-gray-200">
                <p className="text-sm text-gray-500 italic">
                  "Fashion is not just about looking good—it's about feeling confident, 
                  comfortable, and ready to explore the world."
                </p>
                <p className="text-xs text-gray-400 mt-2 uppercase tracking-wider">— Neeraja</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold mb-4 tracking-tight uppercase">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Quality */}
            <div className="text-center">
              <div className="w-20 h-20 border-2 border-white flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold mb-4 uppercase tracking-wide">Quality First</h3>
              <p className="text-gray-300 leading-relaxed">
                We use only the finest materials and pay meticulous attention to every stitch. 
                Our garments are built to last.
              </p>
            </div>

            {/* Comfort */}
            <div className="text-center">
              <div className="w-20 h-20 border-2 border-white flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold mb-4 uppercase tracking-wide">Designed with Care</h3>
              <p className="text-gray-300 leading-relaxed">
                Children should feel free to play, explore, and be themselves. All our designs 
                prioritize comfort without compromising style.
              </p>
            </div>

            {/* Sustainability */}
            <div className="text-center">
              <div className="w-20 h-20 border-2 border-white flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold mb-4 uppercase tracking-wide">Sustainable</h3>
              <p className="text-gray-300 leading-relaxed">
                We're committed to sustainable practices, from sourcing eco-friendly materials 
                to minimizing waste in our production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-display font-bold text-black mb-8 tracking-tight uppercase">
                The Art of<br />Craftsmanship
              </h2>
              <div className="space-y-6 text-base text-gray-600 leading-relaxed mb-10">
                <p>
                  Every garment bearing the Kuttikart label is a testament to exceptional 
                  craftsmanship. Our skilled artisans bring years of experience and deep 
                  understanding of traditional techniques to each piece.
                </p>
                <p>
                  From selecting the perfect fabric to the final quality check, every step 
                  of our process is carefully monitored to ensure you receive only the best 
                  for your child.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="mr-4 text-black">•</span>
                  <div>
                    <h4 className="font-display font-semibold text-black mb-1 uppercase text-sm tracking-wide">Premium Materials</h4>
                    <p className="text-gray-600 text-sm">100% organic cotton and skin-friendly fabrics</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-4 text-black">•</span>
                  <div>
                    <h4 className="font-display font-semibold text-black mb-1 uppercase text-sm tracking-wide">Handcrafted Details</h4>
                    <p className="text-gray-600 text-sm">Intricate finishing touches on every piece</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-4 text-black">•</span>
                  <div>
                    <h4 className="font-display font-semibold text-black mb-1 uppercase text-sm tracking-wide">Rigorous Testing</h4>
                    <p className="text-gray-600 text-sm">Each piece tested for comfort and durability</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
              <div className="space-y-4">
                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1519457431-44caa64cd5b5?w=400&q=80"
                    alt="Craftsmanship"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?w=400&q=80"
                    alt="Craftsmanship"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-12">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1596123082637-fdc19c05c3a6?w=400&q=80"
                    alt="Craftsmanship"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&q=80"
                    alt="Craftsmanship"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-black mb-6 tracking-tight uppercase">
            Ready to Explore?
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Browse our collection of premium kids clothing designed with love
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/products" className="btn-primary">
              Shop Collection
            </a>
            <a href="/contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
