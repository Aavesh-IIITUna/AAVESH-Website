import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function scrollToElementId(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    return true;
  }
  // Fallback: scroll to top if target not found
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return false;
}

function scrollFromTopThenTo(id) {
  // First smooth-scroll to top, then to the element once we reach top (or after a timeout)
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const start = Date.now();
  const maxWaitMs = 1800; // safety cap
  const check = setInterval(() => {
    const atTop = Math.round(window.scrollY) === 0;
    const timedOut = Date.now() - start > maxWaitMs;
    if (atTop || timedOut) {
      clearInterval(check);
      // small delay to avoid clashing animations
      setTimeout(() => {
        if (id.toLowerCase() === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          scrollToElementId(id);
        }
      }, 20);
    }
  }, 50);
}

export default function SmoothScrollManager() {
  const location = useLocation();
  const navigate = useNavigate();

  // On route changes, handle hash scrolling or scroll to top
  useEffect(() => {
    const hash = location.hash;
    if (hash && hash.length > 1) {
      const id = decodeURIComponent(hash.substring(1));
      // Delay to ensure the target is rendered
      const t = setTimeout(() => {
        scrollFromTopThenTo(id);
      }, 50);
      return () => clearTimeout(t);
    }
    // No hash: scroll to top smoothly
    const t = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
    return () => clearTimeout(t);
  }, [location.pathname, location.hash]);

  // Intercept any in-page anchor clicks for smooth scroll
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented) return;
      // Find closest anchor
      let node = e.target;
      while (node && node !== document.body) {
        if (node.tagName && node.tagName.toLowerCase() === 'a') break;
        node = node.parentElement;
      }
      if (!node || node.tagName.toLowerCase() !== 'a') return;

      const href = node.getAttribute('href') || '';
      // Only handle pure hash links like #about, #contact, etc.
      if (!href || !href.startsWith('#') || href === '#') return;

      e.preventDefault();
      const id = decodeURIComponent(href.slice(1));

      if (!id) return;

      if (location.pathname !== '/') {
        // Navigate to home with hash, then scroll
        navigate({ pathname: '/', hash: `#${id}` });
      } else {
        // Update hash for history and perform from-top sequence
        navigate({ hash: `#${id}` }, { replace: false });
        setTimeout(() => {
          scrollFromTopThenTo(id);
        }, 0);
      }
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [location.pathname, navigate]);

  return null;
}
