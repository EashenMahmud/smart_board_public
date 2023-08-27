import { Component } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  address: any;
  phone: any;
  mail: any;
  loading: boolean = false;

  form = {
    mail: '',
    subject: '',
    message: '',
  };
  contactTitle: any;
  contactBackgroundImage: any;

  constructor(private dataService: DataServiceService, private router: Router) {}

  ngOnInit(): void {
    this.locationDetails();
    this.contactIntroDetails();
  }

  contactIntroDetails() {
    this.dataService.contactIntroDetails().subscribe((data: any) => {
      this.contactTitle=data.title;
      this.contactBackgroundImage=data.data.background_image;
    });
  }

  locationDetails() {
    this.dataService.locationDetails().subscribe((data: any) => {
      this.address = data.data[0].address;
      this.phone = data.data[0].phone;
      this.mail = data.data[0].mail;
    });
  }

  sendMail() {
    this.loading = true;
  
    this.dataService.sendMail(this.form).subscribe(
      (response: any) => {
        console.log(response);
        if (response.status === 'success') {
          setTimeout(() => {
            this.loading = false;
            Swal.fire('Success', 'Message sent successfully!', 'success');
            this.resetForm();
            this.router.navigateByUrl('contact');
          }, 2000);
        } else {
          setTimeout(() => {
            this.loading = false;
            Swal.fire('Error', 'Failed to send the message! Please fill up the form.', 'error');
            this.resetForm();
          }, 2000);
        }
      },
      (error) => {
        this.loading=false;
        console.error(error);
        setTimeout(() => {
          Swal.fire('Error', 'An error occurred while sending the message.', 'error');
        });
      }
    );
  }
  

  resetForm(): void {
    this.form = {
      mail: '',
      subject: '',
      message: '',
    };
  }
}
