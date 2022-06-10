import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material/material-module.module';
import { ServiceLandingPageComponent } from './service-landing-page/service-landing-page.component';
import { HomeLandingPageComponent } from './home-landing-page/home-landing-page.component';
import { AboutVsfcComponent } from './about-vsfc/about-vsfc.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { ServiceCategoriesComponent } from './service-categories/service-categories.component';
import { SecurityLandingPageComponent } from './security-landing-page/security-landing-page.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceLandingPageComponent,
    HomeLandingPageComponent,
    AboutVsfcComponent,
    CategoriesComponent,
    OurClientsComponent,
    FooterComponent,
    TopHeaderComponent,
    ServiceCategoriesComponent,
    SecurityLandingPageComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
