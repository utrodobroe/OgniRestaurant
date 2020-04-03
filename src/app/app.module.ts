import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { BasketComponent } from './components/basket/basket.component';

const appRouts: Routes = [
  {path: '',component:HomePageComponent},
  {path: '/delivery',component:DeliveryComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GalleryComponent,
    DeliveryComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRouts)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
