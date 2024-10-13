interface CustomerDto {
  id: number;
  name: string;
  address: string;
}

export class CustomerEntity {
  constructor(
    private readonly _id: number,
    private readonly _name: string,
    private readonly _address: string,
  ) {}

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get address(): string {
    return this._address;
  }

  toDto(): CustomerDto {
    return {
      id: this._id,
      name: this._name,
      address: this._address,
    };
  }
}
