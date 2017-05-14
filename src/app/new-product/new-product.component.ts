import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
  providers: [ ProductService ]
})
export class NewProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  addProduct(newName: string, newDescription: string, newSeller: string) {
    var newProduct: Product = new Product(newName, newDescription, newSeller);
    this.productService.addProduct(newProduct);
  }


  ngOnInit() {
  }

}
