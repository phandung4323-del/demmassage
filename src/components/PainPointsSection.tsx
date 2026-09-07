import React from 'react';

interface PainPointsSectionProps {
  onScrollToOrder: () => void;
}

export const PainPointsSection: React.FC<PainPointsSectionProps> = ({ onScrollToOrder }) => {
  return (
    <section id="loi-ich" className="w-full py-space-2xl bg-surface-container-low">
      <div className="max-w-[1180px] mx-auto px-mobile-gutter lg:px-desktop-gutter">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-badge text-label-badge uppercase text-secondary tracking-widest">
            Cảnh Báo Sức Khỏe Cột Sống
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary font-extrabold mt-1">
            Bạn Có Đang Chịu Đựng Những Cơn Đau Này?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
            Đừng để những cơn nhức mỏi dai dẳng làm suy giảm năng suất làm việc, giấc ngủ và chất lượng sống mỗi ngày của bạn.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {/* Pain 1 */}
          <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-error-container text-on-error-container flex items-center justify-center mb-space-sm">
              <span className="material-symbols-outlined text-2xl">personal_injury</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Đau Mỏi Cổ Vai Gáy</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Cổ đơ cứng, bả vai căng cứng như đá, đau nhói mỗi khi xoay chuyển đầu sau 8 tiếng ngồi trước màn hình máy tính.
            </p>
          </div>
          {/* Pain 2 */}
          <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-error-container text-on-error-container flex items-center justify-center mb-space-sm">
              <span className="material-symbols-outlined text-2xl">accessibility_new</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Đau Buốt Thắt Lưng</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Cột sống thoái hóa, nhức buốt vùng lưng dưới khi đứng lên ngồi xuống, khó tìm được tư thế ngồi êm ái.
            </p>
          </div>
          {/* Pain 3 */}
          <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-error-container text-on-error-container flex items-center justify-center mb-space-sm">
              <span className="material-symbols-outlined text-2xl">sentiment_dissatisfied</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Uể Oải Toàn Thân</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Cơ bắp co cứng tích tụ axit lactic sau ngày dài làm việc căng thẳng, đêm trằn trọc mất ngủ vì ê ẩm.
            </p>
          </div>
          {/* Pain 4 */}
          <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-error-container text-on-error-container flex items-center justify-center mb-space-sm">
              <span className="material-symbols-outlined text-2xl">directions_car</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Lái Xe Đường Dài Mệt Mỏi</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Tê bì mông đùi, dồn nén trọng lượng cơ thể lên xương cụt gây chèn ép mạch máu trong các cuốc xe đường trường.
            </p>
          </div>
          {/* Pain 5 */}
          <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-error-container text-on-error-container flex items-center justify-center mb-space-sm">
              <span className="material-symbols-outlined text-2xl">schedule</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Không Có Thời Gian Đi Spa</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Chi phí massage vật lý trị liệu ngoài tiệm đắt đỏ hàng triệu mỗi tháng, mất hàng giờ đi lại chờ đợi.
            </p>
          </div>
          {/* Pain 6 */}
          <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-error-container text-on-error-container flex items-center justify-center mb-space-sm">
              <span className="material-symbols-outlined text-2xl">home_repair_service</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Ghế Massage Quá Đắt Đỏ</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Các dòng ghế massage toàn thân truyền thống cồng kềnh, chiếm diện tích nhà ở và có giá từ 30 - 80 triệu đồng.
            </p>
          </div>
        </div>
        {/* Takeaway highlight banner */}
        <div className="mt-space-xl p-space-md rounded-2xl bg-primary text-on-primary flex flex-col md:flex-row items-center justify-between gap-space-md shadow-lg">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-3xl text-tertiary-fixed-dim shrink-0">offline_bolt</span>
            <span className="font-headline-sm text-headline-sm">
              👉 Chỉ 15 phút mỗi ngày cùng đệm massage Yasumi giúp cơ thể hồi sinh năng lượng, giảm đau nhức tức thì!
            </span>
          </div>
          <button
            onClick={onScrollToOrder}
            className="shrink-0 px-space-lg py-2.5 rounded-xl bg-secondary text-on-secondary font-label-urgency text-label-urgency uppercase tracking-wider hover:bg-secondary-container transition-transform active:scale-95"
          >
            Nhận Giải Pháp Ngay
          </button>
        </div>
      </div>
    </section>
  );
};
