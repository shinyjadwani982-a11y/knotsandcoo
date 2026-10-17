import React, { useState } from 'react';
import { ShoppingBag, Heart, Sparkles, Search, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenQuiz: () => void;
  onOpenCustomStudio: () => void;
  onNavigateSection: (sectionId: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenQuiz,
  onOpenCustomStudio,
  onNavigateSection,
  searchQuery,
  onSearchChange
}) => {
  const [showBanner, setShowBanner] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#FFF8EF]/95 border-b border-[#EADFD0] transition-all">
      {/* Optional Slim Announcement Banner (Under 40px) in Butter Yellow */}
      {showBanner && (
        <div className="relative bg-[#F6D96B] text-[#382820] text-xs py-2 px-4 text-center border-b border-[#EBCC57] flex items-center justify-center gap-2 font-medium">
          <span>Ordinary things. Personal meanings. Made by hand.</span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span className="hidden sm:inline font-semibold text-[#C83D46]">Complimentary handwritten gift card on all orders ♡</span>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#382820]/70 hover:text-[#382820] transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Strict 3-Zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onNavigateSection('hero')}
          className="text-2xl sm:text-3xl font-display font-medium tracking-tight text-[#382820] hover:text-[#C83D46] transition-colors whitespace-nowrap shrink-0 text-left"
        >
          Knots &amp; Co.
        </button>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#382820]/80">
          <button
            onClick={() => onNavigateSection('catalog')}
            className="hover:text-[#C83D46] transition-colors whitespace-nowrap shrink-0"
          >
            Shop Creations
          </button>
          <button
            onClick={() => onNavigateSection('personalities')}
            className="hover:text-[#C83D46] transition-colors whitespace-nowrap shrink-0"
          >
            Shop Personality
          </button>
          <button
            onClick={onOpenQuiz}
            className="flex items-center gap-1.5 text-[#C83D46] hover:text-[#A92D35] font-semibold transition-colors whitespace-nowrap shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C83D46]" />
            <span>Find Your Knot</span>
          </button>
          <button
            onClick={onOpenCustomStudio}
            className="hover:text-[#C83D46] transition-colors whitespace-nowrap shrink-0"
          >
            Make It Yours
          </button>
          <button
            onClick={() => onNavigateSection('our-story')}
            className="hover:text-[#C83D46] transition-colors whitespace-nowrap shrink-0"
          >
            Our Story
          </button>
        </nav>

        {/* Zone 3: Primary Action & Kept Affordances */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Quick Search Input or Toggle */}
          <div className="relative">
            {isSearchOpen ? (
              <div className="flex items-center bg-white border border-[#E0D2C1] rounded-full px-3 py-1 shadow-sm">
                <Search className="w-3.5 h-3.5 text-[#8E786E] mr-2" />
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="text-xs bg-transparent focus:outline-none w-36 sm:w-48 text-[#382820] placeholder:text-[#8E786E]"
                  autoFocus
                />
                <button
                  onClick={() => {
                    setIsSearchOpen(false);
                    onSearchChange('');
                  }}
                  className="text-[#8E786E] hover:text-[#382820] ml-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-[#382820] hover:text-[#C83D46] rounded-full hover:bg-[#F7E3E3]/60 transition-colors"
                title="Search little things"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            className="relative p-2 text-[#382820] hover:text-[#C83D46] rounded-full hover:bg-[#F7E3E3]/60 transition-colors"
            title="Things you're not ready to let go of"
            aria-label="Wishlist"
          >
            <Heart className="w-4 h-4" />
            {wishlistCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#C83D46] text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Bag Button (Primary Action - Cherry Red) */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 bg-[#C83D46] text-white hover:bg-[#A92D35] px-4 py-2 rounded-full text-xs font-semibold tracking-wide shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Bag</span>
            <span className="tabular-nums font-bold">({cartCount})</span>
          </button>
        </div>
      </div>
    </header>
  );
};
