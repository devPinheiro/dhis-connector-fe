import { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { Router } from './Router';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Simple navigation function
  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  // Expose navigate globally for links
  useEffect(() => {
    (window as any).navigate = navigate;
    
    // Handle link clicks
    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.href.startsWith(window.location.origin)) {
        e.preventDefault();
        const path = new URL(target.href).pathname;
        navigate(path);
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <AuthProvider>
      <Router currentPath={currentPath} />
    </AuthProvider>
  );
}

export default App;