import React from 'react';

interface HeaderProps {
  onOpenSettings?: () => void;
  onScrollToOrder: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSettings, onScrollToOrder }) => {
  return (
    <header className="fixed top-0 w-full z-50 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="w-full bg-primary-container text-on-primary py-space-xs px-mobile-gutter text-center flex items-center justify-center gap-space-xs">
        <span className="font-label-urgency text-label-urgency uppercase tracking-wider text-tertiary-fixed-dim">
          🔥 FLASH SALE HÔM NAY:
        </span>
        <span className="font-label-badge text-label-badge text-on-primary">
          GIẢM ĐẾN 45% + TẶNG COMBO QUÀ TRỊ GIÁ 1.305.000Đ | MIỄN PHÍ VẬN CHUYỂN TOÀN QUỐC
        </span>
      </div>
      <div className="h-20 bg-surface/90 backdrop-blur-xl">
        <div className="max-w-[1180px] mx-auto h-full px-mobile-gutter lg:px-desktop-gutter flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-sm cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-fixed shadow-md">
              <span className="material-symbols-outlined text-2xl">spa</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary tracking-tight leading-tight uppercase">
                YASUMI JAPAN
              </span>
              <span className="font-label-badge text-label-badge text-on-surface-variant uppercase tracking-wider">
                THIẾT BỊ CHĂM SÓC SỨC KHỎE
              </span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-space-lg">
            <a className="px-space-xs py-space-2xs text-on-surface-variant hover:text-on-surface transition-colors font-label-badge text-label-badge uppercase tracking-wider" href="#loi-ich">
              Lợi ích
            </a>
            <a className="px-space-xs py-space-2xs text-on-surface-variant hover:text-on-surface transition-colors font-label-badge text-label-badge uppercase tracking-wider" href="#tinh-nang">
              Tính năng
            </a>
            <a className="px-space-xs py-space-2xs text-on-surface-variant hover:text-on-surface transition-colors font-label-badge text-label-badge uppercase tracking-wider" href="#danh-gia">
              Đánh giá
            </a>
            <a className="px-space-xs py-space-2xs text-on-surface-variant hover:text-on-surface transition-colors font-label-badge text-label-badge uppercase tracking-wider" href="#order-form">
              Ưu đãi &amp; Đặt hàng
            </a>
          </nav>
          <div className="flex items-center gap-space-md">
            <div className="hidden sm:flex flex-col items-end text-right">
              <span className="font-label-badge text-label-badge text-on-surface-variant uppercase">
                TỔNG ĐÀI TƯ VẤN 24/7
              </span>
              <a className="font-headline-sm text-headline-sm text-secondary hover:text-on-secondary-container transition-colors" href="tel:0398636869">
                0398.63.68.69
              </a>
            </div>
            <button
              onClick={onScrollToOrder}
              className="hidden md:inline-flex items-center justify-center px-space-lg py-space-xs rounded-xl bg-secondary text-on-secondary font-label-urgency text-label-urgency tracking-wide uppercase hover:bg-secondary-container hover:text-on-secondary shadow-lg shadow-secondary/20 transition-all hover:scale-105 active:scale-95"
            >
              ĐẶT HÀNG NGAY
            </button>
            {onOpenSettings && (
              <button
                onClick={onOpenSettings}
                title="Cấu hình Google Sheets & Tracking"
                className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high text-primary flex items-center justify-center shadow-sm transition-transform active:scale-90"
              >
                <span className="material-symbols-outlined text-xl">settings</span>
              </button>
            )}
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover shadow-sm ring-2 ring-primary-fixed"
              src="https://lh3.googleusercontent.com/aida/AEtjO1X3cMLc55-JdIwT-JwNjiypY6Wn9TsF2PmaGVtc8a6SQD45ma1dwnf13zb9iW1N3dRPV_ZCHIFK8PIInURtzPb-yxZwW2RfYFOp0XzG8Cp5IQ-m4xGI0x6_Ny7S_xxujzz2i9e2BSj8oMhzYwbhrVoQ5qOjzqZ2OSKdIhr352y5U2oMaZNsmfonoGs8Pn0f-RgJfbEIY9h02_1FY-wLv_960xjxTo32zPd2DLOY54GaosCgETW7FgSSQSjsLXdun37BzvjZvL9sZQ"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
