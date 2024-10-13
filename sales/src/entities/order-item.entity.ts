interface OrderItemDto {
  id: number;
  orderId: number;
  productId: number;
  quantity: string;
  unitPrice: number;
}

export class OrderEntity {
  constructor(
    private readonly _id: number,
    private readonly _orderId: number,
    private readonly _productId: number,
    private readonly _quantity: string,
    private readonly _unitPrice: number,
  ) {}

  get id(): number {
    return this._id;
  }

  get orderId(): number {
    return this._orderId;
  }

  get productId(): number {
    return this._productId;
  }

  get quantity(): string {
    return this._quantity;
  }

  get unitPrice(): number {
    return this._unitPrice;
  }

  toDto(): OrderItemDto {
    return {
      id: this._id,
      orderId: this._orderId,
      productId: this._productId,
      quantity: this._quantity,
      unitPrice: this._unitPrice,
    };
  }
}
