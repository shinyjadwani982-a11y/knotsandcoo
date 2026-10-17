import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface BrandPhilosophyProps {
  onLearnMore: () => void;
  onOpenQuiz: () => void;
}

export const BrandPhilosophy: React.FC<BrandPhilosophyProps> = ({ onLearnMore, onOpenQuiz }) => {
  return (
    <section id="our-story" className="py-16 sm:py-20 bg-[#FFF8EF] border-y border-[#EADFD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-[#C83D46] font-semibold">
            Our Brand Philosophy
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-display font-medium text-[#382820] tracking-tight text-balance">
            Why should ordinary stay ordinary?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#382820]/80 leading-relaxed">
            Your bag doesn't have to look like everyone else's on the metro. Your study desk doesn't have to feel sterile. Your gifts don't have to end up at the bottom of a drawer.
          </p>
        </div>

        {/* 3-Column Mindset Shift (Transforming Ordinary to Personal) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EADFD0] shadow-sm hover:border-[#C83D46]/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#586B49] bg-[#A8B99A]/20 px-2.5 py-0.5 rounded-full font-semibold inline-block">
                Everyday Accessories
              </span>
              <p className="mt-3 text-sm text-[#8E786E] line-through">
                “I need a bag charm.”
              </p>
              <h3 className="mt-2 text-lg font-serif font-medium text-[#382820] leading-snug">
                “I want something that makes my bag feel like mine.”
              </h3>
              <p className="mt-3 text-xs text-[#382820]/80 leading-relaxed">
                Hand-knotted strawberries, daisies, and charms that turn a standard tote into an extension of who you are.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F5EBE1] text-xs font-script text-[#C83D46] font-bold text-right">
              tiny dopamine in your pocket ♡
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EADFD0] shadow-sm hover:border-[#C83D46]/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#C83D46] bg-[#F7E3E3] px-2.5 py-0.5 rounded-full font-semibold inline-block">
                Meaningful Gifting
              </span>
              <p className="mt-3 text-sm text-[#8E786E] line-through">
                “I need to find a gift.”
              </p>
              <h3 className="mt-2 text-lg font-serif font-medium text-[#382820] leading-snug">
                “I want something that reminds them of me.”
              </h3>
              <p className="mt-3 text-xs text-[#382820]/80 leading-relaxed">
                Every stem, bookmark, or charm is gifted with a handwritten card and intentional craft that carries emotional weight.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F5EBE1] text-xs font-script text-[#C83D46] font-bold text-right">
              not another forgettable box ♡
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EADFD0] shadow-sm hover:border-[#C83D46]/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#382820] bg-[#F6D96B]/50 px-2.5 py-0.5 rounded-full font-semibold inline-block">
                Floral Keepsakes
              </span>
              <p className="mt-3 text-sm text-[#8E786E] line-through">
                “I want a fresh flower.”
              </p>
              <h3 className="mt-2 text-lg font-serif font-medium text-[#382820] leading-snug">
                “I want a flower that never feels ordinary or fades.”
              </h3>
              <p className="mt-3 text-xs text-[#382820]/80 leading-relaxed">
                Milk-cotton yarn shaped with supple inner wire. Stays vivid on your nightstand for years without a single dropped petal.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F5EBE1] text-xs font-script text-[#C83D46] font-bold text-right">
              everlasting warmth ♡
            </div>
          </div>
        </div>

        {/* Quiet Editorial Quote Banner / Secondary Button in Butter Yellow */}
        <div className="mt-12 max-w-2xl mx-auto text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenQuiz}
            className="inline-flex items-center gap-2 bg-[#F6D96B] text-[#382820] hover:bg-[#EBCC57] border border-[#E5C74F] px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all shadow-xs hover:shadow"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C83D46]" />
            <span>Discover your crochet personality</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
