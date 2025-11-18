import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-display font-bold text-black mb-4 uppercase">Product Not Found</h2>
          <Link to="/products" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleContact = () => {
    const message = `Hi! I'm interested in ${product.name}${
      selectedSize ? ` (Size: ${selectedSize})` : ''
    }${selectedColor ? ` (Color: ${selectedColor})` : ''}. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-xs text-gray-600 uppercase tracking-wider">
            <Link to="/" className="hover:text-black">
              Home
            </Link>
            <span>/</span>
            <Link to="/products" className="hover:text-black">
              Shop
            </Link>
            <span>/</span>
            <span className="text-black">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="mb-4 bg-gray-100 aspect-square overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden bg-gray-100 ${
                    selectedImage === index
                      ? 'ring-2 ring-black'
                      : 'ring-1 ring-gray-200 hover:ring-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            {/* Category Badge */}
            <div className="mb-4 text-xs text-gray-500 uppercase tracking-widest">
              {product.category === 'girls' ? 'Girls' : 'Boys'} • {product.ageGroup}
              {product.featured && (
                <span className="ml-3 text-black font-semibold">Featured</span>
              )}
            </div>

            {/* Product Name */}
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-black mb-6 tracking-tight uppercase">
              {product.name}
            </h1>

            {/* Price */}
            <div className="mb-8">
              <span className="text-3xl font-display font-bold text-black">
                {formatPrice(product.price)}
              </span>
            </div>

            {/* Description */}
            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Material */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h3 className="text-xs font-display font-semibold text-black mb-2 uppercase tracking-widest">Material</h3>
              <p className="text-gray-600">{product.material}</p>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="text-xs font-display font-semibold text-black mb-4 uppercase tracking-widest">
                Select Size {selectedSize && `• ${selectedSize}`}
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 border-2 font-display font-semibold uppercase text-sm tracking-wider transition-all ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 text-black hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-10">
              <h3 className="text-xs font-display font-semibold text-black mb-4 uppercase tracking-widest">
                Available Colors {selectedColor && `• ${selectedColor}`}
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-6 py-3 border-2 font-display font-semibold uppercase text-sm tracking-wider transition-all ${
                      selectedColor === color
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 text-black hover:border-black'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4 mb-10">
              <button
                onClick={handleContact}
                className="w-full btn-primary"
              >
                Contact to Order
              </button>
              <button
                onClick={() => navigate('/products')}
                className="w-full btn-secondary"
              >
                Continue Shopping
              </button>
            </div>

            {/* Additional Info */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xs font-display font-semibold text-black mb-4 uppercase tracking-widest">Product Details</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Handcrafted with premium materials</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Comfortable and durable for active kids</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Easy to care for and machine washable</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Custom sizing available on request</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 border-t border-gray-200 pt-24">
            <h2 className="text-3xl font-display font-bold text-black mb-12 uppercase tracking-tight">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/products/${relatedProduct.id}`}
                  className="group"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <div className="relative overflow-hidden bg-gray-100 aspect-[3/4] mb-4">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-semibold text-black mb-2 group-hover:text-gray-600 transition-colors uppercase tracking-wide">
                      {relatedProduct.name}
                    </h3>
                    <span className="text-sm font-medium text-black">
                      {formatPrice(relatedProduct.price)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
