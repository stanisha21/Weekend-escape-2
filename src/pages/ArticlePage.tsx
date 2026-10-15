import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react';
import { Article } from '../types';
import { ARTICLES } from '../data/articles';
import { SEOHead } from '../components/SEOHead';

interface ArticlePageProps {
  article: Article;
  onNavigate: (path: string) => void;
}

export function ArticlePage({ article, onNavigate }: ArticlePageProps) {
  // Find related articles (the other articles)
  const relatedArticles = ARTICLES.filter((a) =>
    article.relatedArticlePaths.includes(a.path)
  );

  return (
    <>
      <SEOHead
        title={article.seoTitle}
        description={article.metaDescription}
        canonicalPath={article.path}
        keywords={[article.mainKeyword, ...article.relatedKeywords]}
        article={article}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-16">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-[#78716c]">
            <li>
              <button
                onClick={() => onNavigate('/')}
                className="hover:text-[#183b2b] transition-colors cursor-pointer"
              >
                Home
              </button>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span className="text-[#57534e]">{article.category}</span>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-[#183b2b] font-medium truncate max-w-xs sm:max-w-sm">
              {article.title}
            </li>
          </ol>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#57534e] hover:text-[#183b2b] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Guides</span>
          </button>
        </div>

        {/* Article Header */}
        <header className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-xs text-[#2d5a3f] font-semibold uppercase tracking-wider">
            <span>{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
            <span aria-hidden="true">·</span>
            <span>{article.wordCount} words</span>
          </div>

          {/* H1 Heading */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#183b2b] leading-[1.2] text-balance">
            {article.title}
          </h1>

          {/* Editorial Bylines */}
          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-[#78716c] border-b border-[#e2dacb] pb-6">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#57534e]" />
              <span>{article.author}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#57534e]" />
              <span>Updated {article.publishedDate}</span>
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <figure className="mb-10 rounded-xl overflow-hidden border border-[#dcd3bd] shadow-sm bg-[#ede7d9]">
          <img
            src={article.image}
            alt={article.imageAlt}
            referrerPolicy="no-referrer"
            className="w-full aspect-16/10 sm:aspect-16/9 object-cover"
          />
          <figcaption className="p-3 bg-[#f4efe6] border-t border-[#e2dacb] text-xs text-[#57534e] flex flex-col sm:flex-row sm:items-center justify-between gap-1 italic">
            <span>{article.caption}</span>
            <span className="not-italic text-[11px] text-[#78716c]">Alt text: {article.imageAlt}</span>
          </figcaption>
        </figure>

        {/* Article Introduction */}
        <div className="space-y-5 text-base sm:text-lg text-[#333] leading-relaxed mb-12">
          {article.introduction.map((para, index) => (
            <p
              key={index}
              className={
                index === 0
                  ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#183b2b] first-letter:leading-none'
                  : ''
              }
            >
              {para}
            </p>
          ))}
        </div>

        {/* Article Content Sections */}
        <div className="space-y-12">
          {article.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              {/* Question-based H2 Heading */}
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#183b2b] tracking-tight pt-4 border-t border-[#e2dacb]/60">
                {section.heading}
              </h2>

              {/* AEO Direct Answer Box (if present) */}
              {section.directAnswer && (
                <div className="p-4 sm:p-5 bg-[#f4efe6] border border-[#dcd3bd] rounded-lg my-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2d5a3f] block mb-1">
                    Direct Answer
                  </span>
                  <p className="text-sm sm:text-base font-medium text-[#183b2b] leading-relaxed">
                    {section.directAnswer}
                  </p>
                </div>
              )}

              {/* Detailed Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-[#44403c] leading-relaxed">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {/* Bullet Points */}
              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="space-y-2.5 my-4 bg-[#fbf9f5] p-5 rounded-lg border border-[#e2dacb] text-sm text-[#44403c]">
                  {section.bulletPoints.map((bp, bpIdx) => (
                    <li key={bpIdx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2d5a3f] mt-2 shrink-0" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Table Data (e.g. Comparison Table) */}
              {section.tableData && (
                <div className="my-6 border border-[#dcd3bd] rounded-lg overflow-x-auto bg-white">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#ede7d9] text-[#183b2b] font-semibold border-b border-[#dcd3bd]">
                        {section.tableData.headers.map((h, hIdx) => (
                          <th key={hIdx} className="py-3 px-4">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#ece5d8] text-[#44403c]">
                      {section.tableData.rows.map((row, rIdx) => (
                        <tr
                          key={rIdx}
                          className={
                            rIdx % 2 === 0 ? 'bg-[#faf7f2]' : 'hover:bg-[#faf7f2]'
                          }
                        >
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="py-3 px-4 text-xs sm:text-sm">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Conclusion */}
        <section className="mt-14 pt-8 border-t border-[#e2dacb] space-y-4">
          <h2 className="font-serif text-2xl font-bold text-[#183b2b]">
            Final Thoughts & Next Steps
          </h2>
          <div className="space-y-4 text-base text-[#44403c] leading-relaxed">
            {article.conclusion.map((cPara, cIdx) => (
              <p key={cIdx}>{cPara}</p>
            ))}
          </div>

          {/* Internal Navigation Anchors */}
          <div className="p-5 bg-[#f4efe6] border border-[#dcd3bd] rounded-lg mt-6 space-y-3">
            <h3 className="font-serif text-base font-semibold text-[#183b2b]">
              Continue Exploring Weekend Guides
            </h3>
            <ul className="space-y-2 text-sm text-[#44403c]">
              {article.slug !== 'weekend-getaways-near-mumbai' && (
                <li>
                  👉 Discover destinations in our{' '}
                  <button
                    onClick={() => onNavigate('/weekend-getaways-near-mumbai')}
                    className="font-semibold text-[#183b2b] underline hover:text-[#2d5a3f] cursor-pointer"
                  >
                    guide to the best places to visit near Mumbai
                  </button>
                  .
                </li>
              )}
              {article.slug !== 'weekend-travel-bags' && (
                <li>
                  👉 Learn how to pack light in our{' '}
                  <button
                    onClick={() => onNavigate('/weekend-travel-bags')}
                    className="font-semibold text-[#183b2b] underline hover:text-[#2d5a3f] cursor-pointer"
                  >
                    guide to choosing the best travel bags for short trips
                  </button>
                  .
                </li>
              )}
              {article.slug !== 'weekend-travel-packages' && (
                <li>
                  👉 Compare itineraries and costs with our{' '}
                  <button
                    onClick={() => onNavigate('/weekend-travel-packages')}
                    className="font-semibold text-[#183b2b] underline hover:text-[#2d5a3f] cursor-pointer"
                  >
                    guide to choosing the right tour packages for weekend travel
                  </button>
                  .
                </li>
              )}
              {article.slug !== 'weekend-travel-agency' && (
                <li>
                  👉 Vet operators and verify reviews in our{' '}
                  <button
                    onClick={() => onNavigate('/weekend-travel-agency')}
                    className="font-semibold text-[#183b2b] underline hover:text-[#2d5a3f] cursor-pointer"
                  >
                    guide to evaluating travel agencies near me
                  </button>
                  .
                </li>
              )}
            </ul>
          </div>
        </section>

        {/* FAQ Section for AEO and Schema */}
        {article.faqs && article.faqs.length > 0 && (
          <section className="mt-14 pt-8 border-t border-[#e2dacb] space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#2d5a3f]">
                Frequently Asked Questions
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#183b2b]">
                Common Questions from Travelers
              </h2>
            </div>

            <div className="space-y-4">
              {article.faqs.map((faq, fIdx) => (
                <div
                  key={fIdx}
                  className="p-5 bg-[#fbf9f5] border border-[#e2dacb] rounded-lg space-y-2"
                >
                  <h3 className="font-serif text-base font-bold text-[#183b2b]">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-[#57534e] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Articles Footer */}
        {relatedArticles.length > 0 && (
          <section className="mt-16 pt-10 border-t border-[#e2dacb] space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-2xl font-bold text-[#183b2b]">
                Related Travel Guides
              </h2>
              <button
                onClick={() => onNavigate('/')}
                className="text-xs font-semibold text-[#183b2b] hover:underline cursor-pointer"
              >
                All Articles →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.slug}
                  onClick={() => onNavigate(rel.path)}
                  className="bg-[#fbf9f5] border border-[#e2dacb] rounded-xl overflow-hidden hover:shadow-md transition-all cursor-pointer flex flex-col group"
                >
                  <div className="aspect-16/10 overflow-hidden bg-[#ede7d9]">
                    <img
                      src={rel.image}
                      alt={rel.imageAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <div className="text-xs text-[#78716c] mb-1">
                        {rel.category} · {rel.readTime}
                      </div>
                      <h3 className="font-serif text-base font-bold text-[#183b2b] group-hover:text-[#2d5a3f] transition-colors line-clamp-2">
                        {rel.title}
                      </h3>
                    </div>
                    <div className="pt-2 flex items-center gap-1 text-xs font-semibold text-[#183b2b]">
                      <span>
                        {rel.slug === 'weekend-getaways-near-mumbai' && 'Explore Places Near Mumbai'}
                        {rel.slug === 'weekend-travel-bags' && 'Explore Travel Bags Guide'}
                        {rel.slug === 'weekend-travel-packages' && 'Explore Tour Packages Guide'}
                        {rel.slug === 'weekend-travel-agency' && 'Explore Travel Agencies Guide'}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
