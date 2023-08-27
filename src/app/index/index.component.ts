import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from '../service/data-service.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
  title: any;
  subtitle: any;
  imageUrl: any;
  data:any;
  product_image: any=null;
  titleList: any;
  titlePanel: any;
  description: any;
  status: any;
  panel_image: any=null;
  titleCSP: any;
  solution:any;
  titleEDU: any;
  eduHDescription: any;
  eduimage: any=null;
  secondTitle: any;
  eduDescription: any;
  eduButtontext: any;
  eduLink: any;
  titleConference: any;
  masterImage: any=null;
  subImage1: any=null;
  subImage2: any=null;
  subImage3: any=null;
  subImage4: any=null;
  featureTitle: any;
  featureDescription: any;
  featureMainImage: any=null;
  featureLeftImage: any=null;
  featureRightImage: any=null;
  caption: any;
  featurelink: any;
  featuretext: any;
  clientTitle: any;
  clienListImage: any[] = [];
  teamTitle: any;
  teamMember: any;
  caseTitle: any;
  caseStudies: any;
  reviewTitle: any;
  reviewSubTitle: any;
  review: any[]=[];
  clienListImageTwo: any[]=[];
  reviewTwo: any[]=[];

  constructor( private dataService:DataServiceService ){}

  ngOnInit(): void {
   this.allProduct();
   this.indexSlider();
   this.panel();
   this.csp();
   this.education();
   this.conference();
   this.feature();
   this.client();
   this.ourTeam();
   this.studyCase();
   this.testimonial();
  }
  indexSlider(){
    this.dataService.indexSlider().subscribe((data:any)=>{
      this.titleList = data.data;
      // console.log(this.titleList);
    })
  }

  allProduct(){
    this.dataService.product().subscribe((data:any) => {
      this.title = data.title;
      this.product_image = data.data.product_image;
      // console.log(this.product_image);
  });
  }

  panel(){
    this.dataService.panel().subscribe((data:any) => {
     this.titlePanel = data.title;
     this.description = data.data.description;
     this.panel_image = data.data.image;
    //  console.log(this.description);
  });
  }

  csp(){
    this.dataService.completeSolution().subscribe((data:any) => {
     this.titleCSP = data.title;
     this.solution = data.data;
    //  console.log(this.solution);
  });
  }
  education(){
    this.dataService.eduSolution().subscribe((data:any) => {
      this.titleEDU = data.header_title;
      this.eduHDescription = data.data.heading_description;
      this.eduimage = data.data.image;
      this.secondTitle = data.data.title;
      this.eduDescription = data.data.description;
      this.eduButtontext = data.data.button_text;
      this.eduLink = data.data.button_link;
      // console.log(this.eduimage);
   });
 
  }

  feature(){
    this.dataService.featureProduct().subscribe((data:any)=>{
      this.featureTitle = data.title_id;
      this.featureMainImage = data.data.master_image;
      this.featureLeftImage = data.data.left_image;
      this.featureRightImage = data.data.right_image;
      this.caption = data.data.caption;
      this.featuretext = data.data.button_text;
      this.featurelink = data.data.button_link;
    })
  }

  conference(){
    this.dataService.conference().subscribe((data:any)=>{
      this.titleConference = data.title_id;
      this.masterImage = data.data.master_image;
      this.subImage1 = data.data.sub_image1;
      this.subImage2 = data.data.sub_image2;
      this.subImage3 = data.data.sub_image3;
      this.subImage4 = data.data.sub_image4;
      // console.log(this.subImage1);
    })
  }
  client(){
    this.dataService.client().subscribe((data:any)=>{
      this.clientTitle = data.title;
      this.clienListImage = data.data.slice(0, 6);
      this.clienListImageTwo = data.data.slice(6);
      console.log(this.clienListImage);
    })
  }
  ourTeam(){
    this.dataService.team().subscribe((data:any)=>{
      this.teamTitle = data.title;
      this.teamMember = data.data;
      // console.log(this.teamMember);
    })
  }
  studyCase(){
    this.dataService.caseStudy().subscribe((data:any)=>{
      this.caseTitle = data.title;
      this.caseStudies = data.data;
      // console.log(this.caseStudies);
    })
  }
  testimonial(){
    this.dataService.testimonial().subscribe((data:any)=>{
      this.reviewTitle = data.title;
      this.reviewSubTitle = data.sub_tilte;
      this.review = data.data.slice(0, 3);
      this.reviewTwo = data.data.slice(3);
      // console.log(this.review);
    })
  }
 

}
