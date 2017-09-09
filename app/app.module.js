"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var home_component_1 = require("./components/home/home.component");
var eventsnews_component_1 = require("./components/eventsandnews/eventsnews.component");
var news_component_1 = require("./shared/news/news.component");
var events_component_1 = require("./shared/Event/events.component");
var banner_component_1 = require("./components/banner/banner.component");
var AboutUs_component_1 = require("./components/aboutUs/AboutUs.component");
var admission_component_1 = require("./components/admission/admission.component");
// import {PopupModule} from 'ng2-opd-popup';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'aboutUs', component: AboutUs_component_1.AboutUsComponent },
                { path: 'newsevent', component: eventsnews_component_1.EventNewsComponent },
                { path: 'admission', component: admission_component_1.AdmissionComponent },
                { path: '**', redirectTo: 'home', pathMatch: 'full' }
            ])
        ],
        declarations: [app_component_1.AppComponent,
            home_component_1.HomeComponent, banner_component_1.BannerComponent, news_component_1.NewsComponent, events_component_1.EventComponent,
            eventsnews_component_1.EventNewsComponent, AboutUs_component_1.AboutUsComponent, admission_component_1.AdmissionComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map