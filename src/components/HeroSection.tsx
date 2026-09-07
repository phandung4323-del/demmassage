import React from 'react';

interface HeroSectionProps {
  onScrollToOrder: () => void;
  hours: string;
  minutes: string;
  seconds: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToOrder,
  hours,
  minutes,
  seconds,
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-surface pb-space-2xl pt-space-md">
      <div className="max-w-[1180px] mx-auto px-mobile-gutter lg:px-desktop-gutter">
        {/* Urgency Sub-banner */}
        <div className="mb-space-md inline-flex items-center gap-space-xs rounded-full bg-secondary-fixed px-space-md py-space-2xs text-on-secondary-fixed shadow-sm">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary animate-ping"></span>
          <span className="font-label-badge text-label-badge uppercase tracking-wide">
            🔥 Ưu Đãi Độc Quyền Hôm Nay - Chỉ Còn 27 Suất Giá Sốc
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Left: Product Messaging & Conversion Engine */}
          <div className="lg:col-span-6 flex flex-col space-y-space-md">
            <div className="space-y-space-xs">
              <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-primary font-black tracking-tight leading-tight">
                &nbsp; &nbsp; &nbsp; &nbsp; ĐỆM MASSAGE&nbsp;
                <div className="">TOÀN THÂN ĐA NĂNG</div>
              </h1>
              <p className="font-body-xl text-body-xl text-on-surface-variant font-medium">
                Thư giãn đa tầng cổ – vai – lưng – eo – hông ngay tại nhà chỉ trong{' '}
                <span className="font-bold text-secondary underline decoration-secondary-container decoration-2">
                  15 phút
                </span>{' '}
                mỗi ngày.
              </p>
            </div>

            {/* Feature Highlight Badges */}
            <div className="grid grid-cols-2 gap-space-xs">
              <div className="flex items-center gap-space-xs p-space-xs rounded-lg bg-surface-container-low shadow-sm">
                <span className="material-symbols-outlined text-secondary text-xl">vital_signs</span>
                <span className="font-label-badge text-label-badge text-primary">Massage 3D chuyên sâu</span>
              </div>
              <div className="flex items-center gap-space-xs p-space-xs rounded-lg bg-surface-container-low shadow-sm">
                <span className="material-symbols-outlined text-secondary text-xl">nest_heat_link_e</span>
                <span className="font-label-badge text-label-badge text-primary">Nhiệt sưởi hồng ngoại</span>
              </div>
              <div className="flex items-center gap-space-xs p-space-xs rounded-lg bg-surface-container-low shadow-sm">
                <span className="material-symbols-outlined text-secondary text-xl">tune</span>
                <span className="font-label-badge text-label-badge text-primary">3 mức cường độ chuẩn</span>
              </div>
              <div className="flex items-center gap-space-xs p-space-xs rounded-lg bg-surface-container-low shadow-sm">
                <span className="material-symbols-outlined text-secondary text-xl">settings_remote</span>
                <span className="font-label-badge text-label-badge text-primary">Điều khiển LED 1 chạm</span>
              </div>
            </div>

            {/* Dynamic Pricing Box with Live Timer */}
            <div className="p-space-md rounded-2xl bg-gradient-to-br from-surface-container-lowest to-surface-container-low shadow-xl shadow-primary/5">
              <div className="flex flex-wrap items-end justify-between gap-space-xs pb-space-xs">
                <div>
                  <span className="block font-label-badge text-label-badge text-outline uppercase tracking-wider">
                    Giá niêm yết: <span className="line-through">2.990.000đ</span>
                  </span>
                  <div className="flex items-baseline gap-space-xs">
                    <span className="font-price-headline text-price-headline text-secondary font-black">
                      1.685.000đ
                    </span>
                    <span className="font-label-badge text-label-badge rounded-md bg-secondary text-on-secondary px-2 py-0.5 uppercase tracking-wide">
                      Tiết kiệm 45%
                    </span>
                  </div>
                </div>

                {/* Countdown Mini */}
                <div className="flex flex-col items-end">
                  <span className="font-label-badge text-label-badge text-error font-bold uppercase flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span> Kết thúc sau
                  </span>
                  <div className="flex items-center gap-1 font-headline-sm text-headline-sm text-primary-container font-mono" id="hero-countdown">
                    <span className="bg-primary text-on-primary px-1.5 py-0.5 rounded text-sm">{hours}</span>:
                    <span className="bg-primary text-on-primary px-1.5 py-0.5 rounded text-sm">{minutes}</span>:
                    <span className="bg-primary text-on-primary px-1.5 py-0.5 rounded text-sm">{seconds}</span>
                  </div>
                </div>
              </div>

              {/* Gift Callout */}
              <div className="mt-space-xs p-space-xs rounded-xl bg-tertiary-fixed/30 flex items-center gap-space-xs">
                <div className="w-9 h-9 rounded-lg bg-secondary text-on-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">redeem</span>
                </div>
                <div className="text-xs text-primary leading-tight">
                  <span className="font-bold uppercase text-secondary">Quà tặng 0đ kèm theo:</span>
                  <br />
                  01 Máy massage cổ vai gáy cao cấp <span style={{ fontSize: '0.75rem' }}>&nbsp;</span>
                  <div>
                    <div>01 Đôi dép bấm huyệt lòng bàn chân.</div>
                  </div>
                </div>
              </div>

              {/* Conversion Button */}
              <div className="mt-space-md space-y-space-xs">
                <button
                  onClick={onScrollToOrder}
                  className="w-full flex items-center justify-center gap-space-xs py-space-sm px-space-lg rounded-xl bg-gradient-to-r from-secondary-container to-secondary text-on-secondary font-label-urgency text-label-urgency uppercase tracking-wider shadow-lg shadow-secondary/30 hover:scale-[1.02] active:scale-95 transition-all text-center"
                >
                  <span className="material-symbols-outlined">shopping_cart_checkout</span>
                  ĐẶT HÀNG NGAY - NHẬN TRỌN BỘ QUÀ TẶNG
                </button>
                <p className="text-center font-label-badge text-label-badge text-on-surface-variant flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-sm text-primary-fixed-dim">verified</span>
                  Miễn phí ship toàn quốc • Kiểm tra thử hàng trước khi thanh toán • 1 đổi 1 trong 7 ngày
                </p>
              </div>
            </div>
          </div>

          {/* Right: Primary Visual Spotlight (Combo Banner 3 in 1) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-surface-container-lowest">
              <img
                alt="Combo trọn bộ đệm massage 3D Yasumi tặng kèm máy massage cổ và dép bấm huyệt"
                className="w-full h-auto object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGjaBN3LtwcOg1dbQ_h19BpLixSuydvMyuynSpEVFB8TdS-4Gu-0CubcukS3FScaLwuEwv4iyeVcufRvJY2c5TxS4YiAu-OqwxBp2cnGlkVNKcx7WP8jJYVN0rtXIUceFRsvx_SU7jeqz1mSrWvtz9FN8Ix5N0JXuXq-jyCQWPZ3ML6Dfn_FhllO4uN0VjoF1Iuj1dNhQmUg-e1JRG6pc8cgftFAfTsd7t0X3N2thpyu-0bFcSc3uQWPTqqI6E0kogcis"
              />
              <div className="absolute bottom-4 right-4 rounded-xl bg-secondary text-on-secondary px-space-sm py-1 font-label-badge text-label-badge shadow-lg">
                COMBO MUA 1 ĐƯỢC 3
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
