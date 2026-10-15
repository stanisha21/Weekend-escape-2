import { Compass, BookOpen, MapPin, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="mt-20 border-t border-[#e2dacb] bg-[#f4efe6] text-[#44403c] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & Purpose */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#183b2b]">
              Weekend Escape
            </span>
            <p className="text-sm text-[#57534e] leading-relaxed max-w-sm">
              Your mindful guide to short travels, nature retreats, and weekend getaways near Mumbai. Curated itineraries, gear selection advice, and practical travel guides to help you unwind effortlessly.
            </p>
            <div className="pt-1 text-xs text-[#78716c]">
              Independent travel publication · 100% informational.
            </div>
          </div>

          {/* Quick Guides & Articles */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-serif text-base font-semibold text-[#183b2b]">
              Featured Travel Guides
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/weekend-getaways-near-mumbai')}
                  className="hover:text-[#183b2b] hover:underline text-left cursor-pointer transition-colors"
                >
                  Places to Visit Near Mumbai
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/weekend-travel-bags')}
                  className="hover:text-[#183b2b] hover:underline text-left cursor-pointer transition-colors"
                >
                  Travel Bags: How to Choose the Right Bag
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/weekend-travel-packages')}
                  className="hover:text-[#183b2b] hover:underline text-left cursor-pointer transition-colors"
                >
                  Tour Packages: How to Choose the Right Trip
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/weekend-travel-agency')}
                  className="hover:text-[#183b2b] hover:underline text-left cursor-pointer transition-colors"
                >
                  Travel Agencies Near Me: How to Choose One
                </button>
              </li>
            </ul>
          </div>

          {/* Editorial Standards */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-serif text-base font-semibold text-[#183b2b]">
              Editorial Standards
            </h3>
            <p className="text-xs text-[#57534e] leading-relaxed">
              Every travel distance, route tip, gear recommendation, and agency vetting criterion is grounded in realistic logistics across Maharashtra without commercial sponsorships or artificial ratings.
            </p>
            <div className="pt-2 text-xs text-[#78716c]">
              Updated regularly for Maharashtra travelers.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#dcd3bd] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716c]">
          <p>© {new Date().getFullYear()} Weekend Escape – Weekend Travel Guide. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('/')}
              className="hover:text-[#183b2b] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('/weekend-getaways-near-mumbai')}
              className="hover:text-[#183b2b] transition-colors cursor-pointer"
            >
              Places Near Mumbai
            </button>
            <button
              onClick={() => onNavigate('/weekend-travel-bags')}
              className="hover:text-[#183b2b] transition-colors cursor-pointer"
            >
              Travel Bags
            </button>
            <button
              onClick={() => onNavigate('/weekend-travel-packages')}
              className="hover:text-[#183b2b] transition-colors cursor-pointer"
            >
              Tour Packages
            </button>
            <button
              onClick={() => onNavigate('/weekend-travel-agency')}
              className="hover:text-[#183b2b] transition-colors cursor-pointer"
            >
              Travel Agencies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
