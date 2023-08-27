import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  data: any;
  question: any;
  description: any;
  image: any = null;
  button_text: any;
  header_title: any;
  title: any;
  background_image: any;
  teamList: any;
  about_title: any;
  constructor(
    private dataService: DataServiceService,
  ) { }

  ngOnInit(): void {
    this.aboutDetails();
    this.teamDetails();
  }

  aboutDetails() {
    this.dataService.about_details().subscribe((data: any) => {
      this.question = data.data.question;
      this.description = data.data.description;
      this.image = data.data.image;
      this.button_text = data.data.button_text;
      this.about_title = data.title;
      this.background_image = data.data.background_image;
      // console.log(this.background_image);
    });
  }

  teamDetails(){
    this.dataService.team().subscribe((data: any) => {
      this.teamList = data.data;
      this.title=data.title;
      // console.log(this.teamList);
    });
  }
}
