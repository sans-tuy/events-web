export interface OrderCreatePayload {
  status: string;
  quantity: number;
  totalPrice: number;
  productUuid: string;
}
