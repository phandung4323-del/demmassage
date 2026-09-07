import React from 'react';

export const SolutionSection: React.FC = () => {
  return (
    <section className="w-full py-space-2xl bg-surface">
      <div className="max-w-[1180px] mx-auto px-mobile-gutter lg:px-desktop-gutter">
        <div className="text-center max-w-3xl mx-auto mb-space-xl">
          <span className="font-label-badge text-label-badge uppercase text-secondary tracking-wider">
            Đột Phá Y Học Trị Liệu Nhật Bản
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary font-black mt-1">
            Giải Pháp Massage Đa Vùng Đồng Bộ Trong Một Thiết Bị
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
            Hệ thống mô phỏng 6 điểm huyệt đạo cốt lõi, ôm sát trọn vẹn đường cong cơ thể từ gáy đến đùi mà không cần máy móc cồng kềnh.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Visual display featuring Image 4 & Image 5 */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-space-sm rounded-3xl bg-surface-container-low shadow-md overflow-hidden">
            <div className="w-full flex items-center justify-center max-h-[500px] overflow-hidden rounded-2xl bg-surface-container-lowest p-2">
              <img
                alt="Giải phẫu các vùng massage con lăn 3D silicon và túi nhiệt hồng ngoại"
                className="max-h-[480px] w-auto max-w-full object-contain mx-auto rounded-xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDadpXGh637rZpA6tiofZCq_Ab9mrnmBDKOLaL18f455nIO1MXq60HepnT8NlEGshrCSe6cN5LAxyOhOl4FkpOgzUzh4lvRDvmlZxpLKFO_2xoV_2Flbr19jtr_LmOMc_emfqdQOLgiT_He_aGqjcOebPYC7myY5k5YO-Xe-UiZ3-dy_qMpx5tekd5EfgQxE7Ccc2L7KsIIssGPHBwx6fdH4XrHRMO3IcK-b4u208qr3P83hKM7EUdzv6_xtjF11tFzIMM"
              />
            </div>
          </div>
          {/* Visual Infographic Path & Highlights */}
          <div className="lg:col-span-6 space-y-space-md">
            <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-md">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">share_location</span>
                Hành Trình Tác Động Chuẩn Xác 6 Điểm Vàng
              </h3>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="px-3 py-1 rounded-full bg-primary-container text-on-primary font-bold text-xs">
                  1. Cổ gáy
                </span>
                <span className="text-outline">→</span>
                <span className="px-3 py-1 rounded-full bg-primary-container text-on-primary font-bold text-xs">
                  2. Bả vai
                </span>
                <span className="text-outline">→</span>
                <span className="px-3 py-1 rounded-full bg-primary-container text-on-primary font-bold text-xs">
                  3. Cột sống lưng
                </span>
                <span className="text-outline">→</span>
                <span className="px-3 py-1 rounded-full bg-primary-container text-on-primary font-bold text-xs">
                  4. Thắt lưng eo
                </span>
                <span className="text-outline">→</span>
                <span className="px-3 py-1 rounded-full bg-primary-container text-on-primary font-bold text-xs">
                  5. Hông mông
                </span>
                <span className="text-outline">→</span>
                <span className="px-3 py-1 rounded-full bg-primary-container text-on-primary font-bold text-xs">
                  6. Đùi
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mt-3">
                Cơ chế xoa bóp xoay đảo chiều tự động kết hợp túi khí nâng hạ vùng eo giúp giải phóng các dây thần kinh bị chèn ép, mang lại cảm giác nhẹ bẫng tức thì.
              </p>
            </div>
            {/* Mini Comparison Table without borders */}
            <div className="overflow-hidden rounded-2xl bg-surface-container-low shadow-sm">
              <div className="grid grid-cols-4 bg-primary text-on-primary p-space-xs text-xs font-bold uppercase tracking-wider text-center">
                <div className="">Tiêu chí</div>
                <div className="text-tertiary-fixed-dim">Đệm Yasumi 3D</div>
                <div className="">Ghế massage to</div>
                <div className="">Đi Spa định kỳ</div>
              </div>
              <div className="grid grid-cols-4 p-space-xs text-xs text-center items-center bg-surface-container-lowest">
                <div className="font-bold text-left pl-2 text-primary">Chi phí</div>
                <div className="font-bold text-secondary">1.685.000đ (Dùng 5 năm)</div>
                <div className="text-outline">30 - 80 triệu</div>
                <div className="text-outline">15 - 25 triệu/năm</div>
              </div>
              <div className="grid grid-cols-4 p-space-xs text-xs text-center items-center bg-surface-container-low">
                <div className="font-bold text-left pl-2 text-primary">Tính di động</div>
                <div className="font-bold text-primary">Gấp gọn, mang ô tô/vp</div>
                <div className="text-outline">Cố định 1 chỗ</div>
                <div className="text-outline">Phải đến tiệm</div>
              </div>
              <div className="grid grid-cols-4 p-space-xs text-xs text-center items-center bg-surface-container-lowest">
                <div className="font-bold text-left pl-2 text-primary">Thời gian</div>
                <div className="font-bold text-primary">Bất kỳ lúc nào tại nhà</div>
                <div className="text-outline">Tại phòng riêng</div>
                <div className="text-outline">Mất 2-3h mỗi lần</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
