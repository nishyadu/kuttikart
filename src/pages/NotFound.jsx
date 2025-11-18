import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-4 max-w-2xl">
        <div className="mb-12">
          <h1 className="text-9xl font-display font-bold text-black mb-6 tracking-tight">404</h1>
          <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
        </div>
        
        <h2 className="text-3xl font-display font-bold text-black mb-6 uppercase tracking-tight">
          Page Not Found
        </h2>
        
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          The page you're looking for doesn't exist. 
          Let's get you back to shopping for premium kids clothing.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            Go to Homepage
          </Link>
          <Link to="/products" className="btn-secondary">
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
