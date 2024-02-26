import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    delete(idForSearch: number): void {
        this._items = this.items.filter(item => item['id'] !== idForSearch);
    }

    sum(): number {
        const totalPrice: number = this._items.reduce((acc: number, curr: Buyable) => acc + curr.price, 0);
        return totalPrice;
    }
    
    sum_with_discount(discount: number): number {
        const sum = this.sum();
        return (discount * sum) / 100;
    }
}