import React from 'react';

interface FeaturesSectionProps {
  onScrollToOrder: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onScrollToOrder }) => {
  return (
    <section id="tinh-nang" className="w-full py-space-2xl bg-surface-container-low">
      <div className="max-w-[1180px] mx-auto px-mobile-gutter lg:px-desktop-gutter">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-badge text-label-badge uppercase text-secondary tracking-widest">
            Đặc Tính Công Nghệ Vượt Trội
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary font-extrabold mt-1">
            5 Tính Năng Nâng Tầm Trải Nghiệm Thư Giãn
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {/* Feature 1 */}
          <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center mb-space-sm">
                <span className="material-symbols-outlined text-2xl">all_inclusive</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">1. Massage Toàn Thân Đồng Bộ</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Tác động đa điểm cùng 1 lúc: cổ gáy, cột sống, eo sườn và rung mông đùi. Không phải chuyển dịch máy móc phức tạp.
              </p>
            </div>
            <span className="font-label-badge text-label-badge text-secondary font-bold mt-space-md uppercase">
              Đồng bộ 100% cơ thể
            </span>
          </div>
          {/* Feature 2 */}
          <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center mb-space-sm">
                <span className="material-symbols-outlined text-2xl">airline_seat_recline_extra</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">2. Thiết Kế Ôm Sát Công Thái Học</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Khung đệm uốn lượn theo cấu trúc tự nhiên của cột sống, nâng đỡ thắt lưng tối ưu, triệt tiêu áp lực đè nặng lên đĩa đệm.
              </p>
            </div>
            <span className="font-label-badge text-label-badge text-secondary font-bold mt-space-md uppercase">
              Chuẩn đường cong sinh lý
            </span>
          </div>
          {/* Feature 3 */}
          <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center mb-space-sm">
                <span className="material-symbols-outlined text-2xl">front_hand</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">3. Bi Lăn 3D Bọc Silicon Cao Cấp</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Cụm đầu lăn mềm mại mô phỏng ngón tay nghệ nhân Shiatsu xoa bóp, day ấn sâu vào từng nhóm cơ mà không làm bầm tím da.
              </p>
            </div>
            <span className="font-label-badge text-label-badge text-secondary font-bold mt-space-md uppercase">
              Mô phỏng tay người 99%
            </span>
          </div>
          {/* Feature 4 */}
          <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center mb-space-sm">
                <span className="material-symbols-outlined text-2xl">heat</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">4. Chườm Nóng Hồng Ngoại</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Công nghệ sưởi nhiệt hồng ngoại tỏa đều mức 42 - 45°C giúp làm ấm cơ thể, kích thích lưu thông máu và làm dịu nhanh cơn nhức.
              </p>
            </div>
            <span className="font-label-badge text-label-badge text-secondary font-bold mt-space-md uppercase">
              Làm ấm tức thì 45°C
            </span>
          </div>
          {/* Feature 5 (spans 2 cols on md/lg) */}
          <div className="md:col-span-2 lg:col-span-2 p-space-lg rounded-2xl bg-primary text-on-primary shadow-lg flex flex-col sm:flex-row items-center justify-between gap-space-md">
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center mb-space-sm">
                <span className="material-symbols-outlined text-2xl">touch_app</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-primary mb-1">5. Điều Khiển Cầm Tay Tiện Lợi 1 Chạm</h3>
              <p className="font-body-md text-body-md text-on-primary-container max-w-xl">
                Giao diện nút cơ to rõ kèm màn hình LED hiển thị đồng hồ đếm lùi. Tự động ngắt thông minh sau đúng 15 phút chuẩn chu trình thư giãn y khoa.
              </p>
            </div>
            <button
              onClick={onScrollToOrder}
              className="shrink-0 px-space-md py-space-sm rounded-xl bg-secondary text-on-secondary font-label-urgency text-label-urgency uppercase shadow-md hover:bg-secondary-container transition-all"
            >
              Trải Nghiệm Ngay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
