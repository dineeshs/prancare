import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
const appRoutes: Routes = [
  { path: 'about-us', component:AboutUsComponent  },
  {  path: 'our-services', component:OurservicesComponent  },
  {  path: 'our-team', component:OurTeamComponent  },
  {  path: 'contact-us', component:ContactUsComponent  },
  {  path: 'home', component:HomeComponent  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
  { path: '**',   redirectTo: '/home' }
];


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    OurservicesComponent,
    OurTeamComponent,
    ContactUsComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
     
    ),
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



