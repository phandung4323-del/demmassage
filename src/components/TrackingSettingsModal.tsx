import React, { useState } from 'react';
import { TrackingConfig } from '../types';
import { getTrackingConfig, saveTrackingConfig, setupTracking } from '../utils/tracking';
import { GOOGLE_APPS_SCRIPT_SAMPLE, getStoredOrders } from '../utils/googleSheets';

interface TrackingSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrackingSettingsModal: React.FC<TrackingSettingsModalProps> = ({ isOpen, onClose }) => {
  const [config, setConfig] = useState<TrackingConfig>(getTrackingConfig());
  const [activeTab, setActiveTab] = useState<'SETTINGS' | 'ORDERS' | 'SCRIPT'>('SETTINGS');
  const [copied, setCopied] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');
  const [orders, setOrders] = useState(getStoredOrders());

  if (!isOpen) return null;

  const handleSave = () => {
    saveTrackingConfig(config);
    setupTracking();
    setSaveMessage('Đã lưu cấu hình thành công!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const handleCopyScript = () => {
    navigator.clipboard.writeText(GOOGLE_APPS_SCRIPT_SAMPLE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleExportCSV = () => {
    if (orders.length === 0) {
      alert('Chưa có đơn hàng nào để xuất!');
      return;
    }

    const headers = [
      'Mã đơn hàng',
      'Thời gian',
      'Họ và tên',
      'Số điện thoại',
      'Địa chỉ',
      'Số lượng',
      'Tổng tiền (VNĐ)',
      'Ghi chú',
      'Upsell',
      'Trạng thái',
    ];

    const rows = orders.map((o) => [
      o.orderId,
      `"${o.createdAt}"`,
      `"${o.fullName}"`,
      `"'${o.phone}"`,
      `"${o.address.replace(/"/g, '""')}"`,
      o.quantity,
      o.totalPrice,
      `"${(o.note || '').replace(/"/g, '""')}"`,
      o.upsellAccepted ? 'Có' : 'Không',
      o.status,
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `don_hang_yasumi_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-3xl bg-surface-container-lowest shadow-2xl border border-outline-variant/40 overflow-hidden text-on-surface">
        {/* Header */}
        <div className="p-space-md bg-primary text-on-primary flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">tune</span>
            <h3 className="font-headline-sm text-headline-sm text-on-primary">
              Cấu Hình Tracking & Google Sheets
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center hover:bg-surface-container hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-outline-variant/30 bg-surface-container-low px-space-md pt-2">
          <button
            onClick={() => setActiveTab('SETTINGS')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${
              activeTab === 'SETTINGS'
                ? 'border-secondary text-secondary'
                : 'border-transparent text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Tracking & Webhook
          </button>
          <button
            onClick={() => {
              setOrders(getStoredOrders());
              setActiveTab('ORDERS');
            }}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${
              activeTab === 'ORDERS'
                ? 'border-secondary text-secondary'
                : 'border-transparent text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Đơn Hàng Đã Đặt ({orders.length})
          </button>
          <button
            onClick={() => setActiveTab('SCRIPT')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${
              activeTab === 'SCRIPT'
                ? 'border-secondary text-secondary'
                : 'border-transparent text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Mã Google Apps Script
          </button>
        </div>

        {/* Content */}
        <div className="p-space-md overflow-y-auto flex-1 space-y-space-md text-xs">
          {activeTab === 'SETTINGS' && (
            <div className="space-y-space-sm">
              {/* Google Sheets Webhook */}
              <div className="space-y-1">
                <label className="font-bold text-primary block flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-secondary">table_chart</span>
                  Google Sheets Webhook URL (Apps Script Web App)
                </label>
                <input
                  type="text"
                  placeholder="https://script.google.com/macros/s/.../exec"
                  value={config.googleSheetsWebhookUrl}
                  onChange={(e) => setConfig({ ...config, googleSheetsWebhookUrl: e.target.value })}
                  className="w-full h-10 px-3 rounded-xl bg-surface-container-low border border-outline-variant/40 focus:border-secondary focus:outline-none font-mono text-xs"
                />
                <p className="text-[11px] text-on-surface-variant">
                  Nhập link Web App từ Google Apps Script để đơn hàng tự động đổ thẳng vào Google Sheets.
                </p>
              </div>

              {/* Meta Pixel */}
              <div className="space-y-1">
                <label className="font-bold text-primary block flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-secondary">visibility</span>
                  Meta Pixel ID (Facebook Pixel)
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: 123456789012345"
                  value={config.metaPixelId}
                  onChange={(e) => setConfig({ ...config, metaPixelId: e.target.value })}
                  className="w-full h-10 px-3 rounded-xl bg-surface-container-low border border-outline-variant/40 focus:border-secondary focus:outline-none font-mono text-xs"
                />
                <p className="text-[11px] text-on-surface-variant">
                  Tự động kích hoạt các sự kiện: PageView, ViewContent, InitiateCheckout, Lead, Purchase, UpsellAccepted.
                </p>
              </div>

              {/* Google Analytics 4 */}
              <div className="space-y-1">
                <label className="font-bold text-primary block flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-secondary">analytics</span>
                  Google Analytics 4 (Measurement ID)
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: G-XXXXXXXXXX"
                  value={config.gaMeasurementId}
                  onChange={(e) => setConfig({ ...config, gaMeasurementId: e.target.value })}
                  className="w-full h-10 px-3 rounded-xl bg-surface-container-low border border-outline-variant/40 focus:border-secondary focus:outline-none font-mono text-xs"
                />
              </div>

              {/* Google Tag Manager */}
              <div className="space-y-1">
                <label className="font-bold text-primary block flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-secondary">label</span>
                  Google Tag Manager (GTM ID)
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: GTM-XXXXXXX"
                  value={config.gtmId}
                  onChange={(e) => setConfig({ ...config, gtmId: e.target.value })}
                  className="w-full h-10 px-3 rounded-xl bg-surface-container-low border border-outline-variant/40 focus:border-secondary focus:outline-none font-mono text-xs"
                />
              </div>

              {saveMessage && (
                <div className="p-2 rounded-xl bg-primary-container text-on-primary font-bold text-center animate-fade-in">
                  {saveMessage}
                </div>
              )}

              <button
                type="button"
                onClick={handleSave}
                className="w-full py-2.5 rounded-xl bg-secondary text-on-secondary font-bold text-xs uppercase tracking-wider hover:bg-secondary-container transition-colors"
              >
                LƯU CẤU HÌNH TRACKING
              </button>
            </div>
          )}

          {activeTab === 'ORDERS' && (
            <div className="space-y-space-sm">
              <div className="flex justify-between items-center">
                <span className="font-bold text-primary">Danh sách đơn hàng cục bộ ({orders.length})</span>
                <button
                  onClick={handleExportCSV}
                  className="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-bold text-xs flex items-center gap-1 hover:bg-primary-container"
                >
                  <span className="material-symbols-outlined text-sm">download</span>
                  Xuất file CSV / Excel
                </button>
              </div>

              {orders.length === 0 ? (
                <div className="p-8 text-center text-on-surface-variant bg-surface-container-low rounded-2xl">
                  Chưa có đơn hàng nào được gửi. Hãy đặt thử một đơn hàng trên trang!
                </div>
              ) : (
                <div className="overflow-x-auto rounded-2xl border border-outline-variant/30">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-primary text-on-primary">
                      <tr>
                        <th className="p-2">Thời gian</th>
                        <th className="p-2">Mã đơn</th>
                        <th className="p-2">Khách hàng</th>
                        <th className="p-2">SĐT</th>
                        <th className="p-2">SL</th>
                        <th className="p-2">Tổng tiền</th>
                        <th className="p-2">Upsell</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/20 bg-surface-container-lowest">
                      {orders.map((o) => (
                        <tr key={o.orderId} className="hover:bg-surface-container-low">
                          <td className="p-2 whitespace-nowrap">{o.createdAt}</td>
                          <td className="p-2 font-mono font-bold text-secondary">{o.orderId}</td>
                          <td className="p-2 font-medium">{o.fullName}</td>
                          <td className="p-2 font-mono">{o.phone}</td>
                          <td className="p-2">{o.quantity}</td>
                          <td className="p-2 font-bold text-primary">
                            {o.totalPrice.toLocaleString('vi-VN')}đ
                          </td>
                          <td className="p-2">
                            {o.upsellAccepted ? (
                              <span className="text-secondary font-bold">+290K Gối</span>
                            ) : (
                              'Không'
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {activeTab === 'SCRIPT' && (
            <div className="space-y-space-xs">
              <div className="flex justify-between items-center">
                <span className="font-bold text-primary">Hướng dẫn tạo Google Apps Script:</span>
                <button
                  onClick={handleCopyScript}
                  className="px-3 py-1.5 rounded-lg bg-secondary text-on-secondary font-bold text-xs flex items-center gap-1 hover:bg-secondary-container"
                >
                  <span className="material-symbols-outlined text-sm">content_copy</span>
                  {copied ? 'Đã sao chép!' : 'Sao chép mã'}
                </button>
              </div>

              <ol className="list-decimal list-inside space-y-1 text-[11px] text-on-surface-variant bg-surface-container-low p-3 rounded-xl">
                <li>Mở Google Trang Tính (Google Sheets) mới.</li>
                <li>Vào menu: <strong>Tiện ích mở rộng (Extensions) &gt; Apps Script</strong>.</li>
                <li>Dán đoạn mã dưới đây vào file <code>Code.gs</code>.</li>
                <li>Nhấn nút <strong>Triển khai (Deploy) &gt; Tùy chọn triển khai mới (New deployment)</strong>.</li>
                <li>Chọn loại: <strong>Ứng dụng web (Web app)</strong>.</li>
                <li>Phần &quot;Ai có quyền truy cập&quot; (Who has access): chọn <strong>Bất kỳ ai (Anyone)</strong>.</li>
                <li>Nhấn <strong>Triển khai (Deploy)</strong> và sao chép URL ứng dụng web dán vào tab &quot;Tracking & Webhook&quot;.</li>
              </ol>

              <pre className="p-3 rounded-xl bg-inverse-surface text-inverse-on-surface font-mono text-[11px] overflow-x-auto max-h-56">
                {GOOGLE_APPS_SCRIPT_SAMPLE}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
