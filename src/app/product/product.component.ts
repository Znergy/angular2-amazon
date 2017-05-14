import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ ProductService ]
})
export class ProductComponent implements OnInit {
  productId: string;
  productToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private productService: ProductService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.productId = urlParameters['id'];
   });
   this.productToDisplay = this.productService.getProductById(this.productId);
  }

}
