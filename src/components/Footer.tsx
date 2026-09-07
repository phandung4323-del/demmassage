import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-primary text-on-primary py-space-2xl pb-24 lg:pb-space-2xl">
      <div className="max-w-[1180px] mx-auto px-mobile-gutter lg:px-desktop-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl">
          {/* Brand Col */}
          <div className="space-y-space-xs">
            <div className="flex items-center gap-space-sm">
              <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">spa</span>
              </div>
              <span className="font-headline-sm text-headline-sm tracking-tight text-on-primary">
                YASUMI JAPAN
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-primary-container text-xs leading-relaxed">
              Thương hiệu thiết bị y tế và chăm sóc sức khỏe gia đình ứng dụng công nghệ Shiatsu Nhật Bản, vì một cuộc sống dẻo dai và tràn đầy năng lượng.
            </p>
          </div>
          {/* Contact Col */}
          <div className="space-y-space-xs">
            <h4 className="font-bold text-sm uppercase text-tertiary-fixed-dim">Liên Hệ &amp; Hỗ Trợ</h4>
            <ul className="space-y-1 text-xs text-on-primary-container">
              <li>Hotline CSKH: <strong>0398.63.68.69</strong> (24/7)</li>
              <li>Kỹ thuật / Bảo hành: <strong>0987.123.456</strong></li>
              <li>Email: cskh@yasumijapan.vn</li>
              <li>Website: www.yasumijapan.vn</li>
            </ul>
          </div>
          {/* Address Col */}
          <div className="space-y-space-xs">
            <h4 className="font-bold text-sm uppercase text-tertiary-fixed-dim">Địa Chỉ Văn Phòng</h4>
            <ul className="space-y-1 text-xs text-on-primary-container">
              <li><strong>Hà Nội:</strong> Tòa nhà Technosoft, Phố Duy Tân, Cầu Giấy, Hà Nội.</li>
              <li><strong>TP. Hồ Chí Minh:</strong> Số 126 Nguyễn Thị Minh Khai, Phường 6, Quận 3.</li>
            </ul>
          </div>
          {/* Policies Col */}
          <div className="space-y-space-xs">
            <h4 className="font-bold text-sm uppercase text-tertiary-fixed-dim">Chính Sách Bán Hàng</h4>
            <ul className="space-y-1 text-xs text-on-primary-container">
              <li>• Miễn phí giao hàng &amp; thử máy toàn quốc</li>
              <li>• Bảo hành chính hãng 12 tháng tại nhà</li>
              <li>• Đổi mới 1:1 trong 7 ngày đầu sử dụng</li>
              <li>• Cam kết bảo mật thông tin khách hàng</li>
            </ul>
          </div>
        </div>
        <div className="mt-space-xl pt-space-md text-center text-xs text-on-primary-container">
          © {new Date().getFullYear()} Yasumi Japan. Bản quyền thuộc về Công ty Cổ phần Thiết Bị Sức Khỏe Yasumi.
        </div>
      </div>
    </footer>
  );
};
