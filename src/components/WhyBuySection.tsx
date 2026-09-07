import React from 'react';

export const WhyBuySection: React.FC = () => {
  return (
    <section className="w-full py-space-2xl bg-surface">
      <div className="max-w-[1180px] mx-auto px-mobile-gutter lg:px-desktop-gutter">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-badge text-label-badge uppercase text-secondary tracking-widest">
            Sự Lựa Chọn Sáng Suốt
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary font-extrabold mt-1">
            Tại Sao Hơn 15.000+ Khách Hàng Chọn Yasumi?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          <div className="p-space-md rounded-2xl bg-surface-container-low flex items-start gap-space-xs shadow-sm">
            <span className="material-symbols-outlined text-secondary text-2xl shrink-0">check_circle</span>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary text-base mb-1">Thư Giãn Tại Nhà</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Chủ động chăm sóc sức khỏe 24/7 mà không cần bước chân ra khỏi nhà.
              </p>
            </div>
          </div>
          <div className="p-space-md rounded-2xl bg-surface-container-low flex items-start gap-space-xs shadow-sm">
            <span className="material-symbols-outlined text-secondary text-2xl shrink-0">check_circle</span>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary text-base mb-1">Tiết Kiệm Tối Đa</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Chi phí chỉ bằng 2-3 lần đi spa nhưng sử dụng bền bỉ suốt nhiều năm.
              </p>
            </div>
          </div>
          <div className="p-space-md rounded-2xl bg-surface-container-low flex items-start gap-space-xs shadow-sm">
            <span className="material-symbols-outlined text-secondary text-2xl shrink-0">check_circle</span>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary text-base mb-1">Massage Đa Vùng</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Cơ chế xoa bóp đồng bộ từ cổ, vai đến lưng, thắt lưng và hông đùi.
              </p>
            </div>
          </div>
          <div className="p-space-md rounded-2xl bg-surface-container-low flex items-start gap-space-xs shadow-sm">
            <span className="material-symbols-outlined text-secondary text-2xl shrink-0">check_circle</span>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary text-base mb-1">Gối Cổ Tùy Chỉnh</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Góc nghiêng gối cổ chuyên biệt bám sát đốt sống cổ không bị hẫng.
              </p>
            </div>
          </div>
          <div className="p-space-md rounded-2xl bg-surface-container-low flex items-start gap-space-xs shadow-sm">
            <span className="material-symbols-outlined text-secondary text-2xl shrink-0">check_circle</span>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary text-base mb-1">Dễ Dùng Cho Người Già</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Phím bấm lớn, minh họa rõ ràng, người lớn tuổi chỉ bấm 1 nút là dùng.
              </p>
            </div>
          </div>
          <div className="p-space-md rounded-2xl bg-surface-container-low flex items-start gap-space-xs shadow-sm">
            <span className="material-symbols-outlined text-secondary text-2xl shrink-0">check_circle</span>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary text-base mb-1">Chỉ 15 Phút Mỗi Ngày</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Thời lượng vàng được các chuyên gia chỉnh hình khuyến nghị áp dụng.
              </p>
            </div>
          </div>
          <div className="p-space-md rounded-2xl bg-surface-container-low flex items-start gap-space-xs shadow-sm">
            <span className="material-symbols-outlined text-secondary text-2xl shrink-0">check_circle</span>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary text-base mb-1">Cho Cả Gia Đình</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Cả nhà từ ba mẹ, con cái đến ông bà đều có thể luân phiên thư giãn.
              </p>
            </div>
          </div>
          <div className="p-space-md rounded-2xl bg-surface-container-low flex items-start gap-space-xs shadow-sm">
            <span className="material-symbols-outlined text-secondary text-2xl shrink-0">check_circle</span>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary text-base mb-1">Bảo Hành Chính Hãng</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Cam kết 12 tháng 1 đổi 1 và hỗ trợ bảo dưỡng kỹ thuật trọn đời.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
