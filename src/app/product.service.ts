import { Injectable } from '@angular/core';
import { Product } from './product.model';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

@Injectable()
export class ProductService {
  products: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.products = db.list('products');
  }

  getProducts() {
    return this.products;
  }

  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }

  getProductById(productId: string){
    return this.db.object('products/' + productId);
  }

  updateProduct(localProduct) {
    // problem getting the $key..
    var productFromDatabase = this.getProductById(localProduct.$key);
    productFromDatabase.update({
      species: localProduct.species,
      name: localProduct.name,
      age: localProduct.age,
      diet: localProduct.diet,
      caretaker: localProduct.caretaker,
      sex: localProduct.sex,
      likes: localProduct.likes,
      dislikes: localProduct.dislikes
    });
  }
}
