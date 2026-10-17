import React, { useState } from 'react';
import { Heart, Eye, Check, Star, ShoppingBag } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
}) => {
  const [isKnotted, setIsKnotted] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setIsKnotted(true);
    setTimeout(() => {
      setIsKnotted(false);
    }, 1800);
  };

  return (
    <div
      onClick={() => onQuickView(product)}
      className="group relative bg-white rounded-2xl border border-[#E9E1D6] overflow-hidden transition-all duration-300 hover:border-[#D6C4B4] hover:shadow-md hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
    >
      {/* Visual Asset Area */}
      <div className="relative aspect-[4/3] bg-[#FFF8EF] overflow-hidden">
        {imageFailed ? (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#FFF8EF]">
            <span className="text-3xl mb-2">🧶</span>
            <span className="text-xs font-semibold text-[#382820]">{product.name}</span>
            <span className="text-[10px] text-[#8E786E] mt-1">Hand-knotted with milk cotton</span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImageFailed(true)}
            className={`w-full h-full ${
              product.id === 'crochet-market-tote' || product.categorySlug === 'bags'
                ? 'object-contain object-center p-3 mix-blend-multiply'
                : 'object-cover object-center'
            } transition-transform duration-500 group-hover:scale-105`}
            referrerPolicy="no-referrer"
          />
        )}

        {/* Minimalist Top Badge (Cherry Red or Butter Yellow) */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#C83D46] text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md shadow-xs">
            {product.badge}
          </span>
        )}

        {/* Top Right Floating Wishlist Heart */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/95 backdrop-blur-xs text-[#382820] hover:text-[#C83D46] hover:bg-[#F7E3E3] transition-colors shadow-xs"
          title={isWishlisted ? 'Saved to keepsake list' : 'Add to keepsakes'}
          aria-label="Wishlist toggle"
        >
          <Heart
            className={`w-4 h-4 transition-transform active:scale-125 ${
              isWishlisted ? 'fill-[#C83D46] text-[#C83D46]' : ''
            }`}
          />
        </button>

        {/* Quick View Button Hover Reveal */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[#382820] hover:bg-[#F6D96B] text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap"
        >
          <Eye className="w-3.5 h-3.5 text-[#C83D46]" />
          <span>Quick peek</span>
        </button>
      </div>

      {/* Content & Metadata Area */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Subtle Category & Rating line */}
          <div className="flex items-center justify-between text-xs text-[#8E786E] mb-2">
            <span className="text-[10px] uppercase tracking-wider font-bold text-[#586B49] bg-[#A8B99A]/20 px-2 py-0.5 rounded-md">
              {product.categorySlug}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-[#F6D96B] text-[#F6D96B]" />
              <span className="tabular-nums font-semibold text-[#382820]">{product.rating}</span>
              <span className="text-[11px] text-[#8E786E]">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 className="text-base font-serif font-medium text-[#382820] tracking-tight group-hover:text-[#C83D46] transition-colors leading-snug">
            {product.name}
          </h3>

          {/* Personality Subtitle */}
          <p className="mt-1 text-xs text-[#382820]/75 leading-relaxed line-clamp-2 italic font-serif">
            “{product.personalitySubtitle}”
          </p>
        </div>

        {/* Price & Add to Cart Footer */}
        <div className="mt-5 pt-3 border-t border-[#F0EBE1] flex items-center justify-between gap-3">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-[#C83D46] tabular-nums">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#8E786E] line-through tabular-nums">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          <button
            onClick={handleAdd}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 shadow-xs ${
              isKnotted
                ? 'bg-[#A8B99A] text-white'
                : 'bg-[#F6D96B] text-[#382820] hover:bg-[#EBCC57] border border-[#E5C74F]'
            }`}
            aria-label={`Add ${product.name} to bag`}
          >
            {isKnotted ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Knotted! ✓</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 text-[#C83D46]" />
                <span>I want this ♡</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
