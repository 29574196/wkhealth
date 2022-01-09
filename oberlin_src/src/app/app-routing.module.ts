import { ContactComponent } from './pages/contact/contact.component';
import { DomicilaryComponent } from './pages/domicilary/domicilary.component';
import { ServicesComponent } from './pages/services/services.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'domicilary-service', component: DomicilaryComponent},
  {path: 'contact-us', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
