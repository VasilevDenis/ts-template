import Cart from '../service/Cart';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

describe('Cart', () => {
    let cart: Cart;

    beforeEach(() => {
        cart = new Cart();
    });

    it('should add items to the cart', () => {
        cart.add({ id: 1, name: 'Test Item 1', price: 10 });
        expect(cart.items.length).toBe(1);
    });

    it('should delete items from the cart by id', () => {
        cart.add({ id: 1, name: 'Test Item 1', price: 10 });
        cart.add({ id: 2, name: 'Test Item 2', price: 20 });
        cart.delete(1);
        expect(cart.items.length).toBe(1);
    });

    it('should calculate the total price of items in the cart', () => {
        cart.add({ id: 1, name: 'Test Item 1', price: 10 });
        cart.add({ id: 2, name: 'Test Item 2', price: 20 });
        expect(cart.sum()).toBe(30);
    });

    it('should calculate the total price with a discount', () => {
        cart.add({ id: 1, name: 'Test Item 1', price: 10 });
        cart.add({ id: 2, name: 'Test Item 2', price: 20 });
        expect(cart.sum_with_discount(10)).toBe(3); // Assuming a 10% discount
    });
});

