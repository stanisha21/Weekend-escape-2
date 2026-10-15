import { useState } from 'react';
import { Menu, X, Compass } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Places Near Mumbai', path: '/weekend-getaways-near-mumbai' },
    { label: 'Travel Bags', path: '/weekend-travel-bags' },
    { label: 'Tour Packages', path: '/weekend-travel-packages' },
    { label: 'Travel Agencies', path: '/weekend-travel-agency' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#faf7f2]/95 backdrop-blur-md border-b border-[#e7e1d5] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
            aria-label="Weekend Escape Home"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#183b2b] whitespace-nowrap shrink-0 group-hover:text-[#2d5a3f] transition-colors">
              Weekend Escape
            </span>
          </button>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#57534e]">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer focus:outline-none ${
                    isActive
                      ? 'text-[#183b2b] font-semibold'
                      : 'hover:text-[#183b2b]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#183b2b] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleLinkClick('/weekend-getaways-near-mumbai')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#183b2b] hover:bg-[#254f3a] rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-xs"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Explore Guides</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#183b2b] hover:bg-[#f0ebd8] rounded-md focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#e7e1d5] bg-[#fbf9f5] px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#eadecd]/60 text-[#183b2b] font-semibold'
                    : 'text-[#44403c] hover:bg-[#f4efe6] hover:text-[#183b2b]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
