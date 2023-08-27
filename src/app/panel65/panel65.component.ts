import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-panel65',
  templateUrl: './panel65.component.html',
  styleUrls: ['./panel65.component.css']
})
export class Panel65Component implements OnInit{

  title: any;
  subtitle: any;
  background_image: any;
  image: any=null;
  deviceTitle: any;
  deviceSubTitle: any;
  deviceImage: any=null;
  deviceItemList: any;
  specificationTitle: any;
  specificationList: any;
  link: any;
 

  
  constructor(
    private dataService: DataServiceService,
    private sanitizer: DomSanitizer
  ) { }
  
  ngOnInit(): void {
    this.interactiveIntro();
    this.devicelistItems();
    this.interactiveSpecification();
    this.interactiveVideoLinks();
  }

  interactiveIntro(){
    this.dataService.interactiveIntroDetails().subscribe((data: any) => {
      this.title=data.title;
      this.subtitle=data.data.subtitle;
      this.background_image=data.data.background_image;
      this.image=data.data.image;
    });
  }

  devicelistItems(){
     this.dataService.deviceList().subscribe((data:any)=>{
       this.deviceTitle=data.title;
       this.deviceSubTitle=data.sub_tilte;
       this.deviceImage=data.image;
       this.deviceItemList=data.data;
     });
  }

  interactiveSpecification(){
    this.dataService.specification().subscribe((data:any)=>{
      this.specificationTitle=data.title;
      this.specificationList=data.data;
    });
  }

  interactiveVideoLinks(){
    this.dataService.interactiveVideoLinks().subscribe((data:any)=>{
      this.link = this.sanitizer.bypassSecurityTrustResourceUrl(data.data.link);
      console.log(this.link);
    });
  }

  

}
