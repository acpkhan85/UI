import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';

import { HomeComponent }  from './components/home/home.component';
import { EventNewsComponent }  from './components/eventsandnews/eventsnews.component';
import { NewsComponent }  from './shared/news/news.component';
import { EventComponent }  from './shared/Event/events.component';
import { BannerComponent }  from './components/banner/banner.component';
import { AboutUsComponent }  from './components/aboutUs/AboutUs.component';
import { AdmissionComponent }  from './components/admission/admission.component';
// import {PopupModule} from 'ng2-opd-popup';

@NgModule({
  imports: [ BrowserModule,HttpModule,//PopupModule.forRoot(),
    RouterModule.forRoot([ 
    { path: 'home', component: HomeComponent }, 
    { path: 'aboutUs', component: AboutUsComponent }, 
    { path: 'newsevent', component: EventNewsComponent }, 
    { path: 'admission', component: AdmissionComponent }, 
    { path: '**', redirectTo: 'home', pathMatch: 'full' }   
    ])
           ],
  declarations: [ AppComponent,
    HomeComponent,BannerComponent,NewsComponent,EventComponent,
    EventNewsComponent,AboutUsComponent,AdmissionComponent
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
