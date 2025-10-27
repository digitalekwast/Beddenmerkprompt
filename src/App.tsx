import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { BoxspringsPage } from './pages/BoxspringsPage';
import { MatrassenPage } from './pages/MatrassenPage';
import { HotelbeddenPage } from './pages/HotelbeddenPage';
import { ValkveenPage } from './pages/ValkveenPage';
import { LechtalPage } from './pages/LechtalPage';
import { RecreatiecollectiePage } from './pages/RecreatiecollectiePage';
import { OverOnsPage } from './pages/OverOnsPage';
import { VerkooppuntenPage } from './pages/VerkooppuntenPage';
import { ContactPage } from './pages/ContactPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { FAQPage } from './pages/FAQPage';
import { LeveringPage } from './pages/LeveringPage';
import { GarantiePage } from './pages/GarantiePage';
import { RetourenPage } from './pages/RetourenPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-warm-white">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/boxsprings" element={<BoxspringsPage />} />
          <Route path="/matrassen" element={<MatrassenPage />} />
          <Route path="/hotelbedden" element={<HotelbeddenPage />} />
          <Route path="/collecties/valkeveen" element={<ValkveenPage />} />
          <Route path="/collecties/lechtal" element={<LechtalPage />} />
          <Route path="/collecties/recreatie" element={<RecreatiecollectiePage />} />
          <Route path="/over-ons" element={<OverOnsPage />} />
          <Route path="/verkooppunten" element={<VerkooppuntenPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/levering" element={<LeveringPage />} />
          <Route path="/garantie" element={<GarantiePage />} />
          <Route path="/retouren" element={<RetourenPage />} />
          
          {/* Catch-all route - redirects to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}