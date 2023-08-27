import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }
  //INDEX
  indexSlider() {
    return this.http.get(environment.apiUrl + '/api/open/get-index-slider');
  }
  product(){
    return this.http.get(environment.apiUrl + '/api/open/all-product');
  }
  panel(){
    return this.http.get(environment.apiUrl + '/api/open/all-panel');
  }
  completeSolution(){
    return this.http.get(environment.apiUrl + '/api/open/info-complete-solution-provider');
  }
  eduSolution(){
    return this.http.get(environment.apiUrl + '/api/open/details-education');
  }
  conference(){
    return this.http.get(environment.apiUrl + '/api/open/conference-details');
  }
  featureProduct(){
    return this.http.get(environment.apiUrl + '/api/open/feature-product-info');
  }
  client(){
    return this.http.get(environment.apiUrl + '/api/open/honorable-client-details');
  }
  team(){
    return this.http.get(environment.apiUrl + '/api/open/our-team-member-list');
  }
  caseStudy(){
    return this.http.get(environment.apiUrl + '/api/open/case-study-list');
  }
  testimonial(){
    return this.http.get(environment.apiUrl + '/api/open/testimonial-list');
  }

  //about
  about_details() {
    return this.http.get(environment.apiUrl + '/api/open/about-details');
  }

  //PODIUM

  podiumIntro(){
    return this.http.get(environment.apiUrl + '/api/open/podium-introduction-details');
  }
  detailsPodium(){
    return this.http.get(environment.apiUrl + '/api/open/podium-details');
  }
  screenShare(){
    return this.http.get(environment.apiUrl + '/api/open/screen-share-details');
  }
  wirelessDevice(){
    return this.http.get(environment.apiUrl + '/api/open/details-wireless-device');
  }
  anotation(){
    return this.http.get(environment.apiUrl + '/api/open/anotation-details');
  }
  poduimFeature(){
    return this.http.get(environment.apiUrl + '/api/open/details-podium-feature');
  }
  podiumPresentation(){
    return this.http.get(environment.apiUrl + '/api/open/podium-prsentation-list');
  }
//device Interective
interactiveIntroDetails(){
  return this.http.get(environment.apiUrl + '/api/open/interactive-slider-details');
}

deviceList(){
  return this.http.get(environment.apiUrl + '/api/open/device-items-details');
}

//Interactive specificaton
specification(){
  return this.http.get(environment.apiUrl + '/api/open/list-of-InteractiveSpecification');
}

//video-link-details
interactiveVideoLinks(){
  return this.http.get(environment.apiUrl + '/api/open/video-link-details');
}
 //Signage
 signagrIntroDetails(){
  return this.http.get(environment.apiUrl + '/api/open/signage-introduction-details');
}

//signageDetails
signageDetails(){
  return this.http.get(environment.apiUrl + '/api/open/signage-details');
}

//Signage slider
signageSliderInfo(){
  return this.http.get(environment.apiUrl + '/api/open/details-signage-slider');
}

//Signage specification
signageSpecification(){
  return this.http.get(environment.apiUrl + '/api/open/list-of-signage-specification');
}

//Sinage video links
  SignageVideoLinks(){
    return this.http.get(environment.apiUrl + '/api/open/signage-video-link-details');
  }
 //Contact Introduction details
 contactIntroDetails(){
  return this.http.get(environment.apiUrl + '/api/open/contact-introduction-details');
}

//Location details

locationDetails(){
  return this.http.get(environment.apiUrl + '/api/open/location-details');
}

//mail send

sendMail(data: any) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${localStorage.getItem('token')}`,
  });
  return this.http.post(environment.apiUrl + '/api/open/send-a-mail', data, {
    headers: headers,
  });
}
}
