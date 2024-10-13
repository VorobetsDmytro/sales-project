import { OrderItemModel } from "../models/order-item.model";

interface OrderDto {
  id: number;
  customerId: number;
  orderDate: Date;
  total: number;
  items?: OrderItemModel[];
}

export class OrderEntity {
  constructor(
    private readonly _id: number,
    private readonly _customerId: number,
    private readonly _orderDate: Date,
    private readonly _total: number,
    private readonly _items?: OrderItemModel[]
  ) {}

  get id(): number {
    return this._id;
  }

  get customerId(): number {
    return this._customerId;
  }

  get orderDate(): Date {
    return this._orderDate;
  }

  get total(): number {
    return this._total;
  }

  get items(): OrderItemModel[] | undefined {
    return this._items;
  }

  toDto(): OrderDto {
    return {
      id: this._id,
      customerId: this._customerId,
      orderDate: this._orderDate,
      total: this._total,
      items: this._items,
    };
  }
}
