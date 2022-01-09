import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {PreloaderComponent} from './layout/preloader/preloader.component';
import {NavComponent} from './layout/nav/nav.component';
import {FooterComponent} from './layout/footer/footer.component';
import { Index2Component } from './pages/index2/index2.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { DomicilaryComponent } from './pages/domicilary/domicilary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PreloaderComponent,
    NavComponent,
    FooterComponent,
    Index2Component,
    ContactComponent,
    ServicesComponent,
    DomicilaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
