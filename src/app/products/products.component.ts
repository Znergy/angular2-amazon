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
  isContentShowing: boolean = false;
  currentRoute: string = this.router.url;
  isProductShowing: boolean = false;
  products: Product[];
  filter: string = 'all';

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  goToDetailPage(clickedProduct) {
    this.router.navigate(['product', clickedProduct.$key]);
  };

}
