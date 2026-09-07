import { OrderData } from '../types';
import { getTrackingConfig } from './tracking';

const ORDERS_STORAGE_KEY = 'yasumi_submitted_orders';

export const getStoredOrders = (): OrderData[] => {
  try {
    const raw = localStorage.getItem(ORDERS_STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Error loading stored orders', e);
  }
  return [];
};

export const saveOrderLocally = (order: OrderData) => {
  try {
    const orders = getStoredOrders();
    // Prepend new order
    const updated = [order, ...orders.filter((o) => o.orderId !== order.orderId)];
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Error saving order locally', e);
  }
};

export const updateOrderLocally = (updatedOrder: OrderData) => {
  try {
    const orders = getStoredOrders();
    const index = orders.findIndex((o) => o.orderId === updatedOrder.orderId);
    if (index !== -1) {
      orders[index] = updatedOrder;
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
    }
  } catch (e) {
    console.error('Error updating order locally', e);
  }
};

export const sendOrderToGoogleSheets = async (order: OrderData): Promise<{ success: boolean; message?: string }> => {
  // Always save locally first as a reliable fallback
  saveOrderLocally(order);

  const config = getTrackingConfig();
  const webhookUrl = config.googleSheetsWebhookUrl;

  if (!webhookUrl || !webhookUrl.trim().startsWith('http')) {
    console.warn('Google Sheets Webhook URL is not configured yet. Saved locally.');
    return {
      success: true,
      message: 'Đơn hàng đã được lưu trên hệ thống (Chưa cấu hình Google Sheets Webhook).',
    };
  }

  const payload = {
    timestamp: order.createdAt,
    orderId: order.orderId,
    fullName: order.fullName,
    phone: order.phone,
    address: order.address,
    quantity: order.quantity,
    packageName: order.quantity === 1 ? '1 Đệm Yasumi (1.685.000đ)' : '2 Đệm Yasumi (3.200.000đ)',
    packagePrice: order.packagePrice,
    subtotal: order.subtotal,
    shippingFee: 0,
    gifts: '01 Máy massage cổ vai gáy (450K) + 01 Đôi dép bấm huyệt (250K)',
    totalPrice: order.totalPrice,
    formattedTotal: `${order.totalPrice.toLocaleString('vi-VN')}đ`,
    note: order.note || '',
    upsellAccepted: order.upsellAccepted ? 'CÓ (+290K Gối Thảo Dược)' : 'Không',
    status: order.status || 'PENDING',
  };

  try {
    // Google Apps Script Web Apps often redirect or don't support standard CORS preflight.
    // 'no-cors' mode ensures the request completes successfully without being blocked by browser CORS.
    await fetch(webhookUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    return {
      success: true,
      message: 'Đã gửi đơn hàng thành công đến Google Sheets!',
    };
  } catch (err: any) {
    console.error('Error sending order to Google Sheets:', err);
    return {
      success: false,
      message: 'Không thể kết nối đến Google Sheets, đơn hàng đã được lưu dự phòng.',
    };
  }
};

export const GOOGLE_APPS_SCRIPT_SAMPLE = `function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Tạo tiêu đề cột nếu sheet đang trống
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Thời gian",
        "Mã đơn hàng",
        "Họ và tên",
        "Số điện thoại",
        "Địa chỉ nhận hàng",
        "Số lượng",
        "Gói sản phẩm",
        "Tổng tiền (VNĐ)",
        "Ghi chú",
        "Upsell kèm theo",
        "Trạng thái"
      ]);
      sheet.getRange(1, 1, 1, 11).setFontWeight("bold").setBackground("#0d3b2e").setFontColor("#ffffff");
    }

    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString("vi-VN"),
      data.orderId || "",
      data.fullName || "",
      "'" + (data.phone || ""),
      data.address || "",
      data.quantity || 1,
      data.packageName || "",
      data.formattedTotal || data.totalPrice || "",
      data.note || "",
      data.upsellAccepted || "Không",
      data.status || "Chờ xác nhận"
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}`;
