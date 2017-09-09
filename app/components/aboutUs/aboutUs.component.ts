import { Component } from '@angular/core';
import { AboutUsService } from './aboutussvc.service';
import { IAboutUs } from './iabout.model';

@Component({
   
        moduleId: module.id,
        templateUrl:'aboutUs.component.html',
        providers :[AboutUsService]
})
export class AboutUsComponent {        

        aboutUs : IAboutUs;
        info: string;
        constructor(private _aboutUsService  : AboutUsService ){               
                       
                }


        ngOnInit(): void{        
                this.info="test";
          var result = this._aboutUsService.getAboutUs();         
        }

}


 


 