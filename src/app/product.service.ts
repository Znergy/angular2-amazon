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

  updateProduct(localUpdatedProduct){
    var productEntryInFirebase = this.getProductById(localUpdatedProduct.$key);
    productEntryInFirebase.update({name: localUpdatedProduct.name,
                                description: localUpdatedProduct.description,
                                seller: localUpdatedProduct.seller});
  }

  deleteProduct(localProductToDelete){
    var productEntryInFirebase = this.getProductById(localProductToDelete.$key);
    productEntryInFirebase.remove();
  }
}
