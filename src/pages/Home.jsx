import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/products/ProductCard';

const Home = () => {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=1920&q=80"
            alt="Hero"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-6xl lg:text-8xl font-display font-bold text-white mb-8 tracking-tight leading-none">
              STYLE MEETS<br />COMFORT
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 font-light tracking-wide">
              Premium kids clothing for the modern family
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products" className="btn-primary">
                Explore Collection
              </Link>
              <Link to="/about" className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-black">
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-black mb-4 tracking-tight">
              FEATURED COLLECTION
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked pieces designed for style, comfort, and durability
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Split Banner - Girls Collection */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-96 lg:h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=1200&q=80"
              alt="Girls Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          {/* Content */}
          <div className="bg-gray-50 flex items-center justify-center p-12 lg:p-20">
            <div className="max-w-md">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-black mb-6 tracking-tight">
                GIRLS<br />COLLECTION
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From playful dresses to elegant ethnic wear. Discover styles that grow with your little ones.
              </p>
              <Link to="/products?category=girls" className="btn-primary">
                Shop Girls
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Split Banner - Boys Collection */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Content */}
          <div className="bg-black text-white flex items-center justify-center p-12 lg:p-20 order-2 lg:order-1">
            <div className="max-w-md">
              <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight">
                BOYS<br />COLLECTION
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Comfort meets cool. Versatile pieces perfect for school, play, and everything in between.
              </p>
              <Link to="/products?category=boys" className="btn-secondary border-white text-white hover:bg-white hover:text-black">
                Shop Boys
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative h-96 lg:h-[600px] order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=1200&q=80"
              alt="Boys Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="w-16 h-16 border-2 border-black flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-black mb-3 uppercase tracking-wide">Quality First</h3>
              <p className="text-gray-600">Premium materials that last through countless adventures</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 border-2 border-black flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-black mb-3 uppercase tracking-wide">Made with Love</h3>
              <p className="text-gray-600">Each piece thoughtfully designed and crafted with care</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 border-2 border-black flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-black mb-3 uppercase tracking-wide">Sustainable</h3>
              <p className="text-gray-600">Eco-friendly practices for a better tomorrow</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative h-96 bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1547978046-8ba81801c72e?w=1920&q=80"
            alt="CTA Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6 tracking-tight">
              READY TO EXPLORE?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Browse our complete collection of premium kids clothing
            </p>
            <Link to="/products" className="btn-primary">
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
