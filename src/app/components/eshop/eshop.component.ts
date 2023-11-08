import {Component, computed, OnInit, signal} from '@angular/core';

@Component({
  selector: 'app-eshop',
  templateUrl: './eshop.component.html',
  styleUrls: ['./eshop.component.scss']
})
export class EshopComponent implements OnInit{
  products = [
    {
      name: "Tomatoes",
      quantity: 2,
      price: 5.00
    },
    {
      name: "Potatoes",
      quantity: 1,
      price: 4.00
    },
    {
      name: "Lettuces",
      quantity: 1,
      price: 3.00
    },
    {
      name: "Carrots",
      quantity: 1,
      price: 2.00
    },
    {
      name: "Garlics",
      quantity: 1,
      price: 1.00
    }
  ];
  productsSignal = signal(this.products);
  totalPrice = computed(() => {
    return this.productsSignal().reduce((current, next) => current + (next.quantity * next.price), 0);
  });

  deleteProduct(i: number) {
    this.products.splice(i,1);
    this.productsSignal.set(this.products.filter((product) => product !== this.products[i]))
    //this.calculatePrice();
  }

  ngOnInit(): void {
    //this.calculatePrice();
  }

  private calculatePrice(){
    /*
    let totalPrice = 0;
    for (let product of this.products) {
      totalPrice += product.price * product.quantity;
    }
    this.totalPrice = totalPrice;
    */
    //this.totalPrice = this.products.reduce((current, next) => current + (next.quantity * next.price), 0);
  }


}
