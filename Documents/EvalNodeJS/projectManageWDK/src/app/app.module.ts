import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { AppRoutingModule} from './app-routing.module';
import { ProjetsComponent } from './pages/projets/projets.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { SalariesComponent } from './pages/salaries/salaries.component';
import { HomealariesComponent } from './pages/homealaries/homealaries.component';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProjetsComponent,
    ClientsComponent,
    SalariesComponent,
    HomealariesComponent,
    AuthComponent
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
