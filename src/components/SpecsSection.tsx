import React from 'react';

export const SpecsSection: React.FC = () => {
  return (
    <section className="w-full py-space-2xl bg-surface">
      <div className="max-w-[1180px] mx-auto px-mobile-gutter lg:px-desktop-gutter">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-badge text-label-badge uppercase text-secondary tracking-widest">
            Tiêu Chuẩn Chất Lượng
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary font-extrabold mt-1">
            Thông Số Kỹ Thuật Chi Tiết
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
          {/* Spec Table Card */}
          <div className="p-space-lg rounded-3xl bg-surface-container-lowest shadow-md">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-space-md flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">memory</span>
              Thông Số Vận Hành
            </h3>
            <div className="space-y-space-xs text-sm">
              <div className="flex justify-between py-2 bg-surface-container-low px-space-sm rounded-lg">
                <span className="text-on-surface-variant font-medium">Tên sản phẩm</span>
                <span className="font-bold text-primary">Đệm Massage Toàn Thân Yasumi 3D</span>
              </div>
              <div className="flex justify-between py-2 px-space-sm rounded-lg">
                <span className="text-on-surface-variant font-medium">Điện áp định mức</span>
                <span className="font-bold text-primary">12V – 2A (Cực kỳ an toàn)</span>
              </div>
              <div className="flex justify-between py-2 bg-surface-container-low px-space-sm rounded-lg">
                <span className="text-on-surface-variant font-medium">Công suất tiêu thụ</span>
                <span className="font-bold text-primary">24W (Siêu tiết kiệm điện)</span>
              </div>
              <div className="flex justify-between py-2 px-space-sm rounded-lg">
                <span className="text-on-surface-variant font-medium">Chất liệu bề mặt</span>
                <span className="font-bold text-primary">Da PU cao cấp + Vải lưới tổ ong tản nhiệt</span>
              </div>
              <div className="flex justify-between py-2 bg-surface-container-low px-space-sm rounded-lg">
                <span className="text-on-surface-variant font-medium">Hẹn giờ thông minh</span>
                <span className="font-bold text-primary">Tự ngắt sau 15 phút</span>
              </div>
              <div className="flex justify-between py-2 px-space-sm rounded-lg">
                <span className="text-on-surface-variant font-medium">Kích thước sản phẩm</span>
                <span className="font-bold text-primary">65 × 20 × 40 cm (Dễ gập gọn)</span>
              </div>
              <div className="flex justify-between py-2 bg-surface-container-low px-space-sm rounded-lg">
                <span className="text-on-surface-variant font-medium">Trọng lượng</span>
                <span className="font-bold text-primary">~ 3.5 kg</span>
              </div>
            </div>
          </div>
          {/* In-the-box Card */}
          <div className="p-space-lg rounded-3xl bg-primary text-on-primary shadow-md flex flex-col justify-between">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-primary mb-space-md flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary-fixed-dim">inventory_2</span>
                Bộ Sản Phẩm Bàn Giao Bao Gồm
              </h3>
              <ul className="space-y-space-sm font-body-md text-body-md text-on-primary-container">
                <li className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim">check_circle</span>
                  <span><strong>01</strong> Đệm massage toàn thân Yasumi 3D chính hãng</span>
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim">check_circle</span>
                  <span><strong>01</strong> Remote điều khiển có dây màn hình LED</span>
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim">check_circle</span>
                  <span><strong>01</strong> Củ nguồn gia đình chuyển đổi 220V sang 12V</span>
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim">check_circle</span>
                  <span><strong>01</strong> Sách hướng dẫn sử dụng tiếng Việt &amp; Thẻ bảo hành</span>
                </li>
                <li className="flex items-center gap-space-xs text-tertiary-fixed-dim">
                  <span className="material-symbols-outlined">redeem</span>
                  <span><strong>QUÀ TẶNG:</strong> 01 Máy massage cổ vai gáy chuyên dụng</span>
                </li>
                <li className="flex items-center gap-space-xs text-tertiary-fixed-dim">
                  <span className="material-symbols-outlined">redeem</span>
                  <span><strong>QUÀ TẶNG:</strong> 01 Đôi dép massage bấm huyệt bàn chân</span>
                </li>
              </ul>
            </div>
            <div className="mt-space-lg p-space-sm rounded-xl bg-primary-container text-xs text-on-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">verified_user</span>
              <span>Cam kết 100% linh kiện chính hãng tiêu chuẩn kiểm định Yasumi Japan.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
