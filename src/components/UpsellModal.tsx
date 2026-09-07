import React, { useState } from 'react';
import { OrderData } from '../types';
import { updateOrderLocally, sendOrderToGoogleSheets } from '../utils/googleSheets';
import { trackUpsell } from '../utils/tracking';

interface UpsellModalProps {
  order: OrderData;
  isOpen: boolean;
  onClose: () => void;
}

export const UpsellModal: React.FC<UpsellModalProps> = ({ order, isOpen, onClose }) => {
  const [step, setStep] = useState<'UPSELL' | 'CONFIRMED'>('UPSELL');
  const [currentOrder, setCurrentOrder] = useState<OrderData>(order);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleAcceptUpsell = async () => {
    setIsProcessing(true);
    const upsellProduct = 'Gối Chườm Ngải Cứu Thảo Dược Trị Liệu Yasumi';
    const upsellPrice = 290000;

    const updatedOrder: OrderData = {
      ...currentOrder,
      upsellAccepted: true,
      upsellProduct,
      upsellPrice,
      totalPrice: currentOrder.totalPrice + upsellPrice,
      status: 'CONFIRMED',
    };

    setCurrentOrder(updatedOrder);
    updateOrderLocally(updatedOrder);
    trackUpsell(currentOrder, upsellProduct, upsellPrice);

    // Update in Google Sheets
    await sendOrderToGoogleSheets(updatedOrder);

    setIsProcessing(false);
    setStep('CONFIRMED');
  };

  const handleDeclineUpsell = () => {
    setStep('CONFIRMED');
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-surface-container-lowest shadow-2xl border border-outline-variant/30 text-on-surface">
        {step === 'UPSELL' ? (
          <div>
            {/* Header Banner */}
            <div className="bg-primary text-on-primary p-space-md text-center relative">
              <span className="inline-block px-3 py-1 mb-1 rounded-full bg-secondary text-on-secondary text-xs font-bold uppercase tracking-wider animate-pulse">
                ⚡ Ưu Đãi Độc Quyền Sau Đặt Hàng
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-primary">
                Mua Kèm Tiết Kiệm Thêm Đến 55%
              </h3>
              <p className="text-xs text-on-primary-container mt-1">
                Dành riêng cho khách hàng <strong className="text-on-primary">{currentOrder.fullName}</strong> vừa chốt đơn
              </p>
            </div>

            {/* Product spotlight */}
            <div className="p-space-md space-y-space-sm">
              <div className="flex gap-space-sm p-space-xs rounded-2xl bg-surface-container-low items-center">
                <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-surface">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDadpXGh637rZpA6tiofZCq_Ab9mrnmBDKOLaL18f455nIO1MXq60HepnT8NlEGshrCSe6cN5LAxyOhOl4FkpOgzUzh4lvRDvmlZxpLKFO_2xoV_2Flbr19jtr_LmOMc_emfqdQOLgiT_He_aGqjcOebPYC7myY5k5YO-Xe-UiZ3-dy_qMpx5tekd5EfgQxE7Ccc2L7KsIIssGPHBwx6fdH4XrHRMO3IcK-b4u208qr3P83hKM7EUdzv6_xtjF11tFzIMM"
                    alt="Gối chườm ngải cứu thảo dược"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-secondary uppercase">Trị liệu chuyên sâu</span>
                  <h4 className="font-bold text-sm text-primary leading-snug">
                    Gối Chườm Ngải Cứu Thảo Dược Yasumi
                  </h4>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-xs text-outline line-through">650.000đ</span>
                    <span className="font-price-headline text-headline-sm text-secondary font-black">
                      +290.000đ
                    </span>
                  </div>
                </div>
              </div>

              {/* Benefits list */}
              <div className="space-y-1.5 text-xs text-on-surface-variant">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-secondary text-base shrink-0">check_circle</span>
                  <span>12 vị thảo mộc thiên nhiên (ngải cứu, quế, hồi, gừng già) làm dịu nhanh cơn đau nhức thắt lưng.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-secondary text-base shrink-0">check_circle</span>
                  <span>Kết hợp hoàn hảo cùng đệm massage 3D nhân đôi hiệu quả hồi phục cột sống.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-secondary text-base shrink-0">local_shipping</span>
                  <span><strong>Đóng gói chung kiện hàng</strong> – Miễn phí hoàn toàn cước gửi thêm.</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 space-y-2">
                <button
                  type="button"
                  disabled={isProcessing}
                  onClick={handleAcceptUpsell}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-secondary-container via-secondary to-secondary text-on-secondary font-label-urgency text-sm uppercase tracking-wider shadow-lg shadow-secondary/25 hover:scale-[1.01] active:scale-95 transition-all text-center flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                  {isProcessing ? 'ĐANG CẬP NHẬT...' : 'CÓ! THÊM VÀO ĐƠN HÀNG (+290K)'}
                </button>

                <button
                  type="button"
                  onClick={handleDeclineUpsell}
                  className="w-full py-2.5 px-4 rounded-xl bg-surface-container text-on-surface-variant hover:text-on-surface text-xs font-semibold tracking-wide transition-colors text-center"
                >
                  Không, tôi chỉ muốn nhận đơn hàng gốc
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* CONFIRMATION SCREEN */
          <div className="p-space-lg text-center space-y-space-md">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-4xl text-primary">check</span>
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary-container text-on-primary text-xs font-bold uppercase tracking-wider mb-2">
                ĐẶT HÀNG THÀNH CÔNG
              </span>
              <h3 className="font-headline-md text-headline-md text-primary font-black">
                Cảm Ơn Quý Khách {currentOrder.fullName}!
              </h3>
              <p className="text-xs text-on-surface-variant mt-1">
                Mã đơn hàng: <strong className="font-mono text-primary text-sm">{currentOrder.orderId}</strong>
              </p>
            </div>

            {/* Order summary box */}
            <div className="p-space-sm rounded-2xl bg-surface-container-low text-left text-xs space-y-1.5">
              <div className="flex justify-between border-b border-outline-variant/40 pb-1.5">
                <span className="text-on-surface-variant">Sản phẩm chính:</span>
                <span className="font-bold text-primary">
                  {currentOrder.quantity}x Đệm Yasumi 3D ({currentOrder.packagePrice.toLocaleString('vi-VN')}đ)
                </span>
              </div>
              {currentOrder.upsellAccepted && (
                <div className="flex justify-between border-b border-outline-variant/40 pb-1.5 text-secondary">
                  <span className="font-medium">+ 01 Gối Thảo Dược (Ưu đãi):</span>
                  <span className="font-bold">+290.000đ</span>
                </div>
              )}
              <div className="flex justify-between border-b border-outline-variant/40 pb-1.5">
                <span className="text-on-surface-variant">Quà tặng 0đ kèm theo:</span>
                <span className="font-bold text-secondary">01 Máy massage cổ + 01 Dép bấm huyệt</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant/40 pb-1.5">
                <span className="text-on-surface-variant">Số điện thoại:</span>
                <span className="font-bold text-primary">{currentOrder.phone}</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant/40 pb-1.5">
                <span className="text-on-surface-variant">Địa chỉ giao:</span>
                <span className="font-bold text-primary max-w-[220px] text-right truncate">
                  {currentOrder.address}
                </span>
              </div>
              <div className="flex justify-between pt-1 text-sm items-baseline">
                <span className="font-bold text-primary uppercase">Tổng tiền thanh toán (COD):</span>
                <span className="font-price-headline text-headline-sm text-secondary font-black">
                  {currentOrder.totalPrice.toLocaleString('vi-VN')}đ
                </span>
              </div>
            </div>

            <div className="p-space-xs rounded-xl bg-tertiary-fixed/30 text-[11px] text-primary leading-relaxed">
              📞 <strong>Lưu ý:</strong> Chuyên viên chăm sóc khách hàng Yasumi Japan sẽ liên hệ từ tổng đài{' '}
              <a href="tel:0398636869" className="font-bold text-secondary underline">
                0398.63.68.69
              </a>{' '}
              trong 5 - 15 phút tới để xác nhận địa chỉ và xuất kho. Quý khách vui lòng chú ý điện thoại!
            </div>

            <div className="flex gap-space-xs">
              <a
                href="tel:0398636869"
                className="flex-1 py-2.5 px-3 rounded-xl bg-surface-container text-primary font-bold text-xs flex items-center justify-center gap-1 hover:bg-surface-container-high transition-colors"
              >
                <span className="material-symbols-outlined text-base text-secondary">call</span>
                Hotline 24/7
              </a>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2.5 px-3 rounded-xl bg-primary text-on-primary font-bold text-xs hover:bg-primary-container transition-colors"
              >
                Hoàn Tất & Đóng
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
