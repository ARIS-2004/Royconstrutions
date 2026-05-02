import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Home',         path: '/',         id: 'home'     },
  { label: 'About Us',     path: '/about',    id: 'about'    },
  { label: 'Our Services', path: '/services', id: 'services' },
  { label: 'Gallery',      path: '/gallery',  id: null       },
  { label: 'Projects',     path: '/projects', id: 'projects' },
  { label: 'Contact Us',   path: '/contact',  id: null       },
];

type NavItem = typeof NAV_ITEMS[number];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (item: NavItem) => {
    setIsMenuOpen(false);
    if (item.path !== '/') {
      navigate(item.path);
      return;
    }
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => document.getElementById(item.id ?? 'home')?.scrollIntoView({ behavior: 'smooth' }), 100);
    } else {
      document.getElementById(item.id ?? 'home')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (item: NavItem) =>
    item.path === '/' ? location.pathname === '/' : location.pathname.startsWith(item.path);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* ── Top bar ── */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="hidden md:block bg-[#141414]"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-9">
              <div className="flex items-center gap-5">
                <span className="text-white/75 text-[9px] tracking-[0.4em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>Kolkata, West Bengal</span>
                <span className="w-px h-3 bg-white/25" />
                <span className="text-white/75 text-[9px] tracking-[0.4em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>Est. 2012</span>
                <span className="w-px h-3 bg-white/25" />
                <span className="text-white/75 text-[9px] tracking-[0.4em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>info@rcepl.com</span>
              </div>
              <div className="flex items-center gap-5">
                <span className="text-white/75 text-[9px] tracking-[0.4em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>Mon – Sat &nbsp;9am – 6pm</span>
                <span className="w-px h-3 bg-white/25" />
                <div className="flex items-center gap-1.5 text-[#B8965A] text-[9px] tracking-[0.3em]" style={{ fontFamily: 'var(--font-body)' }}>
                  <Phone size={8} strokeWidth={1.5} />
                  <span>+91 89810 40466</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main nav ── */}
      <motion.div
        animate={isScrolled ? 'scrolled' : 'top'}
        variants={{
          top: { backgroundColor: 'rgba(0,0,0,0)' },
          scrolled: { backgroundColor: 'rgba(255,255,255,0.97)' },
        }}
        transition={{ duration: 0.4 }}
        className={`transition-shadow duration-400 ${
          isScrolled
            ? 'shadow-[0_2px_32px_rgba(0,0,0,0.07)] border-b border-[#1A1A1A]/5 backdrop-blur-xl'
            : 'backdrop-blur-md border-b border-white/10'
        }`}
        style={!isScrolled ? { background: 'rgba(10,10,10,0.45)' } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[68px]">

            {/* Logo */}
            <button onClick={() => handleNav(NAV_ITEMS[0])} className="flex items-center">
              <img
                src="/logo1.png"
                alt="Roy Construction"
                className={`h-13 w-auto object-contain transition-all duration-400 ${
                  isScrolled ? '' : 'brightness-0 invert'
                }`}
              />
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center">
              <div className={`flex items-center rounded-full px-1 py-1 gap-0.5 transition-all duration-400 ${
                isScrolled ? 'bg-[#F5F2ED]' : 'bg-black/30 border border-white/20'
              }`}>
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNav(item)}
                    className={`px-4 py-1.5 text-[10.5px] tracking-[0.16em] uppercase rounded-full transition-all duration-250 ${
                      isActive(item)
                        ? isScrolled
                          ? 'bg-[#1A1A1A] text-white shadow-sm'
                          : 'bg-white text-[#1A1A1A] shadow-sm'
                        : isScrolled
                          ? 'text-[#1A1A1A]/70 hover:bg-white hover:text-[#1A1A1A]'
                          : 'text-white hover:bg-white/20'
                    }`}
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="w-3" />
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-1.5 transition-colors ${
                isScrolled ? 'text-[#1A1A1A]' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X size={19} strokeWidth={1.5} /> : <Menu size={19} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-white border-b border-[#1A1A1A]/6 shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.path}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => handleNav(item)}
                  className={`flex items-center justify-between py-3.5 text-[11px] tracking-[0.2em] uppercase border-b border-[#1A1A1A]/5 last:border-0 transition-colors group ${
                    isActive(item) ? 'text-[#B8965A]' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
                  }`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {item.label}
                  <ChevronRight size={11} className="text-[#B8965A]/0 group-hover:text-[#B8965A]/60 transition-colors duration-200" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
