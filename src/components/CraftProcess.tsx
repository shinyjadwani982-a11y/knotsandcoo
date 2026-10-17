import React from 'react';
import { ArrowRight, Sparkles, HeartHandshake } from 'lucide-react';

interface CraftProcessProps {
  onOpenCustomStudio: () => void;
}

export const CraftProcess: React.FC<CraftProcessProps> = ({ onOpenCustomStudio }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#F7E3E3] border-b border-[#EDD5D5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: High Fidelity Process Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#EADFD0] shadow-md bg-white aspect-[4/3]">
              <img
                src="/assets/images/regenerated_image_1792149856407.png"
                alt="Artisan hands crocheting a floral piece with soft pastel yarn and wooden hook"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-[#F6D96B] text-[#382820] px-3.5 py-1.5 rounded-lg border border-[#E5C74F] shadow-xs text-[11px] font-script font-bold">
                *every single stitch looped by hand ♡*
              </div>
            </div>

            {/* Subtle Floating Editorial Tag */}
            <div className="hidden sm:flex absolute -bottom-5 -right-4 bg-white border border-[#EADFD0] rounded-2xl p-4 shadow-md max-w-xs">
              <HeartHandshake className="w-5 h-5 text-[#C83D46] shrink-0 mt-0.5" />
              <div className="ml-3">
                <p className="text-xs font-bold text-[#382820]">Human Hands, Zero Automation</p>
                <p className="text-[11px] text-[#6B554B] mt-0.5">
                  Over 1,200 delicate loops per daisy bouquet.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Craft Story & Philosophy */}
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-widest text-[#C83D46] font-bold">
              The Handmade Process
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-display font-medium text-[#382820] tracking-tight text-balance">
              You can see the stitches. That’s the point.
            </h2>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-[#382820]/80 leading-relaxed">
              <p>
                No conveyor belt. No factory laser cut. No two pieces that are sterile or perfectly identical.
              </p>
              <p>
                Just milk-cotton yarn, patient hours, gentle hands, and a whole lot of tiny knots. When you look closely at a Knots &amp; Co. daisy or strawberry charm, you can see where one thread met another.
              </p>
              <p className="font-serif italic text-[#C83D46] font-medium">
                “Because in a world overflowing with mass-produced carbon copies, something that someone actually sat down and made for you feels like a quiet rebellion.”
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="mt-8 pt-6 border-t border-[#EDD5D5] grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <p className="text-xs font-bold text-[#382820]">Slow-Spun Cotton</p>
                <p className="text-[11px] text-[#6B554B] mt-1">Hypoallergenic milk-cotton with zero itch or fuzzing.</p>
              </div>
              <div>
                <p className="text-xs font-bold text-[#382820]">Pliable Inner Core</p>
                <p className="text-[11px] text-[#6B554B] mt-1">Stems bend into any vase; charms never lose shape.</p>
              </div>
              <div>
                <p className="text-xs font-bold text-[#382820]">Fair Maker Wages</p>
                <p className="text-[11px] text-[#6B554B] mt-1">Crafted by independent women artisans with respect.</p>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={onOpenCustomStudio}
                className="inline-flex items-center gap-2 bg-[#C83D46] text-white hover:bg-[#A92D35] px-6 py-3.5 rounded-full text-xs font-semibold tracking-wide shadow-md hover:shadow-lg transition-all"
              >
                <span>Make Something Yours →</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
