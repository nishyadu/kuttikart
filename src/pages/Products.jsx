import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories, ageGroups, types } from '../data/products';
import ProductCard from '../components/products/ProductCard';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    if (selectedAgeGroup !== 'all') {
      filtered = filtered.filter((product) => {
        const ageRange = product.ageGroup.toLowerCase();
        if (selectedAgeGroup === '1-3') {
          return ageRange.includes('1') || ageRange.includes('2') || ageRange.includes('3');
        } else if (selectedAgeGroup === '3-6') {
          return ageRange.includes('3') || ageRange.includes('4') || ageRange.includes('5') || ageRange.includes('6');
        } else if (selectedAgeGroup === '6-10') {
          return ageRange.includes('6') || ageRange.includes('7') || ageRange.includes('8') || ageRange.includes('9') || ageRange.includes('10');
        }
        return true;
      });
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter((product) => product.type === selectedType);
    }

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedAgeGroup, selectedType, searchQuery]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category !== 'all') {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-5xl font-display font-bold text-black mb-4 tracking-tight">
            SHOP COLLECTION
          </h1>
          <p className="text-lg text-gray-600">
            Premium kids clothing designed for style and comfort
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h2 className="text-sm font-display font-bold text-black mb-6 uppercase tracking-widest">Filters</h2>

              {/* Search */}
              <div className="mb-8">
                <label className="block text-xs font-medium text-gray-700 mb-3 uppercase tracking-wider">
                  Search
                </label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-black transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-xs font-medium text-black mb-3 uppercase tracking-wider">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-black text-white'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="flex justify-between items-center">
                        <span className="uppercase tracking-wide">{category.name}</span>
                        <span className="text-xs">{category.count}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Age Group Filter */}
              <div className="mb-8">
                <h3 className="text-xs font-medium text-black mb-3 uppercase tracking-wider">Age Group</h3>
                <div className="space-y-2">
                  {ageGroups.map((ageGroup) => (
                    <button
                      key={ageGroup.id}
                      onClick={() => setSelectedAgeGroup(ageGroup.id)}
                      className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                        selectedAgeGroup === ageGroup.id
                          ? 'bg-black text-white'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="uppercase tracking-wide">{ageGroup.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Type Filter */}
              <div className="mb-8">
                <h3 className="text-xs font-medium text-black mb-3 uppercase tracking-wider">Type</h3>
                <div className="space-y-2">
                  {types.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                        selectedType === type.id
                          ? 'bg-black text-white'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="uppercase tracking-wide">{type.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedAgeGroup('all');
                  setSelectedType('all');
                  setSearchQuery('');
                  setSearchParams({});
                }}
                className="w-full px-4 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors text-sm font-display font-semibold uppercase tracking-wider"
              >
                Reset All
              </button>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-4">
              <p className="text-sm text-gray-600 uppercase tracking-wider">
                <span className="font-semibold text-black">{filteredProducts.length}</span> Products
              </p>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <svg
                  className="mx-auto h-16 w-16 text-gray-400 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-lg font-display font-semibold text-black mb-2 uppercase tracking-wide">No Products Found</h3>
                <p className="text-gray-500">
                  Try adjusting your filters or search query
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
