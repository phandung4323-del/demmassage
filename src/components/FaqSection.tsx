import React, { useState } from 'react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: '1. Massage có bị quá mạnh hay gây đau rát vùng xương không?',
      a: 'Hoàn toàn không. Máy có 3 mức cường độ từ Nhẹ đến Mạnh cùng cụm con lăn bọc silicon mềm mô phỏng bàn tay thật, bạn dễ dàng chọn mức độ êm ái phù hợp nhất với thể trạng cá nhân mà không hề gây cảm giác cấn đau.',
    },
    {
      q: '2. Sản phẩm có dễ sử dụng cho người già, bố mẹ lớn tuổi không?',
      a: 'Cực kỳ dễ dàng! Bảng điều khiển từ xa có các nút bấm bấm đơn giản, màn hình LED hiển thị số to rõ, đi kèm sách hướng dẫn sử dụng bằng tiếng Việt có hình minh họa chi tiết. Người già chỉ cần ấn nút nguồn là máy tự động vận hành.',
    },
    {
      q: '3. Đệm hoạt động có phát ra tiếng ồn lớn không?',
      a: 'Động cơ lõi đồng nguyên chất thế hệ mới vận hành siêu êm với độ ồn dưới 45dB, bạn có thể vừa thư giãn massage vừa xem TV, đọc sách hoặc nghe nhạc nhẹ nhàng mà hoàn toàn không bị làm phiền.',
    },
    {
      q: '4. Có thể cắm sử dụng trực tiếp trên xe ô tô được không?',
      a: 'Có! Bộ sản phẩm có thể sử dụng cổng cắm tẩu sạc ô tô 12V chuyên dụng, mặt sau có đai thun co giãn chắc chắn giúp cố định đệm ôm sát vào ghế xe, mang lại sự dễ chịu cho tài xế trong các chuyến đi dài.',
    },
    {
      q: '5. Chính sách bảo hành và cam kết đổi trả như thế nào?',
      a: 'Sản phẩm được bảo hành chính hãng 12 tháng tại các trung tâm bảo hành Hà Nội & TP.HCM. Cam kết 1 đổi 1 trong vòng 7 ngày đầu nếu có bất kỳ lỗi nào từ nhà sản xuất. Miễn phí vận chuyển COD toàn quốc, khách hàng được bóc kiện hàng kiểm tra thử máy trước khi thanh toán.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full py-space-2xl bg-surface-container-low">
      <div className="max-w-[1180px] mx-auto px-mobile-gutter lg:px-desktop-gutter">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-badge text-label-badge uppercase text-secondary tracking-widest">
            Hỗ Trợ Khách Hàng
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary font-extrabold mt-1">
            Giải Đáp Mọi Thắc Mắc Của Bạn
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-space-xs" id="faq-accordion">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="rounded-2xl bg-surface-container-lowest shadow-sm overflow-hidden faq-item">
                <button
                  className="w-full p-space-md text-left flex items-center justify-between gap-space-sm font-headline-sm text-headline-sm text-primary transition-colors focus:outline-none"
                  onClick={() => toggle(idx)}
                  type="button"
                >
                  <span>{item.q}</span>
                  <span className="material-symbols-outlined faq-icon transition-transform">
                    {isOpen ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-space-md pb-space-md text-on-surface-variant font-body-md text-body-md faq-content">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
