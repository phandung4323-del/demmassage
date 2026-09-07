import React from 'react';

export const PersonasSection: React.FC = () => {
  return (
    <section className="w-full py-space-2xl bg-surface-container-low">
      <div className="max-w-[1180px] mx-auto px-mobile-gutter lg:px-desktop-gutter">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-badge text-label-badge uppercase text-secondary tracking-widest">
            Ai Nên Sở Hữu Ngay?
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary font-black mt-1">
            Thiết Kế Tối Ưu - Phù Hợp Cho Cả Gia Đình
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-sm">
          {/* Persona 1 */}
          <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center mb-space-xs">
                <span className="material-symbols-outlined">laptop_mac</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-base text-primary mb-1">Dân Văn Phòng</h3>
              <p className="font-body-md text-body-md text-xs text-on-surface-variant">
                Ngồi làm việc 8 - 10 tiếng mỗi ngày, thường xuyên bị tê mỏi vai gáy và cứng khớp cổ tay cột sống.
              </p>
            </div>
            <span className="font-label-badge text-label-badge text-secondary text-xs mt-3 block">
              Khuyên dùng: Chế độ 2
            </span>
          </div>
          {/* Persona 2 */}
          <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center mb-space-xs">
                <span className="material-symbols-outlined">directions_car</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-base text-primary mb-1">Bác Tài Lái Xe</h3>
              <p className="font-body-md text-body-md text-xs text-on-surface-variant">
                Tập trung căng thẳng trên đường dài, đau ê ẩm vùng lưng cụt, mông và đùi do ngồi một tư thế kéo dài.
              </p>
            </div>
            <span className="font-label-badge text-label-badge text-secondary text-xs mt-3 block">
              Khuyên dùng: Rung + Nhiệt
            </span>
          </div>
          {/* Persona 3 */}
          <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center mb-space-xs">
                <span className="material-symbols-outlined">elderly</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-base text-primary mb-1">Bố Mẹ, Ông Bà</h3>
              <p className="font-body-md text-body-md text-xs text-on-surface-variant">
                Khí huyết kém lưu thông, thoái hóa khớp tuổi già, hay bị lạnh lưng bụng và trằn trọc khó ngủ về đêm.
              </p>
            </div>
            <span className="font-label-badge text-label-badge text-secondary text-xs mt-3 block">
              Khuyên dùng: Chế độ 1 Êm Dịu
            </span>
          </div>
          {/* Persona 4 */}
          <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center mb-space-xs">
                <span className="material-symbols-outlined">fitness_center</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-base text-primary mb-1">Người Thể Thao</h3>
              <p className="font-body-md text-body-md text-xs text-on-surface-variant">
                Tập gym, chạy bộ, vận động viên cần giải tỏa căng cứng cơ, giải phóng acid lactic bắp thịt sau buổi tập.
              </p>
            </div>
            <span className="font-label-badge text-label-badge text-secondary text-xs mt-3 block">
              Khuyên dùng: Cường độ 3
            </span>
          </div>
          {/* Persona 5 */}
          <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center mb-space-xs">
                <span className="material-symbols-outlined">engineering</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-base text-primary mb-1">Người Lao Động</h3>
              <p className="font-body-md text-body-md text-xs text-on-surface-variant">
                Khuân vác nặng, đứng nhiều giờ, cột sống chịu áp lực lớn cần được phục hồi thư giãn mỗi tối.
              </p>
            </div>
            <span className="font-label-badge text-label-badge text-secondary text-xs mt-3 block">
              Khuyên dùng: Đảo Chiều + Bi 3D
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
