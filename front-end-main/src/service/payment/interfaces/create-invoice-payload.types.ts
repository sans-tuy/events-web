export interface InvoiceCreatePayload {
  payer_email: string;
  description: string;
  amount: number;
  customer_name: string;
  productUuid: string;
  orderNumber: string;
}
