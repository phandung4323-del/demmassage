import React from 'react';

export const StepsSection: React.FC = () => {
  return (
    <section className="w-full py-space-2xl bg-surface">
      <div className="max-w-[1180px] mx-auto px-mobile-gutter lg:px-desktop-gutter">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-badge text-label-badge uppercase text-secondary tracking-widest">
            Sử Dụng Tiện Lợi
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary font-extrabold mt-1">
            Chỉ 3 Bước Đơn Giản Để Bắt Đầu Thư Giãn
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg relative">
          {/* Step 1 */}
          <div className="p-space-lg rounded-2xl bg-surface-container-low shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-md text-headline-md mb-space-sm shadow-md">
              1
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Đặt Đệm &amp; Cắm Điện</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Trải đệm lên ghế sofa, ghế làm việc hoặc ghế xe ô tô, cố định đai lưng nếu cần và kết nối nguồn điện an toàn 12V.
            </p>
          </div>
          {/* Step 2 */}
          <div className="p-space-lg rounded-2xl bg-surface-container-low shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-headline-md text-headline-md mb-space-sm shadow-md">
              2
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Tựa Lưng Thư Thái</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Ngồi tựa thoải mái, căn chỉnh vị trí gối cổ vừa tầm gáy để các đầu con lăn tiếp xúc chính xác vào các huyệt vị.
            </p>
          </div>
          {/* Step 3 */}
          <div className="p-space-lg rounded-2xl bg-surface-container-low shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-md text-headline-md mb-space-sm shadow-md">
              3
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Bấm Phím &amp; Tận Hưởng</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Nhấn nút nguồn, chọn chế độ và bật nhiệt sưởi. Máy sẽ tự ngắt an toàn sau 15 phút mà bạn không cần bận tâm canh giờ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
