const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export interface License {
  id: string;
  name: string;
  price: number;
  duration: string;
  durationDays: number;
}

export interface CreateInvoiceRequest {
  licenseId: string;
  email: string;
  telegramUsername: string;
}

export interface CreateInvoiceResponse {
  success: boolean;
  orderId: string;
  invoiceId: string;
  invoiceUrl: string;
  amount: number;
  currency: string;
  license: string;
  duration: string;
}

export interface OrderStatus {
  orderId: string;
  status: 'pending' | 'paid' | 'expired' | 'cancelled';
  licenseId: string;
  license: License;
  createdAt: string;
}

class PaymentService {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(`${API_URL}/payment${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Request failed' }));
      throw new Error(error.error || `API error: ${response.status}`);
    }

    return response.json();
  }

  async getLicenses(): Promise<License[]> {
    return this.request<License[]>('/licenses');
  }

  async createInvoice(data: CreateInvoiceRequest): Promise<CreateInvoiceResponse> {
    return this.request<CreateInvoiceResponse>('/create-invoice', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getOrderStatus(orderId: string): Promise<OrderStatus> {
    return this.request<OrderStatus>(`/status/${orderId}`);
  }

  async getAvailableCurrencies(): Promise<{ currencies: string[] }> {
    return this.request<{ currencies: string[] }>('/currencies');
  }
}

export const paymentService = new PaymentService();
