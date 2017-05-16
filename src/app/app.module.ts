import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { AdminComponent } from './admin/admin.component';
import { NewProductComponent } from './new-product/new-product.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AboutComponent } from './about/about.component';
import { SearchListPipe } from './search-list.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductsComponent,
    ProductComponent,
    AdminComponent,
    NewProductComponent,
    EditProductComponent,
    AboutComponent,
    SearchListPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
