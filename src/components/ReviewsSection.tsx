import React from 'react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="danh-gia" className="w-full py-space-2xl bg-surface">
      <div className="max-w-[1180px] mx-auto px-mobile-gutter lg:px-desktop-gutter">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-badge text-label-badge uppercase text-secondary tracking-widest">
            Trải Nghiệm Thực Tế
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary font-extrabold mt-1">
            Hơn 15.000+ Khách Hàng Đã Hài Lòng
          </h2>
          <div className="flex items-center justify-center gap-1 text-amber-500 mt-2">
            <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: '"FILL" 1' }}>
              star
            </span>
            <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: '"FILL" 1' }}>
              star
            </span>
            <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: '"FILL" 1' }}>
              star
            </span>
            <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: '"FILL" 1' }}>
              star
            </span>
            <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: '"FILL" 1' }}>
              star
            </span>
            <span className="font-headline-sm text-headline-sm text-primary ml-2 font-bold">
              4.9 / 5.0 (2.418 đánh giá)
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {/* Review 1 */}
          <div className="p-space-lg rounded-2xl bg-surface-container-low shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-space-xs">
                <div className="flex text-amber-500">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                </div>
                <span className="text-xs text-outline">2 giờ trước</span>
              </div>
              <p className="font-body-md text-body-md text-primary italic mb-space-sm">
                &ldquo;Tôi ngồi máy tính cả ngày, tối về tựa vào đệm 15 phút là cổ vai gáy nhẹ bẫng, đỡ hẳn cảm giác đơ cứng. Đáng tiền từng hào!&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-space-xs pt-space-xs">
              <div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xs">
                HQ
              </div>
              <div>
                <span className="font-bold text-sm block text-primary">Trần Hoàng Quân (34 tuổi)</span>
                <span className="text-xs text-secondary flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-xs">verified</span> Đã mua hàng chính hãng
                </span>
              </div>
            </div>
          </div>
          {/* Review 2 */}
          <div className="p-space-lg rounded-2xl bg-surface-container-low shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-space-xs">
                <div className="flex text-amber-500">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                </div>
                <span className="text-xs text-outline">5 giờ trước</span>
              </div>
              <p className="font-body-md text-body-md text-primary italic mb-space-sm">
                &ldquo;Mua cho hai vợ chồng già dùng, bấm nút rất dễ, chế độ sưởi ấm vùng lưng làm ấm người, tối ngủ ngon và sâu giấc hơn trước rất nhiều.&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-space-xs pt-space-xs">
              <div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xs">
                NM
              </div>
              <div>
                <span className="font-bold text-sm block text-primary">Cô Nguyễn Thị Mai (58 tuổi)</span>
                <span className="text-xs text-secondary flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-xs">verified</span> Đã mua hàng chính hãng
                </span>
              </div>
            </div>
          </div>
          {/* Review 3 */}
          <div className="p-space-lg rounded-2xl bg-surface-container-low shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-space-xs">
                <div className="flex text-amber-500">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                </div>
                <span className="text-xs text-outline">Hôm qua</span>
              </div>
              <p className="font-body-md text-body-md text-primary italic mb-space-sm">
                &ldquo;Lực massage con lăn 3D đầm tay, xoa bóp chuẩn huyệt chứ không phải rung hời hợt như loại rẻ tiền. Đóng gói cẩn thận, quà tặng đầy đủ.&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-space-xs pt-space-xs">
              <div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xs">
                ĐT
              </div>
              <div>
                <span className="font-bold text-sm block text-primary">Bác Lê Đình Thắng (62 tuổi)</span>
                <span className="text-xs text-secondary flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-xs">verified</span> Đã mua hàng chính hãng
                </span>
              </div>
            </div>
          </div>
          {/* Review 4 */}
          <div className="p-space-lg rounded-2xl bg-surface-container-low shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-space-xs">
                <div className="flex text-amber-500">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                </div>
                <span className="text-xs text-outline">1 ngày trước</span>
              </div>
              <p className="font-body-md text-body-md text-primary italic mb-space-sm">
                &ldquo;Giao hàng siêu nhanh, được kiểm tra cắm thử điện rồi mới thanh toán. Quà máy mát xa cổ riêng biệt dùng cũng rất thích!&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-space-xs pt-space-xs">
              <div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xs">
                BN
              </div>
              <div>
                <span className="font-bold text-sm block text-primary">Chị Vũ Bích Ngọc (Hải Phòng)</span>
                <span className="text-xs text-secondary flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-xs">verified</span> Đã mua hàng chính hãng
                </span>
              </div>
            </div>
          </div>
          {/* Review 5 */}
          <div className="p-space-lg rounded-2xl bg-surface-container-low shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-space-xs">
                <div className="flex text-amber-500">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                </div>
                <span className="text-xs text-outline">2 ngày trước</span>
              </div>
              <p className="font-body-md text-body-md text-primary italic mb-space-sm">
                &ldquo;Mang lên xe cắm tẩu 12V massage lúc dừng nghỉ quá tiện. Hết hẳn chứng đau ê ẩm thắt lưng sau mỗi chuyến chạy xa.&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-space-xs pt-space-xs">
              <div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xs">
                TK
              </div>
              <div>
                <span className="font-bold text-sm block text-primary">Anh Đặng Tuấn Kiệt (Tài xế)</span>
                <span className="text-xs text-secondary flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-xs">verified</span> Đã mua hàng chính hãng
                </span>
              </div>
            </div>
          </div>
          {/* Review 6 */}
          <div className="p-space-lg rounded-2xl bg-surface-container-low shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-space-xs">
                <div className="flex text-amber-500">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                </div>
                <span className="text-xs text-outline">3 ngày trước</span>
              </div>
              <p className="font-body-md text-body-md text-primary italic mb-space-sm">
                &ldquo;Cả nhà mình ai cũng tranh nhau ngồi, từ ông xã đi làm về đến mẹ chồng. Da PU mịn đẹp, không bị mùi nhựa khó chịu.&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-space-xs pt-space-xs">
              <div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xs">
                TH
              </div>
              <div>
                <span className="font-bold text-sm block text-primary">Chị Phạm Thanh Hương (Bình Dương)</span>
                <span className="text-xs text-secondary flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-xs">verified</span> Đã mua hàng chính hãng
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
