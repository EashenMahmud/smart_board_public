import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.css']
})
export class PodiumComponent implements OnInit{
  podimTitle: any;
  podiumSubtitle: any;
  podiumDescriptionOne: any;
  podiumDescriptionTwo: any;
  podiumButtonOne: any;
  podiumButtonOneLink: any;
  podiumButtonTwo: any;
  podiumButtonTwoLink: any;
  detailsTitle: any;
  detailsDescription: any;
  detailsImage: any=null;
  screenTitle: any;
  screenDetails: any;
  deviceTitle: any;
  deviceImageOne: any=null;
  deviceImageTwo: any=null;
  deviceImageThree: any=null;
  anotationTitle: any;
  anotationDescription: any;
  anotationFeatureone: any;
  anotationFeatureTwo: any;
  anotationFeatureoneThree: any;
  anotationImage: any=null;
  featureTitle: any;
  featureDescription: any;
  featureImage: any=null;
  presentationtitle: any;
  presentationSubtitle: any;
  presentationImageOne: any=null;
  presentationImageTwo: any=null;
  presentationImageThree: any=null;
  presentationFeatures: any;

  constructor( private dataService:DataServiceService ){}


  ngOnInit(): void {
    this.podium();
    this.podiumDetails();
    this.screen();
    this.screen();
    this.device();
    this.anotationDetails();
    this.featurePodium();
    this.presentation();
  }

  podium(){
    this.dataService.podiumIntro().subscribe((data:any) => {
      this.podimTitle = data.title;
      // this.product_image = data.data.product_image;
      this.podiumSubtitle = data.data.sub_title;
      this.podiumDescriptionOne = data.data.description_one;
      this.podiumDescriptionTwo = data.data.description_two;
      this.podiumButtonOne = data.data.button_text_one;
      this.podiumButtonOneLink = data.data.button_link_one;
      this.podiumButtonTwo = data.data.button_text_two;
      this.podiumButtonTwoLink = data.data.button_link_two;
      // console.log(this.product_image);
  });
  }
  podiumDetails(){
    this.dataService.detailsPodium().subscribe((data:any)=>{
      this.detailsTitle = data.title;
      this.detailsDescription = data.data.description;
      this.detailsImage = data.data.image;
      // console.log(this.detailsImage);
    })
  }
  screen(){
    this.dataService.screenShare().subscribe((data:any)=>{
      this.screenTitle = data.title;
      this.screenDetails = data.data.description;
    })
  }
  device(){
    this.dataService.wirelessDevice().subscribe((data:any)=>{
      this.deviceTitle = data.title;
      this.deviceImageOne = data.data.image_one;
      this.deviceImageTwo = data.data.image_two;
      this.deviceImageThree = data.data.image_three;
    })
  }
  anotationDetails(){
    this.dataService.anotation().subscribe((data:any)=>{
      this.anotationTitle = data.title;
      this.anotationDescription = data.data.sub_title;
      this.anotationFeatureone = data.data.field_one;
      this.anotationFeatureTwo = data.data.field_two;
      this.anotationFeatureoneThree = data.data.field_three;
      this.anotationImage = data.data.background_image;
    })
  }
  featurePodium(){
    this.dataService.poduimFeature().subscribe((data:any)=>{
      this.featureTitle = data.title;
      this.featureDescription = data.data.description;
      this.featureImage = data.data.background_image;
    })
  }
  presentation(){
    this.dataService.podiumPresentation().subscribe((data:any)=>{
      this.presentationtitle = data.title;
      this.presentationSubtitle = data.sub_title;
      this.presentationImageOne = data.image_one;
      this.presentationImageTwo = data.image_two;
      this.presentationImageThree = data.image_three;
      this.presentationFeatures = data.data;
      // console.log(this.presentationFeatures);
    })
  }

}
