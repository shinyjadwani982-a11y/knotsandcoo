import React from 'react';
import { PERSONALITY_ARCHETYPES } from '../data/products';
import { ArrowRight, Check } from 'lucide-react';

interface PersonalityGridProps {
  activePersonality: string | null;
  onSelectPersonality: (personalityTitle: string | null) => void;
}

export const PersonalityGrid: React.FC<PersonalityGridProps> = ({
  activePersonality,
  onSelectPersonality
}) => {
  return (
    <section id="personalities" className="py-16 sm:py-20 bg-[#F0F5ED] border-b border-[#DFE8DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#586B49] font-bold">
              The Personality Shop
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-display font-medium text-[#382820] tracking-tight">
              What’s your kind of little thing?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#382820]/80">
              Shopping by identity rather than boring inventory. Choose who you are today.
            </p>
          </div>

          {activePersonality && (
            <button
              onClick={() => onSelectPersonality(null)}
              className="mt-4 md:mt-0 text-xs text-[#C83D46] hover:text-[#A92D35] font-semibold underline underline-offset-4 self-start"
            >
              Reset personality filter (Showing all)
            </button>
          )}
        </div>

        {/* 6 Personality Archetype Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PERSONALITY_ARCHETYPES.map((arch) => {
            const isSelected = activePersonality === arch.title;
            return (
              <div
                key={arch.id}
                onClick={() => onSelectPersonality(isSelected ? null : arch.title)}
                className={`relative rounded-2xl p-6 sm:p-7 transition-all duration-300 cursor-pointer text-left flex flex-col justify-between border ${
                  isSelected
                    ? 'ring-2 ring-[#C83D46] shadow-md border-transparent bg-white'
                    : 'bg-white hover:bg-[#FFFAF3] border-[#DFE8DC] hover:border-[#A8B99A] shadow-xs hover:shadow-md hover:-translate-y-1'
                }`}
                style={{ backgroundColor: isSelected ? '#FFFFFF' : undefined }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl" role="img" aria-label={arch.title}>
                      {arch.emoji}
                    </span>
                    {isSelected && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-[#C83D46] px-2.5 py-1 rounded-full shadow-xs">
                        <Check className="w-3 h-3" />
                        Selected
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-serif font-medium text-[#382820] tracking-tight">
                    {arch.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#C83D46] mt-1 mb-3">
                    {arch.tagline}
                  </p>

                  <p className="text-xs text-[#382820]/75 leading-relaxed">
                    {arch.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0EBE1] flex items-center justify-between">
                  <span className="text-[11px] text-[#586B49] font-semibold">
                    {arch.matchingProductIds.length} curated pieces
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#C83D46] hover:text-[#A92D35]">
                    <span>{isSelected ? 'Viewing' : 'Explore this vibe'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
