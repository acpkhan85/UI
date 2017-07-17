import { Component } from '@angular/core';
import { AboutUsService } from './aboutussvc.service';

@Component({
   
        moduleId: module.id,
        templateUrl:'aboutUs.component.html',
        providers :[AboutUsService]
})
export class AboutUsComponent {        

        constructor(private _aboutUsService  : AboutUsService ){               
            var result=  _aboutUsService.getAboutUs();                
                }


        ngOnInit():void{
                this._aboutUsService.getAboutUs();
        }

}


 


 