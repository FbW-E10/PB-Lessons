
class CoffeeShop {
    constructor(name, menu, orders) {
      this.name = name;
      this.menu = menu;
      this.orders = orders;
    }
  
     addOrder(order){  
        for(let element of this.menu){
            if(element.item === order ){
                this.orders.push(element.item);
                console.log( `${order} has been added`);
                return;
            }
        }
        console.log(`${order} is not available`);
    }

    fulfillOrder() {
      if (this.orders.length > 0) {
        console.log(`The ${this.orders[0].item} is ready`);
        this.orders.shift();
      } else {
        console.log(`All orders have been fulfilled`);
      }
    }
  
    listOrders() {
      return this.orders.map((x) => x.item);
    }
  
    dueAmount() {
      let result = this.orders.reduce((acc, item) => {
        return acc + this.menu.filter( m => m.item === item )[0].price;
      }, 0);
      return result;
    }
  
   
  }
  const BerlinCoffeshop = new CoffeeShop(
    "franko",
    [
      { item: "beer", type: "drink", price: 3 },
      { item: "milk", type: "drink", price: 2 },
      { item: "pizza", type: "food", price: 8 },
      { item: "tiramisu", type: "food", price: 4 },
      { item: "salad", type: "food", price: 5 },
    ],
    []
  );
  
  console.log(BerlinCoffeshop.orders);
  BerlinCoffeshop.addOrder("milk");
  BerlinCoffeshop.addOrder("salad");
  BerlinCoffeshop.addOrder("pizza");
//   BerlinCoffeshop.fulfillOrder();
//   BerlinCoffeshop.fulfillOrder();
//   BerlinCoffeshop.fulfillOrder();
console.log(BerlinCoffeshop.dueAmount());
  console.log(BerlinCoffeshop.orders);