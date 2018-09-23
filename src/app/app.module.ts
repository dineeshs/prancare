
import "materialize-css";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import {MatExpansionModule, MatIconModule, MatButtonModule, MatFormFieldModule, 
  MatDatepickerModule, MatNativeDateModule, MatInputModule, MatListModule, MatMenuModule
,MatButtonToggleModule, MatTabsModule, MatCardModule} from '@angular/material';
import { Assessments } from "./assessments/assessments.component";
import { Adult } from "./adult/adult.component";
const appRoutes: Routes = [
  { path: 'about-us', component:AboutUsComponent  },
  {  path: 'our-services', component:OurservicesComponent  },
  {  path: 'our-team', component:OurTeamComponent  },
  {  path: 'contact-us', component:ContactUsComponent  },
  {  path: 'home', component:HomeComponent  },
  { path: 'assessments', component:Assessments},
  {path:'adult', component:Adult},

  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**',   redirectTo: '/home' }
];


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    OurservicesComponent,
    OurTeamComponent,
    ContactUsComponent,
    HomeComponent,
    Assessments,
    Adult,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
     
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



