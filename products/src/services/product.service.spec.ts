import { ProductService } from "./product.service";

describe('ProductService test', () => {
    let service: ProductService;

    const productRepositoryMock = {
        getProductById: jest.fn().mockImplementation((id) =>  ({
            id: id,
            name: "Product 1",
            price: 10.99,
            inventory: 110
        })),
        getAllProducts: jest.fn().mockImplementation(() => ([
          {
              "id": "1",
              "name": "Product 1",
              "price": "10.99",
              "inventory": "110"
          },
          {
              "id": "2",
              "name": "Product 2",
              "price": "19.99",
              "inventory": "50"
          },
          {
              "id": "3",
              "name": "Product 3",
              "price": "14.99",
              "inventory": "70"
          },
          {
              "id": "4",
              "name": "Product 4",
              "price": "9.99",
              "inventory": "30"
          },
          {
              "id": "5",
              "name": "Product 5",
              "price": "29.99",
              "inventory": "25"
          },
      ])),
    }

    beforeEach(async () => {
        service = new ProductService({
          productRepository: productRepositoryMock,
        } as any);
    });

    it('It should get product by id', async () =>{
        const id = 1;

        const productData = await service.getProductById(id)

        expect(productData).toHaveProperty("id")
        expect(productData.id).toEqual(id)
        expect(productData).toHaveProperty("name")
        expect(productData).toHaveProperty("price")
        expect(productData).toHaveProperty("inventory")
    })

    it('It should get all products', async () =>{
        const productData = await service.getAllProducts()

        expect(Array.isArray(productData)).toBe(true);

        productData.forEach((product: any) => {
            expect(product).toHaveProperty("id");
            expect(product).toHaveProperty("name");
            expect(product).toHaveProperty("price");
            expect(product).toHaveProperty("inventory");


            expect(typeof product.id).toBe('string');
            expect(typeof product.name).toBe('string');
            expect(typeof product.price).toBe('string');
            expect(typeof product.inventory).toBe('string');
        });
    })
})