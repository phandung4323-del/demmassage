import React from 'react';

export const RemoteDetailSection: React.FC = () => {
  return (
    <section className="w-full py-space-2xl bg-surface-container-low">
      <div className="max-w-[1180px] mx-auto px-mobile-gutter lg:px-desktop-gutter">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-badge text-label-badge uppercase text-secondary tracking-widest">
            Thiết Kế Trực Quan
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary font-black mt-1">
            Remote Điều Khiển Thông Minh - Dễ Dùng Cho Mọi Lứa Tuổi
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
            Các phím chức năng bố trí khoa học, nút bấm cơ nổi có đèn LED hiển thị rõ ràng thông số.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Visual Remote Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="max-w-xs rounded-3xl overflow-hidden shadow-2xl bg-surface-container-lowest p-2">
              <img
                alt="Chi tiết các nút bấm trên điều khiển từ xa đệm massage Yasumi"
                className="w-full h-auto object-cover rounded-2xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9njy5PSkvVZxu51aivOwSsZoUJrLZ7IRT1ub0JlTh9NPBf52BGC2SeOzcuh0ubnjrIkuzko25sApjswErYiGIqPoUfwBeaWTxutgBng3tw4slssCSz-Oas0NNLBzfxpLPm8_M6UhwxgX-PhrKtZWNsIc5A77eyL_-Ame7kWziFImP072WiL3QbEx4YT72RU24a3bVgOSDAUJeVRcpWOL3gBQpptA4TUxvrbjHKyJA6EuKmOr3odWb3QALaiV36YiR_Mc"
              />
            </div>
          </div>
          {/* Infographic Breakdown List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
            {/* Button 1 */}
            <div className="p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-space-xs">
              <span className="material-symbols-outlined text-error text-2xl shrink-0">power_settings_new</span>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-sm text-primary">Nút Bật / Tắt (Power)</h3>
                <p className="font-body-md text-body-md text-xs text-on-surface-variant">
                  Khởi động tức thì chu trình massage 15 phút, màn hình hiển thị thời gian giảm dần.
                </p>
              </div>
            </div>
            {/* Button 2 */}
            <div className="p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-space-xs">
              <span className="material-symbols-outlined text-primary text-2xl shrink-0">dashboard_customize</span>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-sm text-primary">Nút Chế Độ (Mode)</h3>
                <p className="font-body-md text-body-md text-xs text-on-surface-variant">
                  Luân chuyển linh hoạt giữa 5 bài xoa bóp tự động được lập trình theo vật lý trị liệu.
                </p>
              </div>
            </div>
            {/* Button 3 */}
            <div className="p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-space-xs">
              <span className="material-symbols-outlined text-secondary text-2xl shrink-0">speed</span>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-sm text-primary">Nút Cường Độ (Speed)</h3>
                <p className="font-body-md text-body-md text-xs text-on-surface-variant">
                  3 cấp độ tốc độ xoay từ êm dịu, vừa vặn đến chuyên sâu xóa tan đau mỏi.
                </p>
              </div>
            </div>
            {/* Button 4 */}
            <div className="p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-space-xs">
              <span className="material-symbols-outlined text-primary text-2xl shrink-0">autorenew</span>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-sm text-primary">Nút Đảo Chiều (Direction)</h3>
                <p className="font-body-md text-body-md text-xs text-on-surface-variant">
                  Xoay xuôi và xoay ngược giúp con lăn tác động sâu vào mọi ngóc ngách cơ bắp.
                </p>
              </div>
            </div>
            {/* Button 5 */}
            <div className="p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-space-xs">
              <span className="material-symbols-outlined text-secondary text-2xl shrink-0">vibration</span>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-sm text-primary">Nút Rung (Vibration)</h3>
                <p className="font-body-md text-body-md text-xs text-on-surface-variant">
                  Kích hoạt động cơ rung tần số cao vùng đệm mông, giải phóng hiện tượng tê chân.
                </p>
              </div>
            </div>
            {/* Button 6 */}
            <div className="p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-space-xs">
              <span className="material-symbols-outlined text-error text-2xl shrink-0">thermostat</span>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-sm text-primary">Nút Nhiệt (Heat)</h3>
                <p className="font-body-md text-body-md text-xs text-on-surface-variant">
                  Bật/tắt chế độ đèn hồng ngoại làm ấm lưng và cổ, hỗ trợ tuần hoàn máu tối ưu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
