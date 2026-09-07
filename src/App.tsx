import React, { useState, useEffect } from 'react';
import { OrderData } from './types';
import { setupTracking, trackPageView, trackViewContent } from './utils/tracking';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PainPointsSection } from './components/PainPointsSection';
import { SolutionSection } from './components/SolutionSection';
import { FeaturesSection } from './components/FeaturesSection';
import { BenefitsSection } from './components/BenefitsSection';
import { GallerySection } from './components/GallerySection';
import { WhyBuySection } from './components/WhyBuySection';
import { PersonasSection } from './components/PersonasSection';
import { StepsSection } from './components/StepsSection';
import { RemoteDetailSection } from './components/RemoteDetailSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { SpecsSection } from './components/SpecsSection';
import { OrderSection } from './components/OrderSection';
import { StickyBottomBar } from './components/StickyBottomBar';
import { Footer } from './components/Footer';
import { UpsellModal } from './components/UpsellModal';
import { TrackingSettingsModal } from './components/TrackingSettingsModal';

export const App: React.FC = () => {
  // Countdown Timer: 4 hours 28 mins
  const [timeLeft, setTimeLeft] = useState(4 * 3600 + 28 * 60 + 15);
  const [quantity, setQuantity] = useState<number>(1);
  const [currentOrder, setCurrentOrder] = useState<OrderData | null>(null);
  const [isUpsellOpen, setIsUpsellOpen] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  // Initialize tracking pixels and listeners
  useEffect(() => {
    setupTracking();
    trackPageView();
    trackViewContent('Đệm Massage Toàn Thân Yasumi 3D', 1685000);
  }, []);

  // Timer Tick
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 16000));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  const scrollToOrder = () => {
    const el = document.getElementById('order-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOrderSuccess = (order: OrderData) => {
    setCurrentOrder(order);
    setIsUpsellOpen(true);
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* Fixed Sticky Header with Promo Bar */}
      <Header
        onOpenSettings={() => setIsSettingsOpen(true)}
        onScrollToOrder={scrollToOrder}
      />

      {/* Main Content Area (offset for sticky header) */}
      <main className="pt-28">
        <HeroSection
          onScrollToOrder={scrollToOrder}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />

        <PainPointsSection onScrollToOrder={scrollToOrder} />

        <SolutionSection />

        <FeaturesSection onScrollToOrder={scrollToOrder} />

        <BenefitsSection />

        <GallerySection onScrollToOrder={scrollToOrder} />

        <WhyBuySection />

        <PersonasSection />

        <StepsSection />

        <RemoteDetailSection />

        <ReviewsSection />

        <FaqSection />

        <SpecsSection />

        <OrderSection
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          quantity={quantity}
          onQuantityChange={setQuantity}
          onOrderSuccess={handleOrderSuccess}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <StickyBottomBar
        onScrollToOrder={scrollToOrder}
        priceText={quantity === 1 ? '1.685.000đ' : '3.200.000đ'}
      />

      {/* Post-Purchase Upsell Modal */}
      <UpsellModal
        isOpen={isUpsellOpen}
        initialOrder={currentOrder}
        onClose={() => setIsUpsellOpen(false)}
      />

      {/* Admin / Marketing Tracking Configuration Modal */}
      <TrackingSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  );
};

export default App;
