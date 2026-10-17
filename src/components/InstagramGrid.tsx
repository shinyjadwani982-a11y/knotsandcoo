import React from 'react';
import { INSTAGRAM_POSTS } from '../data/products';
import { Heart, Instagram } from 'lucide-react';

interface InstagramGridProps {
  onSelectTag: (productTag: string) => void;
}

export const InstagramGrid: React.FC<InstagramGridProps> = ({ onSelectTag }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#FFF8EF] border-b border-[#EADFD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C83D46]">
              <Instagram className="w-3.5 h-3.5 text-[#C83D46]" />
              <span>@knotsandco.studio</span>
            </div>
            <h2 className="mt-1 text-3xl sm:text-4xl font-display font-medium text-[#382820] tracking-tight">
              Made for Your Everyday ♡
            </h2>
            <p className="mt-1 text-sm text-[#382820]/80">
              A little inspiration for styling your favorite handmade pieces.
            </p>
          </div>
          <p className="mt-2 sm:mt-0 text-xs sm:text-sm text-[#586B49] font-script text-base font-bold">
            tag #myknots to be featured in our community reel
          </p>
        </div>

        {/* 4-Column UGC Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#EADFD0] aspect-square flex flex-col justify-end shadow-xs hover:shadow-lg hover:border-[#C83D46]/40 transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#382820]/90 via-[#382820]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                <p className="text-[11px] font-semibold tracking-wide text-white/90">
                  {post.handle}
                </p>
                <p className="text-[10px] text-white/80 line-clamp-2 mt-0.5 leading-snug">
                  {post.caption}
                </p>
                <div className="mt-2 pt-2 border-t border-white/20 flex items-center justify-between text-[10px]">
                  <span className="text-[#F6D96B] font-bold underline underline-offset-2">
                    {post.productTag}
                  </span>
                  <Heart className="w-3.5 h-3.5 fill-[#C83D46] text-[#C83D46]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
