import React, { useState } from 'react';
import { OrderData } from '../types';
import { sendOrderToGoogleSheets } from '../utils/googleSheets';
import { trackInitiateCheckout, trackPurchase } from '../utils/tracking';

interface OrderSectionProps {
  hours: string;
  minutes: string;
  seconds: string;
  quantity: number;
  onQuantityChange: (qty: number) => void;
  onOrderSuccess: (order: OrderData) => void;
}

export const OrderSection: React.FC<OrderSectionProps> = ({
  hours,
  minutes,
  seconds,
  quantity,
  onQuantityChange,
  onOrderSuccess,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  // Calculations
  const packagePrice = quantity === 1 ? 1685000 : 3200000;
  const subtotal = packagePrice;
  const shippingFee = 0;
  const giftValue = 700000;
  const totalPrice = subtotal + shippingFee;

  const handleFocus = () => {
    trackInitiateCheckout(quantity, totalPrice);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    const trimmedName = fullName.trim();
    const trimmedPhone = phone.trim().replace(/[\s.-]/g, '');
    const trimmedAddress = address.trim();

    if (!trimmedName) {
      setFormError('Vui lòng nhập họ và tên người nhận.');
      return;
    }

    if (!trimmedPhone || trimmedPhone.length < 9 || !/^[0-9+]+$/.test(trimmedPhone)) {
      setFormError('Vui lòng nhập số điện thoại hợp lệ để xác nhận đơn hàng.');
      return;
    }

    if (!trimmedAddress) {
      setFormError('Vui lòng nhập địa chỉ nhận hàng chi tiết.');
      return;
    }

    setIsSubmitting(true);

    const newOrder: OrderData = {
      orderId: 'YASUMI-' + Math.floor(100000 + Math.random() * 900000),
      createdAt: new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }),
      fullName: trimmedName,
      phone: trimmedPhone,
      address: trimmedAddress,
      quantity,
      note: note.trim(),
      packagePrice,
      subtotal,
      shippingFee,
      giftValue,
      totalPrice,
      status: 'PENDING',
    };

    // Track Purchase event across Meta, GA4, GTM
    trackPurchase(newOrder);

    // Send to Google Sheets (and save locally)
    await sendOrderToGoogleSheets(newOrder);

    setIsSubmitting(false);

    // Pass to parent to trigger the Upsell Popup
    onOrderSuccess(newOrder);
  };

  return (
    <section className="w-full py-space-3xl bg-surface-container-low scroll-mt-24" id="order-form">
      <div className="max-w-[1180px] mx-auto px-mobile-gutter lg:px-desktop-gutter">
        {/* High Urgency Header Box */}
        <div className="p-space-lg lg:p-space-xl rounded-3xl bg-primary text-on-primary shadow-2xl mb-space-lg relative overflow-hidden">
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <span className="font-label-urgency text-label-urgency uppercase tracking-widest text-tertiary-fixed-dim block mb-1">
              ⚡ DUY NHẤT HÔM NAY – CHỐT DEAL LIỀN TAY
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg font-black text-on-primary">
              ĐẶT HÀNG NGAY - SỞ HỮU TRỌN BỘ COMBO 3 TRONG 1
            </h2>
            <p className="font-body-md text-body-md text-on-primary-container mt-2">
              Giảm ngay <span className="text-tertiary-fixed-dim font-bold">1.305.000đ</span> cùng combo quà tặng chăm sóc sức khỏe toàn diện trị giá 700.000đ.
            </p>
            {/* Urgency Countdown Clock */}
            <div className="mt-space-md inline-flex items-center gap-space-xs bg-primary-container px-space-md py-space-xs rounded-2xl shadow-inner">
              <span className="material-symbols-outlined text-secondary text-xl animate-pulse">alarm</span>
              <span className="font-label-badge text-label-badge uppercase text-tertiary-fixed">Ưu đãi còn hiệu lực:</span>
              <div className="flex items-center gap-1 font-mono font-bold text-headline-sm text-secondary">
                <span className="bg-primary text-on-primary px-2 py-0.5 rounded">{hours}</span>:
                <span className="bg-primary text-on-primary px-2 py-0.5 rounded">{minutes}</span>:
                <span className="bg-primary text-on-primary px-2 py-0.5 rounded">{seconds}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Order Container Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* Left Column: Deal Summary & Included Gifts */}
          <div className="lg:col-span-5 space-y-space-md">
            <div className="p-space-lg rounded-3xl bg-surface-container-lowest shadow-md">
              <div className="flex items-center gap-space-xs mb-space-sm">
                <span className="w-3 h-3 rounded-full bg-secondary"></span>
                <h3 className="font-headline-sm text-headline-sm text-primary">Gói Ưu Đãi Được Áp Dụng</h3>
              </div>
              {/* Product Pill */}
              <div className="flex gap-space-sm p-space-xs rounded-2xl bg-surface-container-low mb-space-sm">
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-surface">
                  <img
                    alt="Combo đệm massage"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVk4xkuV_aA647KrRerc8sGiKS6YsBKhOqWrh7Wbj2wWAqdkMYP5jHJu-bkoLcwcIXP7f6GjVCHeDR90SGxLc4qAJ3c5pZqBG1bTHmEuIsU8ZIgvE0SWo5m-t1DJArQuxQCBMXUBlH9tn1mfztBrg15a0F7Amq-pgab-GAsDjBdn77AkjN6UA6nOrK-c0c5d-oqQGPWS5DYPBOK6SuQztwk_6xNHeHcO534qbaHFsUjezLthfQJBiTmyrv-qe6TORCOR8"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-bold text-sm text-primary">Đệm Massage Yasumi 3D</h4>
                  <span className="text-xs text-outline line-through">2.990.000đ</span>
                  <span className="font-price-headline text-headline-md text-secondary font-black">
                    {quantity === 1 ? '1.685.000đ' : '3.200.000đ'}
                  </span>
                </div>
              </div>
              {/* Free Gifts list */}
              <span className="font-label-badge text-label-badge uppercase text-secondary block mb-2">
                🎁 Quà tặng 0đ kèm theo kiện:
              </span>
              <div className="space-y-space-xs">
                <div className="p-space-xs rounded-xl bg-tertiary-fixed/30 flex items-center justify-between text-xs text-primary font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-secondary">check</span>
                    01 Máy massage cổ vai gáy cao cấp
                  </span>
                  <span className="font-bold text-secondary">450.000đ</span>
                </div>
                <div className="p-space-xs rounded-xl bg-tertiary-fixed/30 flex items-center justify-between text-xs text-primary font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-secondary">check</span>
                    01 Đôi dép bấm huyệt bàn chân
                  </span>
                  <span className="font-bold text-secondary">250.000đ</span>
                </div>
              </div>
              {/* Guarantees mini */}
              <div className="mt-space-md pt-space-md space-y-2 text-xs text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">local_shipping</span>
                  <span>Miễn phí vận chuyển tận nhà toàn quốc</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">verified</span>
                  <span>Bảo hành điện tử 12 tháng chính hãng Yasumi Japan</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">swap_horiz</span>
                  <span>Lỗi 1 đổi 1 miễn phí trong 7 ngày đầu tiên</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: COD Checkout Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-space-lg lg:p-space-xl rounded-3xl bg-surface-container-lowest shadow-xl space-y-space-md"
              id="checkout-form"
            >
              <h3 className="font-headline-md text-headline-md text-primary font-bold">
                Thông Tin Giao Hàng &amp; Nhận Ưu Đãi
              </h3>

              {/* Quantity Selector with dynamic price updating */}
              <div>
                <label className="block font-label-badge text-label-badge text-primary uppercase mb-2">
                  Chọn Số Lượng:
                </label>
                <div className="grid grid-cols-2 gap-space-sm">
                  <label className="cursor-pointer">
                    <input
                      checked={quantity === 1}
                      onChange={() => onQuantityChange(1)}
                      className="peer sr-only"
                      name="qty_option"
                      type="radio"
                      value="1"
                    />
                    <div className="p-space-sm rounded-xl bg-surface-container-low peer-checked:bg-primary peer-checked:text-on-primary transition-all text-center">
                      <span className="block font-bold text-sm">Mua 1 Đệm</span>
                      <span className="block text-xs mt-0.5">1.685.000đ</span>
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input
                      checked={quantity === 2}
                      onChange={() => onQuantityChange(2)}
                      className="peer sr-only"
                      name="qty_option"
                      type="radio"
                      value="2"
                    />
                    <div className="p-space-sm rounded-xl bg-surface-container-low peer-checked:bg-primary peer-checked:text-on-primary transition-all text-center relative">
                      <span className="absolute -top-2 right-2 bg-secondary text-on-secondary text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase">
                        Tiết kiệm thêm
                      </span>
                      <span className="block font-bold text-sm">Mua 2 Đệm (Gia đình)</span>
                      <span className="block text-xs mt-0.5">3.200.000đ (Bớt 170K)</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Customer Full Name */}
              <div className="space-y-1">
                <label className="block font-label-badge text-label-badge text-on-surface-variant uppercase" htmlFor="cust-name">
                  Họ và tên người nhận (*)
                </label>
                <input
                  className="w-full h-12 px-space-md rounded-xl bg-surface-container-low text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
                  id="cust-name"
                  name="fullname"
                  placeholder="Ví dụ: Nguyễn Văn An"
                  required
                  type="text"
                  value={fullName}
                  onFocus={handleFocus}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-1">
                <label className="block font-label-badge text-label-badge text-on-surface-variant uppercase" htmlFor="cust-phone">
                  Số điện thoại nhận hàng (*)
                </label>
                <input
                  className="w-full h-12 px-space-md rounded-xl bg-surface-container-low text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
                  id="cust-phone"
                  name="phone"
                  placeholder="Ví dụ: 0987.654.321"
                  required
                  type="tel"
                  inputMode="numeric"
                  value={phone}
                  onFocus={handleFocus}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              {/* Full Address */}
              <div className="space-y-1">
                <label className="block font-label-badge text-label-badge text-on-surface-variant uppercase" htmlFor="cust-addr">
                  Địa chỉ nhận hàng chi tiết (*)
                </label>
                <input
                  className="w-full h-12 px-space-md rounded-xl bg-surface-container-low text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
                  id="cust-addr"
                  name="address"
                  placeholder="Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/thành phố"
                  required
                  type="text"
                  value={address}
                  onFocus={handleFocus}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              {/* Note (Optional) */}
              <div className="space-y-1">
                <label className="block font-label-badge text-label-badge text-on-surface-variant uppercase" htmlFor="cust-note">
                  Ghi chú giao hàng (Tùy chọn)
                </label>
                <input
                  className="w-full h-12 px-space-md rounded-xl bg-surface-container-low text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
                  id="cust-note"
                  name="note"
                  placeholder="Ví dụ: Giao giờ hành chính, gọi trước khi giao..."
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>

              {formError && (
                <div className="p-3 rounded-xl bg-error-container text-on-error-container text-xs font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">error</span>
                  <span>{formError}</span>
                </div>
              )}

              {/* Calculation Summary */}
              <div className="p-space-md rounded-2xl bg-surface-container-low space-y-2 text-sm">
                <div className="flex justify-between text-on-surface-variant">
                  <span>Tạm tính ({quantity} sản phẩm):</span>
                  <span className="font-bold text-primary">{subtotal.toLocaleString('vi-VN')}đ</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>Phí vận chuyển COD:</span>
                  <span className="font-bold text-primary">0đ (Miễn phí toàn quốc)</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>Bộ 2 quà tặng trị giá 700K:</span>
                  <span className="font-bold text-secondary">0đ (Đã áp dụng)</span>
                </div>
                <div className="pt-2 flex justify-between items-baseline">
                  <span className="font-bold text-primary uppercase">Tổng thanh toán khi nhận hàng:</span>
                  <span className="font-price-headline text-headline-md text-secondary font-black">
                    {totalPrice.toLocaleString('vi-VN')}đ
                  </span>
                </div>
              </div>

              {/* Big High Conversion Pulsing Button */}
              <button
                disabled={isSubmitting}
                className="w-full py-space-md px-space-lg rounded-2xl bg-gradient-to-r from-secondary-container via-secondary to-secondary text-on-secondary font-label-urgency text-label-urgency uppercase tracking-wider shadow-xl shadow-secondary/30 hover:scale-[1.02] active:scale-95 transition-all text-center flex items-center justify-center gap-space-xs"
                type="submit"
              >
                <span className="material-symbols-outlined">verified</span>
                {isSubmitting ? 'ĐANG XỬ LÝ ĐƠN HÀNG...' : '👉 XÁC NHẬN ĐẶT HÀNG NGAY (MIỄN PHÍ SHIP)'}
              </button>

              {/* Trust / Privacy guarantee note */}
              <p className="text-center text-xs text-on-surface-variant leading-relaxed">
                🔒 <strong>Cam kết bảo mật:</strong> Thông tin của bạn được bảo mật tuyệt đối 100%. Nhân viên chăm sóc khách hàng Yasumi Japan sẽ gọi điện tư vấn và xác nhận đơn hàng trước khi gửi.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
