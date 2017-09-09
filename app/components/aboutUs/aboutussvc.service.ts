import { Injectable } from '@angular/core';

import { IAboutUs } from './iabout.model';


@Injectable()
export class AboutUsService {

  getAboutUs(): IAboutUs {

    return {
      "aboutUsInfo": "about us info shreedhar",
      "leaders": [
        { "Title": "Title1", "FirstName": "FirstName1", "LastName": "LastName1", "Designation": "Designation1" },
        { "Title": "Title2", "FirstName": "FirstName2", "LastName": "LastName2", "Designation": "Designation2" },
        { "Title": "Title3", "FirstName": "FirstName3", "LastName": "LastName3", "Designation": "Designation3" },
        { "Title": "Title4", "FirstName": "FirstName4", "LastName": "LastName4", "Designation": "Designation4" },
        { "Title": "Title5", "FirstName": "FirstName5", "LastName": "LastName5", "Designation": "Designation5" }
      ],
      "prospectus": { "SchoolProsepectusId": 1, "ProspectusImage": "ProspectusImage1", "Description": "Description1" },
      "youTubeUrl":[{"Title":"","URL":"https://www.youtube.com/embed/i2bUBeQ0X-8"},{"Title":"","URL":"https://www.youtube.com/embed/d2aITYDBi1A"}]
    }
  };

}

