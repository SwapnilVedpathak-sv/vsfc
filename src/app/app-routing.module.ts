import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLandingPageComponent } from './home-landing-page/home-landing-page.component';
import { HousekeepingLandingPageComponent } from './housekeeping-landing-page/housekeeping-landing-page.component';
import { ManpowerLandingPageComponent } from './manpower-landing-page/manpower-landing-page.component';
import { SecurityLandingPageComponent } from './security-landing-page/security-landing-page.component';
import { ServiceLandingPageComponent } from './service-landing-page/service-landing-page.component';

const routes: Routes = [
  { path: '', component: HomeLandingPageComponent },
  { path: 'services', component: ServiceLandingPageComponent },
  { path: 'housekeeping', component: HousekeepingLandingPageComponent },
  { path: 'security', component: SecurityLandingPageComponent },
  { path: 'manpower', component: ManpowerLandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
