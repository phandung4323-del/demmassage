export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface OrderData {
  orderId: string;
  createdAt: string;
  fullName: string;
  phone: string;
  address: string;
  quantity: number;
  note?: string;
  packagePrice: number;
  subtotal: number;
  shippingFee: number;
  giftValue: number;
  totalPrice: number;
  upsellAccepted?: boolean;
  upsellProduct?: string;
  upsellPrice?: number;
  status: 'PENDING' | 'CONFIRMED';
}

export interface TrackingConfig {
  metaPixelId: string;
  gaMeasurementId: string;
  gtmId: string;
  googleSheetsWebhookUrl: string;
}
