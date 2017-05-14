import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ ProductService ]
})
export class ProductsComponent implements OnInit {
  products: FirebaseListObservable<any[]>;

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  goToDetailPage(clickedProduct) {
    this.router.navigate(['products', clickedProduct.$key]);
  };

}
