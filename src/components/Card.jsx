import React, { useState } from 'react';
import { StarFill, Heart, HeartFill, Bag } from 'react-bootstrap-icons';

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
    <div className="card product-card  h-100 bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border-0 shadow-md"> {/* Enhanced shadow */}
      {/* Sale Badge */}
      {product.isOnSale && (
        <span className="badge bg-red-600 text-white position-absolute top-2 left-2 px-2 py-1 text-xs font-bold z-10 shadow-sm">
          SALE
        </span>
      )}
  
      {/* Favorite Button */}
      <button
        className="btn btn-sm position-absolute top-2 right-2 bg-white rounded-full z-10 p-2 shadow-md hover:bg-gray-100 transition-colors"
        onClick={() => setIsFavorite(!isFavorite)}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        {isFavorite ? (
          <HeartFill className="text-red-500" size={16} />
        ) : (
          <Heart className="text-gray-400" size={16} />
        )}
      </button>
  
      {/* Product Image */}
      <div className="overflow-hidden position-relative bg-gray-100" style={{ height: "250px" }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
      </div>
  
      {/* Product Details */}
      <div className="card-body flex flex-col p-4">
        <div className="flex justify-between mb-2">
          <div className="flex-grow-1 pr-2">
            <h5 className="font-medium text-gray-900 mb-1 line-clamp-2">
              {product.name}
            </h5>
            <p className="text-gray-500 text-sm">{product.category}</p>
          </div>
          <div className="flex-shrink-0">
            <div className="font-bold text-gray-900">
              ${product.price.toFixed(2)}
              {product.originalPrice && (
                <span className="text-gray-400 text-sm line-through ml-1">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>
  
        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex mr-2">
            {[...Array(5)].map((_, i) => (
              <StarFill
                key={i}
                className={`${i < product.rating ? 'text-yellow-400' : 'text-gray-300'} mr-1`}
                size={14}
              />
            ))}
          </div>
          <span className="text-gray-500 text-sm">({product.reviewCount || 0})</span>
        </div>
  
        {/* Color Variants */}
        {product.colors?.length > 0 && (
          <div className="flex gap-2 mb-4 flex-wrap">
            {product.colors.map((color, i) => (
              <button
                key={i}
                className="rounded-full border border-gray-200 w-5 h-5 hover:border-gray-400 transition-colors shadow-sm"
                style={{ backgroundColor: color }}
                aria-label={`Color option ${color}`}
              />
            ))}
          </div>
        )}
  
        {/* Add to Cart Button */}
        <button 
          className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          <Bag size={16} />
          <span className="font-medium">Add to Cart</span>
        </button>
      </div>
    </div>
  </div>
  );
};

export default ProductCard;