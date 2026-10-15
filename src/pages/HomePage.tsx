import { ArrowRight, ChevronRight } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { SEOHead } from '../components/SEOHead';
import heroLandscapeImg from '../assets/images/hero_maharashtra_landscape_1791897168100.jpg';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const scrollToDestinations = () => {
    const el = document.getElementById('articles-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEOHead
        title="Places to Visit Near Mumbai | Weekend Escape"
        description="Discover places to visit near Mumbai with destination guides, weekend getaway ideas and practical tips for planning your next short trip."
        canonicalPath="/"
        keywords={[
          'places to visit near Mumbai',
          'tourist places near Mumbai',
          'weekend getaways near Mumbai',
          'places to visit near Mumbai for 2 days',
          'travel bags',
          'tour packages',
          'travel agencies near me',
        ]}
      />

      <div className="space-y-16 sm:space-y-24">
        {/* HERO SECTION */}
        <section className="relative pt-6 sm:pt-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Editorial Headline & Introduction */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#2d5a3f]">
                    Weekend Travel Guide & Trip Planner
                  </span>
                  <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#183b2b] leading-[1.18] text-balance">
                    Discover Scenic Places to Visit Near Mumbai:
                    <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2d5a3f] mt-2 font-serif">
                      Weekend Getaways & Short Trips
                    </span>
                  </h1>
                </div>

                <div className="space-y-4 text-base sm:text-lg text-[#44403c] leading-relaxed max-w-xl">
                  <p>
                    When urban life in the city becomes hectic, an easy, refreshing escape is waiting just beyond city borders. Finding the top{' '}
                    <strong className="font-semibold text-[#183b2b]">places to visit near Mumbai</strong> gives you the chance to breathe cool mountain air, stroll along peaceful beaches, and recharge without taking extended leaves.
                  </p>
                  <p className="text-base text-[#57534e]">
                    <strong className="font-medium text-[#183b2b]">Weekend Escape</strong> is your dedicated travel guide for discovering popular <strong className="font-medium text-[#183b2b]">tourist places near Mumbai</strong>, exploring rewarding <strong className="font-medium text-[#183b2b]">weekend getaways near Mumbai</strong>, and planning rewarding <strong className="font-medium text-[#183b2b]">places to visit near Mumbai for 2 days</strong>. From selecting ergonomic <strong className="font-medium text-[#183b2b]">travel bags</strong> to evaluating all-inclusive <strong className="font-medium text-[#183b2b]">tour packages</strong> and finding reliable <strong className="font-medium text-[#183b2b]">travel agencies near me</strong>, we provide honest, field-tested guidance.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={scrollToDestinations}
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#183b2b] hover:bg-[#234c38] rounded-md transition-colors shadow-sm cursor-pointer whitespace-nowrap"
                  >
                    <span>Explore Places Near Mumbai</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onNavigate('/weekend-travel-bags')}
                    className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-[#183b2b] bg-[#f0ebd8] hover:bg-[#e7e0c9] border border-[#dcd3bd] rounded-md transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>Travel Bags Guide</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Hero Landscape Image */}
              <div className="lg:col-span-5">
                <figure className="relative rounded-2xl overflow-hidden border border-[#dcd3bd] shadow-md bg-[#ede7d9] group">
                  <img
                    src={heroLandscapeImg}
                    alt="Scenic green mountain landscape in the Western Ghats representing top places to visit near Mumbai"
                    referrerPolicy="no-referrer"
                    className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-102"
                  />
                  <figcaption className="p-3 bg-[#f4efe6] border-t border-[#e2dacb] text-xs text-[#57534e] flex items-center justify-between">
                    <span>Western Ghats Sahyadri mountain pass</span>
                    <span className="text-[#78716c]">Maharashtra</span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED ARTICLES CARDS GRID - 4 ARTICLES */}
        <section id="articles-section" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="border-t border-[#e2dacb] pt-12 pb-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#2d5a3f]">
                  Curated Reading
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#183b2b] mt-1">
                  Top Guides: Places to Visit Near Mumbai, Gear & Packages
                </h2>
              </div>
              <p className="text-sm text-[#57534e] max-w-md">
                Four comprehensive guides covering popular tourist places near Mumbai, travel bag selection, comparing tour packages, and vetting travel agencies near you.
              </p>
            </div>

            {/* Four Article Cards in 2x2 Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ARTICLES.map((article) => (
                <article
                  key={article.slug}
                  className="bg-[#fbf9f5] border border-[#e2dacb] rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group"
                >
                  {/* Card Image */}
                  <div
                    onClick={() => onNavigate(article.path)}
                    className="relative aspect-16/10 overflow-hidden bg-[#ede7d9] cursor-pointer"
                  >
                    <img
                      src={article.image}
                      alt={article.imageAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                    <div className="absolute top-3 left-3 bg-[#faf7f2]/90 backdrop-blur-xs px-2.5 py-1 rounded text-xs font-medium text-[#183b2b]">
                      {article.category}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2 text-xs text-[#78716c]">
                        <span>{article.readTime}</span>
                        <span aria-hidden="true">·</span>
                        <span>{article.wordCount} words</span>
                      </div>

                      <h3 className="font-serif text-xl font-bold text-[#183b2b] group-hover:text-[#2d5a3f] transition-colors line-clamp-2">
                        <button
                          onClick={() => onNavigate(article.path)}
                          className="text-left cursor-pointer focus:outline-none"
                        >
                          {article.title}
                        </button>
                      </h3>

                      <p className="text-sm text-[#57534e] leading-relaxed line-clamp-3">
                        {article.shortDescription}
                      </p>
                    </div>

                    {/* Read More Link */}
                    <div className="pt-3 border-t border-[#ece5d8]">
                      <button
                        onClick={() => onNavigate(article.path)}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#183b2b] group-hover:text-[#2d5a3f] transition-colors cursor-pointer"
                      >
                        <span>
                          {article.slug === 'weekend-getaways-near-mumbai' && 'Explore Places to Visit Near Mumbai'}
                          {article.slug === 'weekend-travel-bags' && 'Read Travel Bags Guide'}
                          {article.slug === 'weekend-travel-packages' && 'Read Tour Packages Guide'}
                          {article.slug === 'weekend-travel-agency' && 'Read Travel Agencies Guide'}
                        </span>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* AEO HIGHLIGHT SECTION: Answer Engine Optimization */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f4efe6] border border-[#e2dacb] rounded-2xl p-6 sm:p-10 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#2d5a3f]">
                Traveler Quick Answers
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#183b2b]">
                Which places are best to visit near Mumbai for 2 days?
              </h2>
            </div>

            <div className="space-y-4 text-base text-[#44403c] leading-relaxed max-w-4xl">
              <p className="text-lg font-medium text-[#183b2b] bg-[#faf7f2] p-4 rounded-lg border border-[#e2dacb]">
                The best places to visit near Mumbai for 2 days are Igatpuri and Bhandardara for tranquil lakeside camping and mountain passes, Alibaug for coastal beaches and historic sea fortresses, and Lonavala or Matheran for scenic cliff viewpoints and nature walking trails.
              </p>
              <p>
                Each destination is reachable within two to four hours by suburban rail, passenger ferry, or highway. When planning short getaways, choosing destinations along direct suburban train lines (such as Neral for Matheran or Kasara for Igatpuri) or taking the Mandwa passenger catamaran from South Mumbai eliminates Saturday morning highway toll gridlock and leaves you more time to explore.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-[#faf7f2] border border-[#e2dacb] rounded-lg">
                <div className="font-serif text-base font-bold text-[#183b2b]">Lonavala & Khandala</div>
                <div className="text-xs text-[#78716c] mt-0.5">83 km · 2 hrs drive</div>
                <p className="text-xs text-[#57534e] mt-2">
                  Iconic cliff vistas, Buddhist Karla Caves, and local chikki markets in the Sahyadris.
                </p>
              </div>

              <div className="p-4 bg-[#faf7f2] border border-[#e2dacb] rounded-lg">
                <div className="font-serif text-base font-bold text-[#183b2b]">Matheran Hill Station</div>
                <div className="text-xs text-[#78716c] mt-0.5">80 km · Train to Neral</div>
                <p className="text-xs text-[#57534e] mt-2">
                  Unspoiled mountain air, dense woodland trails, and no motor vehicle noise.
                </p>
              </div>

              <div className="p-4 bg-[#faf7f2] border border-[#e2dacb] rounded-lg">
                <div className="font-serif text-base font-bold text-[#183b2b]">Alibaug & Mandwa</div>
                <div className="text-xs text-[#78716c] mt-0.5">50 min ferry from Gateway</div>
                <p className="text-xs text-[#57534e] mt-2">
                  Historic Kolaba sea fort, sandy beaches, and authentic Konkani seafood.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('/weekend-getaways-near-mumbai')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#183b2b] hover:text-[#2d5a3f] underline cursor-pointer"
              >
                <span>Read our full destination guide to the best places to visit near Mumbai</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-[#e2dacb] pt-12 pb-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 space-y-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#2d5a3f]">
                  Our Philosophy
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#183b2b]">
                  About Weekend Escape – Weekend Travel Guide
                </h2>
                <p className="text-sm text-[#57534e] leading-relaxed">
                  We believe that regular, mindful short trips into nature produce far greater long-term well-being than waiting months for an exhausting annual holiday.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-4 text-sm text-[#44403c] leading-relaxed">
                <p>
                  <strong>Weekend Escape</strong> is a practical travel guide created to help travelers discover places to visit near Mumbai and plan refreshing short getaways. We do not sell hotel bookings, push overpriced commercial tour packages, or accept sponsorships that distort recommendations.
                </p>
                <p>
                  Every guide on this platform emphasizes realistic logistics: public local train connections across Maharashtra, choosing durable travel bags for weekend mobility, transparent criteria for comparing tour packages, and objective vetting advice when searching for travel agencies near me. Whether you are a college student planning a weekend road trip on a tight allowance or a working professional needing 48 hours of quiet green vistas, our guides are designed to get you there with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
