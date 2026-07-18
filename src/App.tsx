import { Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { PageLoader } from '@/components/common/PageLoader';
import { ScrollToTop } from '@/components/common/ScrollToTop';
import { pageTransition } from '@/lib/motion';

// Lazy-loaded routes keep the initial bundle small.
const LandingPage = lazy(() => import('@/pages/LandingPage'));
const LoginPage = lazy(() => import('@/pages/auth/LoginPage'));
const RegisterPage = lazy(() => import('@/pages/auth/RegisterPage'));
const ForgotPasswordPage = lazy(() => import('@/pages/auth/ForgotPasswordPage'));
const DashboardPreview = lazy(() => import('@/pages/DashboardPreview'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

/**
 * Wraps each route in a fade/slide page transition.
 *
 * Suspense is kept OUTSIDE AnimatePresence on purpose: if a lazy route
 * suspends while nested inside an animating (mode="wait") element, its enter
 * animation can stall at opacity:0 and the page renders blank. Resolving the
 * chunk first, then animating, avoids that deadlock.
 */
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          variants={pageTransition}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Routes location={location}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/dashboard/*" element={<DashboardPreview />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </Suspense>
  );
}

export default function App() {
  return (
    <>
      {/* Accessibility: keyboard users can jump straight to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground focus:shadow-elevated"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <AnimatedRoutes />
    </>
  );
}
