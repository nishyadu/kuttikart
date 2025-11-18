import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="group block"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100 aspect-[3/4] mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        {product.featured && (
          <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs font-medium uppercase tracking-wider">
            Featured
          </div>
        )}
        
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
        <div className="absolute bottom-4 left-0 right-0 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white text-black text-center py-3 text-sm font-display font-semibold uppercase tracking-wider">
            Quick View
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div>
        <div className="flex items-center gap-2 mb-2 text-xs text-gray-500 uppercase tracking-wider">
          <span>{product.category === 'girls' ? 'Girls' : 'Boys'}</span>
          <span>•</span>
          <span>{product.ageGroup}</span>
        </div>
        
        <h3 className="text-base font-display font-semibold text-black mb-2 group-hover:text-gray-600 transition-colors uppercase tracking-wide">
          {product.name}
        </h3>
        
        <div className="text-sm font-medium text-black">
          {formatPrice(product.price)}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
