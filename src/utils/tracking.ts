import { OrderData, TrackingConfig } from '../types';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

const STORAGE_KEY = 'yasumi_tracking_config';

export const getTrackingConfig = (): TrackingConfig => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Error reading tracking config from localStorage', e);
  }

  return {
    metaPixelId: (import.meta as any).env?.VITE_META_PIXEL_ID || '',
    gaMeasurementId: (import.meta as any).env?.VITE_GA_MEASUREMENT_ID || '',
    gtmId: (import.meta as any).env?.VITE_GTM_ID || '',
    googleSheetsWebhookUrl: (import.meta as any).env?.VITE_GOOGLE_SHEETS_WEBHOOK_URL || '',
  };
};

export const saveTrackingConfig = (config: TrackingConfig) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (e) {
    console.error('Error saving tracking config', e);
  }
};

// Initialize GTM
export const initGTM = (gtmId: string) => {
  if (!gtmId || typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  });

  const existingScript = document.getElementById('gtm-script');
  if (!existingScript) {
    const script = document.createElement('script');
    script.id = 'gtm-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(script);
  }
};

// Initialize GA4
export const initGA4 = (measurementId: string) => {
  if (!measurementId || typeof window === 'undefined') return;
  const existingScript = document.getElementById('ga4-script');
  if (!existingScript) {
    const script = document.createElement('script');
    script.id = 'ga4-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer?.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId);
  }
};

// Initialize Meta Pixel
export const initMetaPixel = (pixelId: string) => {
  if (!pixelId || typeof window === 'undefined') return;
  if (!window.fbq) {
    const fbq: any = function () {
      if (fbq.callMethod) {
        fbq.callMethod.apply(fbq, arguments);
      } else {
        fbq.queue.push(arguments);
      }
    };
    window.fbq = fbq;
    if (!window._fbq) window._fbq = fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = '2.0';
    fbq.queue = [];

    const script = document.createElement('script');
    script.id = 'meta-pixel-script';
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);

    fbq('init', pixelId);
    fbq('track', 'PageView');
  }
};

// Unified Tracker initialization
export const setupTracking = () => {
  const config = getTrackingConfig();
  if (config.gtmId) initGTM(config.gtmId);
  if (config.gaMeasurementId) initGA4(config.gaMeasurementId);
  if (config.metaPixelId) initMetaPixel(config.metaPixelId);
};

// Track PageView
export const trackPageView = () => {
  // GTM
  window.dataLayer?.push({
    event: 'page_view',
    page_title: document.title,
    page_location: window.location.href,
  });

  // GA4
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
    });
  }

  // Meta Pixel
  if (window.fbq) {
    window.fbq('track', 'PageView');
  }
};

// Track ViewContent (Product View)
export const trackViewContent = (productName = 'Đệm Massage Toàn Thân Yasumi 3D', price = 1685000) => {
  // GTM
  window.dataLayer?.push({
    event: 'view_item',
    ecommerce: {
      items: [
        {
          item_name: productName,
          price: price,
          currency: 'VND',
        },
      ],
    },
  });

  // GA4
  if (window.gtag) {
    window.gtag('event', 'view_item', {
      currency: 'VND',
      value: price,
      items: [
        {
          item_name: productName,
          price: price,
        },
      ],
    });
  }

  // Meta Pixel
  if (window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: productName,
      value: price,
      currency: 'VND',
    });
  }
};

// Track InitiateCheckout
export const trackInitiateCheckout = (quantity: number, price: number) => {
  const total = price;

  // GTM
  window.dataLayer?.push({
    event: 'begin_checkout',
    ecommerce: {
      currency: 'VND',
      value: total,
      items: [
        {
          item_name: 'Đệm Massage Toàn Thân Yasumi 3D',
          quantity: quantity,
          price: price / quantity,
        },
      ],
    },
  });

  // GA4
  if (window.gtag) {
    window.gtag('event', 'begin_checkout', {
      currency: 'VND',
      value: total,
      items: [
        {
          item_name: 'Đệm Massage Toàn Thân Yasumi 3D',
          quantity: quantity,
          price: price / quantity,
        },
      ],
    });
  }

  // Meta Pixel
  if (window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      content_name: 'Đệm Massage Toàn Thân Yasumi 3D',
      num_items: quantity,
      value: total,
      currency: 'VND',
    });
  }
};

// Track Purchase / Lead
export const trackPurchase = (order: OrderData) => {
  // GTM
  window.dataLayer?.push({
    event: 'purchase',
    ecommerce: {
      transaction_id: order.orderId,
      value: order.totalPrice,
      currency: 'VND',
      items: [
        {
          item_name: `Đệm Massage Yasumi 3D (${order.quantity === 1 ? '1 Đệm' : '2 Đệm'})`,
          quantity: order.quantity,
          price: order.packagePrice,
        },
      ],
    },
  });

  // GA4
  if (window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: order.orderId,
      value: order.totalPrice,
      currency: 'VND',
      items: [
        {
          item_name: `Đệm Massage Yasumi 3D (${order.quantity === 1 ? '1 Đệm' : '2 Đệm'})`,
          quantity: order.quantity,
          price: order.packagePrice,
        },
      ],
    });
    window.gtag('event', 'generate_lead', {
      currency: 'VND',
      value: order.totalPrice,
    });
  }

  // Meta Pixel
  if (window.fbq) {
    window.fbq('track', 'Purchase', {
      content_name: 'Đệm Massage Toàn Thân Yasumi 3D',
      content_type: 'product',
      value: order.totalPrice,
      currency: 'VND',
      order_id: order.orderId,
      num_items: order.quantity,
    });
    window.fbq('track', 'Lead', {
      value: order.totalPrice,
      currency: 'VND',
    });
  }
};

// Track Upsell
export const trackUpsell = (order: OrderData, upsellName: string, upsellPrice: number) => {
  const newTotal = order.totalPrice + upsellPrice;

  // GTM
  window.dataLayer?.push({
    event: 'upsell_accepted',
    ecommerce: {
      transaction_id: order.orderId,
      upsell_item: upsellName,
      value: newTotal,
      currency: 'VND',
    },
  });

  // GA4
  if (window.gtag) {
    window.gtag('event', 'upsell_purchase', {
      transaction_id: order.orderId,
      item_name: upsellName,
      value: upsellPrice,
      currency: 'VND',
    });
  }

  // Meta Pixel
  if (window.fbq) {
    window.fbq('trackCustom', 'UpsellAccepted', {
      order_id: order.orderId,
      upsell_name: upsellName,
      upsell_value: upsellPrice,
      total_value: newTotal,
      currency: 'VND',
    });
  }
};
