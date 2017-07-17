import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';

import { HomeComponent }  from './components/home/home.component';
import { EventNewsComponent }  from './components/eventsandnews/eventsnews.component';
import { NewsComponent }  from './shared/news/news.component';
import { BannerComponent }  from './components/banner/banner.component';
import { AboutUsComponent }  from './components/aboutUs/AboutUs.component';
import { AdmissionComponent }  from './components/admission/admission.component';

@NgModule({
  imports: [ BrowserModule,HttpModule,RouterModule.forRoot([ 
    { path: 'home', component: HomeComponent }, 
    { path: 'aboutUs', component: AboutUsComponent }, 
    { path: 'newsevent', component: EventNewsComponent }, 
    { path: 'admission', component: AdmissionComponent }, 
    { path: '**', redirectTo: 'home', pathMatch: 'full' }   
    ])
           ],
  declarations: [ AppComponent,
    HomeComponent,
    EventNewsComponent,AboutUsComponent,AdmissionComponent
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
