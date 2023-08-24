export interface GetOrdersTypeResponse {
  orderNumber: string;
  orderDate: string;
  status: string;
  quantity: number;
  invoiceId: string;
  urlInvoice: string;
  totalPrice: number;
  userUuid: string;
  productUuid: string;
}
