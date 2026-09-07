import React from 'react';

interface StickyBottomBarProps {
  onScrollToOrder: () => void;
  priceText?: string;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({
  onScrollToOrder,
  priceText = '1.685.000đ',
}) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full z-40 p-space-xs bg-surface/95 backdrop-blur-md shadow-[0_-4px_16px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between gap-space-xs max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold text-error tracking-wider flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-error animate-ping"></span> Còn 27 suất
          </span>
          <div className="flex items-baseline gap-1">
            <span className="font-bold text-lg text-secondary">{priceText}</span>
            <span className="text-[10px] text-outline line-through">2.990K</span>
          </div>
        </div>
        <button
          onClick={onScrollToOrder}
          className="flex-1 py-3 px-space-md rounded-xl bg-secondary text-on-secondary font-label-urgency text-xs uppercase tracking-wide shadow-lg text-center flex items-center justify-center gap-1 active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-base">shopping_cart</span>
          ĐẶT HÀNG NGAY (TẶNG 2 QUÀ)
        </button>
      </div>
    </div>
  );
};
