import React from 'react';

interface GallerySectionProps {
  onScrollToOrder: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onScrollToOrder }) => {
  return (
    <section className="w-full py-space-2xl bg-surface-container-low">
      <div className="max-w-[1180px] mx-auto px-mobile-gutter lg:px-desktop-gutter">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-badge text-label-badge uppercase text-secondary tracking-widest">
            Đa Dụng Tiện Lợi
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary font-black mt-1">
            Linh Hoạt Trong Mọi Không Gian Sống
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
            Biến chiếc ghế làm việc, sofa phòng khách hay ghế ô tô trở thành trạm nghỉ dưỡng cá nhân của riêng bạn.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {/* Gallery Card 1: Sofa */}
          <div className="rounded-2xl overflow-hidden bg-surface-container-lowest shadow-sm flex flex-col">
            <div className="relative w-full bg-surface-container-low flex items-center justify-center p-2 overflow-hidden">
              <img
                alt="Đệm massage Yasumi đặt trên sofa phòng khách giúp thư giãn sau giờ làm việc"
                className="w-full h-auto max-h-[380px] object-contain rounded-xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRgYeIoV6KGJL2QuZJjHF7Bdd3pT3A15lahWL6viYbNNeUhDbwGPC1fphDTM2GKpSQQ3yy3txptW_AwQdUm7Z0Q41ovDIQGlMHKU3MpmPs-9E1qt1ewm7Epg2qT8ZZo4iLRUYpkgOXFcNMOm4B-i91pXVWev1v1n2qUcQab9OpK9w8SnFUbJV8fdo0ex0tVLvZ4tOn5lV8j46whFNLd8mJUP-eh1w1bCByWF0O2Vpe1S-Zy9lkUc9Hp7MhdIM31MKOe-c"
              />
              <div className="absolute bottom-3 left-3 bg-primary/85 text-on-primary px-3 py-1 rounded-lg text-xs font-bold">
                Sofa Phòng Khách
              </div>
            </div>
            <div className="p-space-md">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Thư Giãn Cùng Gia Đình</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Vừa tựa lưng massage, vừa đọc sách báo hoặc cùng người thân theo dõi những chương trình truyền hình yêu thích.
              </p>
            </div>
          </div>
          {/* Gallery Card 2: Remote */}
          <div className="rounded-2xl overflow-hidden bg-surface-container-lowest shadow-sm flex flex-col">
            <div className="relative w-full bg-surface-container-low flex items-center justify-center p-2 overflow-hidden">
              <img
                alt="Cận cảnh tay cầm điều khiển thông minh các nút bấm trực quan"
                className="w-full h-auto max-h-[380px] object-contain rounded-xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB5nbLVHVPIHLomixzCgSXww2DIrVuAkTy6dskBb_c8Q5mkFggXjhbYDDC5cs0Y3uBRllkgAZUfndihZm-fakam7KYO-9eqfyGvkSnLJepAw8VTfX2vQRkAzn4Ow504lhs1RLIpdntrLRdrO2Pa57XKYotLWbNMNpx6T-i5CvykbuJMzy79qbZJ0SulRbS_vY8M6UxDWKyULvnMS7S8r6GDJmoLdJq-2CikE6rbQoAumYrBbMKJGhyHYzgN-Nb9JeGAGQ"
              />
              <div className="absolute bottom-3 left-3 bg-secondary text-on-secondary px-3 py-1 rounded-lg text-xs font-bold">
                Điều Khiển Thông Minh
              </div>
            </div>
            <div className="p-space-md">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Thao Tác Nhẹ Nhàng 1 Chạm</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Chuyển đổi các cấp độ rung, bật nhiệt và đảo chiều bi lăn cực kỳ đơn giản cho người cao tuổi.
              </p>
            </div>
          </div>
          {/* Gallery Card 3: Car seat */}
          <div className="rounded-2xl overflow-hidden bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div className="relative w-full bg-surface-container-low flex items-center justify-center p-2 overflow-hidden">
              <img
                alt="Đệm massage tương thích với ghế ô tô và ghế văn phòng công sở"
                className="w-full h-auto max-h-[380px] object-contain rounded-xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhwKHxpbnIvveOEg5UmoAS68LsPVzR3qPpk9K8a5Ci4bGoEwvccDddRBLjPFLJJrS-4mQyf2tL4oRX2J-_LErnCtNqD8LfGriQ6yzqA1NSQayp8uYLsxbGKgkxerq9tefFqIoX8FAzAA1AdzRGhZRx0bwyVjj0gISSRDrVTx6IsaPNscxE1ztuiHcOXEHnwvFwurpAey9CbTHQLWguFp_3JRPoaH7Sivp3BYitKrtG9u2i8hBAN0MIXFUyYw1_3SQgtdQ"
              />
              <div className="absolute bottom-3 left-3 bg-primary-container text-on-primary px-3 py-1 rounded-lg text-xs font-bold">
                Ghế Ô Tô &amp; Văn Phòng
              </div>
            </div>
            <div className="p-space-md">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Xua Tan Ê Ẩm Khi Lái Xe</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Hỗ trợ dây đai cố định sau lưng ghế và củ cắm điện 12V tiện lợi, đồng hành êm ái trên mọi cung đường dài.
              </p>
            </div>
          </div>
        </div>
        {/* High Conversion Inter-Section CTA Strip */}
        <div className="mt-space-xl p-space-lg rounded-3xl bg-gradient-to-r from-primary via-primary-container to-primary text-on-primary flex flex-col lg:flex-row items-center justify-between gap-space-md shadow-xl">
          <div className="space-y-1 text-center lg:text-left">
            <span className="font-label-badge text-label-badge text-tertiary-fixed-dim uppercase tracking-wider">
              ⚡ Cơ Hội Nhận Quà Hôm Nay
            </span>
            <h3 className="font-headline-md text-headline-md font-black text-on-primary">
              Trải Nghiệm Thư Giãn Đỉnh Cao – Tiết Kiệm Ngay 1.305.000đ!
            </h3>
            <p className="font-body-md text-body-md text-on-primary-container">
              Tặng trọn bộ 1 máy massage gáy + 1 đôi dép bấm huyệt lòng bàn chân cho 27 khách hàng đầu tiên.
            </p>
          </div>
          <button
            onClick={onScrollToOrder}
            className="shrink-0 px-space-xl py-space-sm rounded-xl bg-secondary text-on-secondary font-label-urgency text-label-urgency uppercase tracking-wider shadow-lg hover:bg-secondary-container transition-transform active:scale-95"
          >
            ĐẶT HÀNG NGAY HÔM NAY
          </button>
        </div>
      </div>
    </section>
  );
};
