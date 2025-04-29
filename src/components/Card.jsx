import React, { useState } from 'react';
import { StarFill, Heart, HeartFill, Bag } from 'react-bootstrap-icons';

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4"> {/* Added bootstrap grid classes here */}
      <div className="card product-card h-100 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* Sale Badge */}
        {product.isOnSale && (
          <span className="badge bg-danger position-absolute top-0 start-0 m-2">SALE</span>
        )}
        
        {/* Favorite Button */}
        <button 
          className="btn btn-sm position-absolute top-0 end-0 m-2 bg-white rounded-circle"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          {isFavorite ? (
            <HeartFill className="text-danger" />
          ) : (
            <Heart className="text-secondary" />
          )}
        </button>

        {/* Product Image */}
        <div className="overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="card-img-top img-fluid"
            style={{
              objectFit: 'cover',
              height: '250px',
              width: '100%'
            }}
          />
        </div>

        {/* Product Details */}
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between mb-2">
            <div>
              <h5 className="card-title mb-1">{product.name}</h5>
              <p className="text-muted small">{product.category}</p>
            </div>
            <h5 className="text-dark">${product.price.toFixed(2)}</h5>
          </div>

          {/* Rating */}
          <div className="mb-2">
            {[...Array(5)].map((_, i) => (
              <StarFill 
                key={i} 
                className={i < product.rating ? 'text-warning' : 'text-secondary'} 
              />
            ))}
            <span className="small text-muted ms-1">({product.reviewCount})</span>
          </div>

          {/* Color Variants */}
          <div className="d-flex gap-2 mb-3">
            {product.colors.map((color, i) => (
              <div 
                key={i}
                className="rounded-circle border"
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: color
                }}
              />
            ))}
          </div>

          {/* Add to Cart Button */}
          <button className="btn btn-primary w-100 mt-auto">
            <Bag className="me-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;