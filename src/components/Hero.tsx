import React from 'react';
import { ArrowRight, Sparkles, HeartHandshake, Heart } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onOpenQuiz: () => void;
  onOpenCustomStudio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onOpenQuiz, onOpenCustomStudio }) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-[#F7E3E3] border-b border-[#EDD5D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Brand Story & Call to Action */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Subtle editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#C83D46] tracking-wider uppercase mb-3">
              <span>Handmade Crochet &amp; Lifestyle</span>
              <span aria-hidden="true">·</span>
              <span className="font-script text-base normal-case text-[#C83D46]">made slowly ♡</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.12] font-display font-medium text-[#382820] tracking-tight mb-5 text-balance">
              Give the ordinary a personality.
            </h1>

            {/* Supporting Copy from PRD */}
            <p className="text-base sm:text-lg text-[#382820]/80 leading-relaxed mb-8 max-w-xl">
              Handmade little things for people who aren’t afraid to make everyday life a little more <em>them</em>. A flower that stays, a charm that speaks your mood, and gifts that say everything without saying a word.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <button
                onClick={onExplore}
                className="inline-flex items-center gap-2 bg-[#C83D46] text-white hover:bg-[#A92D35] px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all hover:translate-x-0.5"
              >
                <span>Find Yours</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenQuiz}
                className="inline-flex items-center gap-2 bg-[#F6D96B] text-[#382820] hover:bg-[#EBCC57] border border-[#E5C74F] px-5 py-3.5 rounded-full text-sm font-semibold transition-all shadow-xs hover:shadow"
              >
                <Sparkles className="w-4 h-4 text-[#C83D46]" />
                <span>What's Your Vibe? (Quiz)</span>
              </button>

              <button
                onClick={onOpenCustomStudio}
                className="text-xs text-[#382820] hover:text-[#C83D46] underline underline-offset-4 font-semibold transition-colors ml-1"
              >
                Make it yours →
              </button>
            </div>

            {/* Understated Editorial Values Row (No pills) */}
            <div className="pt-6 border-t border-[#EDD5D5] grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-xs font-semibold text-[#382820] tracking-tight">100% Milk Cotton</p>
                <p className="text-[11px] text-[#6B554B] mt-0.5">Soft, tactile yarn with zero itch</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#382820] tracking-tight">Never Wilts</p>
                <p className="text-[11px] text-[#6B554B] mt-0.5">Keepsakes that last for years</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#382820] tracking-tight">Human Knotted</p>
                <p className="text-[11px] text-[#6B554B] mt-0.5">Every tiny loop stitched by hand</p>
              </div>
            </div>
          </div>

          {/* Right Column: High Fidelity Lifestyle Editorial Image */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Soft decorative backdrop glow in warm butter cream and sage */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#F6D96B]/50 via-[#F7E3E3] to-[#A8B99A]/40 rounded-3xl -rotate-1 opacity-80 filter blur-xs" />

              {/* Main Image Container - Perfectly Square */}
              <div className="relative rounded-2xl overflow-hidden border border-[#EADFD0] shadow-md bg-[#FFF8EF] aspect-square flex items-center justify-center">
                <img
                  src="/assets/images/hero_crochet_lifestyle_1792146742852.jpg"
                  alt="Handmade crochet tote bag with brown, cream, and light blue stripes"
                  className="w-full h-full object-contain object-center p-6 sm:p-8 mix-blend-multiply transition-transform duration-500 hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />

                {/* Quiet Floating Caption Card / White Rectangular Overlay */}
                <div className="absolute bottom-3 left-3 right-3 sm:left-4 sm:bottom-4 sm:right-auto sm:max-w-[290px] bg-white/95 backdrop-blur-md rounded-xl p-3 sm:p-3.5 border border-[#EADFD0] shadow-sm">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-[#C83D46]">
                      SPOTTED ON CAMPUS · Everyday Essentials
                    </span>
                    <Heart className="w-3 h-3 text-[#C83D46] fill-[#C83D46] shrink-0" />
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#382820] italic font-serif leading-relaxed">
                    “My handmade tote is the perfect companion for coffee runs, classes, and little adventures.”
                  </p>
                </div>
              </div>

              {/* Hand-annotated sticky note badge in Butter Yellow */}
              <div className="hidden sm:flex absolute -top-4 -right-3 bg-[#F6D96B] border border-[#E5C74F] rounded-xl px-3 py-2 shadow-sm rotate-3 items-center gap-2">
                <HeartHandshake className="w-3.5 h-3.5 text-[#382820]" />
                <span className="text-xs font-script text-[#382820] font-bold">
                  each piece has its own tiny story ♡
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
