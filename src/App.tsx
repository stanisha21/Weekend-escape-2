import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ArticlePage } from './pages/ArticlePage';
import { getArticleByPath } from './data/articles';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    // Read initial path from browser location
    const path = window.location.pathname;
    return path || '/';
  });

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Programmatic navigation handler
  const handleNavigate = (path: string) => {
    if (path === currentPath) return;

    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Resolve matching article if on article path
  const currentArticle = getArticleByPath(currentPath);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf7f2] text-[#292524]">
      {/* Top Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPath === '/' ? (
          <HomePage
            onNavigate={handleNavigate}
          />
        ) : currentArticle ? (
          <ArticlePage
            article={currentArticle}
            onNavigate={handleNavigate}
          />
        ) : (
          /* 404 Not Found Page */
          <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
            <h1 className="font-serif text-3xl font-bold text-[#183b2b]">
              Page Not Found
            </h1>
            <p className="text-sm text-[#57534e]">
              The requested travel page at <code className="bg-[#f0ebd8] px-1.5 py-0.5 rounded text-xs font-mono">{currentPath}</code> does not exist or has been moved.
            </p>
            <div>
              <button
                onClick={() => handleNavigate('/')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#183b2b] hover:bg-[#234c38] rounded-md transition-colors cursor-pointer"
              >
                Return to Homepage
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
      />
    </div>
  );
}
