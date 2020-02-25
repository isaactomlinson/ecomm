const Repository = require('./repository');

class CartsRepository extends Repository {
    async deleteItem(cart, itemToAlter) {

        let items = cart.items;

        if (itemToAlter.quantity > 1) {
            for (let item of items) {
                if (item.id === itemToAlter.id) {
                    itemToAlter.quantity--;
                }
            }
        }  else {
            items = cart.items.filter(item => item.id !== itemToAlter.id);
        }
    
        await this.update(cart.id, { items });
    }
}

module.exports = new CartsRepository('carts.json');