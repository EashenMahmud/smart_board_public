import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-signage',
  templateUrl: './signage.component.html',
  styleUrls: ['./signage.component.css']
})
export class SignageComponent implements OnInit{

  title: any;
  header: any;
  signageBackgroundImage: any;
  signageFrontendImage: any;
  description: any;
  itemList: any;
  image_one: any;
  image_two: any;
  image_three: any;
  feature: any;
  inch_86_ifp: any;
  inch_75_ifp: any;
  inch_65_ifp: any;
  specifictionTitle: any;
  specificationList: any;
  link: any;
  link_name: SafeResourceUrl | undefined; 
  constructor(private dataService: DataServiceService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.signageIntro();
    this.signageDetails();
    this.signageSliderDetails();
    this.signageSpecification();
    this.signageVidoLink();
  }

  signageIntro() {
    this.dataService.signagrIntroDetails().subscribe((data: any) => {
      this.title = data.title;
      this.header = data.data.header;
      this.signageBackgroundImage = data.data.background_image;
      this.signageFrontendImage = data.data.image;
    });
  }

  signageDetails() {
    this.dataService.signageDetails().subscribe((data: any) => {
      this.title = data.title;
      this.description = data.description;
      this.itemList = data.data;
    });
  }

  signageSliderDetails() {
    this.dataService.signageSliderInfo().subscribe((data: any) => {
      this.title = data.title;
      this.image_one = data.data.image_one;
      this.image_two = data.data.image_two;
      this.image_three = data.data.image_three;

    });
  }

  signageSpecification() {
    this.dataService.signageSpecification().subscribe((data: any) => {
      this.specifictionTitle = data.title;
      this.specificationList = data.data;
    });
  }

  signageVidoLink() {
    this.dataService.SignageVideoLinks().subscribe((data: any) => {
      const videoUrl = data.data.link_name;
      this.link_name = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
    });
  }

}
