import React from 'react';

export const BenefitsSection: React.FC = () => {
  return (
    <section className="w-full py-space-2xl bg-surface">
      <div className="max-w-[1180px] mx-auto px-mobile-gutter lg:px-desktop-gutter">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-badge text-label-badge uppercase text-secondary tracking-wider">
            Cảm Nhận Rõ Rệt Ngay Lần Dùng Đầu
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary font-extrabold mt-1">
            4 Lợi Ích Tuyệt Vời Bạn Cảm Thấy Ngay Sau 15 Phút
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {/* Benefit 1 */}
          <div className="flex gap-space-md p-space-lg rounded-2xl bg-surface-container-low shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center shrink-0 shadow-md">
              <span className="font-headline-md text-headline-md font-black">01</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                Giải Phóng Cổ Vai Gáy Căng Cứng
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Các đầu lăn xoay tròn tác động trực tiếp vào cơ thang và huyệt phong trì, xua tan cảm giác nặng đầu, đau đầu do căng thẳng làm việc.
              </p>
            </div>
          </div>
          {/* Benefit 2 */}
          <div className="flex gap-space-md p-space-lg rounded-2xl bg-surface-container-low shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center shrink-0 shadow-md">
              <span className="font-headline-md text-headline-md font-black">02</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                Cột Sống Lưng Êm Ái, Dẻo Dai Hơn
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Lực miết sâu dọc theo hai bên cột sống hỗ trợ giãn cơ cạnh sống, làm giảm tình trạng vẹo lệch tư thế và giảm áp lực lên đĩa đệm lưng.
              </p>
            </div>
          </div>
          {/* Benefit 3 */}
          <div className="flex gap-space-md p-space-lg rounded-2xl bg-surface-container-low shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center shrink-0 shadow-md">
              <span className="font-headline-md text-headline-md font-black">03</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                Khí Huyết Lưu Thông - Giấc Ngủ Sâu
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Nhiệt hồng ngoại kết hợp rung mông giúp đánh thức hệ vi tuần hoàn, cơ thể ấm áp nhẹ nhàng, dễ dàng đi vào giấc ngủ sâu không mộng mị.
              </p>
            </div>
          </div>
          {/* Benefit 4 */}
          <div className="flex gap-space-md p-space-lg rounded-2xl bg-surface-container-low shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center shrink-0 shadow-md">
              <span className="font-headline-md text-headline-md font-black">04</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                Tùy Biến Thích Hợp Cho Cả Nhà
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                3 mức độ: Nhẹ (cho ông bà/phụ nữ) – Vừa (cho người làm văn phòng) – Mạnh (cho nam giới/người tập thể thao giảm đau mỏi gân cốt).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
