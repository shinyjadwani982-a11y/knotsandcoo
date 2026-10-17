import React from 'react';
import { Star, Heart } from 'lucide-react';
import { REVIEWS } from '../data/products';

export const CustomerStories: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#F0F5ED] border-b border-[#DFE8DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-[#586B49] font-bold">
            Real Experiences
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-display font-medium text-[#382820] tracking-tight text-balance">
            Things people are knotting about.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#382820]/80">
            Little moments of joy shared by people who gave their everyday items a personality.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-[#DFE8DC] shadow-xs hover:border-[#A8B99A] hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Highlight Quote */}
                {rev.highlight && (
                  <p className="text-xs font-bold text-[#C83D46] uppercase tracking-wider mb-2">
                    “{rev.highlight}”
                  </p>
                )}

                {/* Stars */}
                <div className="flex items-center gap-1 text-[#F6D96B] mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs text-[#382820]/80 leading-relaxed italic font-serif">
                  “{rev.comment}”
                </p>
              </div>

              {/* Author & Item with Avatar */}
              <div className="mt-6 pt-4 border-t border-[#F0EBE1] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#F6D96B] text-[#382820] font-serif text-xs font-bold flex items-center justify-center shrink-0 shadow-2xs">
                    {rev.avatarLetter}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#382820]">{rev.author}</p>
                    <p className="text-[10px] text-[#586B49] font-medium mt-0.5">{rev.productName}</p>
                  </div>
                </div>
                <span className="text-[10px] text-[#8E786E]">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
