import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'category/:categoryid/product/:productid',
    component: ProductComponent
  },
  {
    path: 'category/:categoryid/products',
    component: ProductsComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'products/:id',
    component: ProductComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
