import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contact={
    createdAt: new Date().toISOString().split('T')[0],
    firstname:"",
    lastName:"",
    email:"",
    age:"",
    gender:"",
    mobilenumber:"",
    pan_no:"",
    adhaar_no:"",
    status:"",
  }

  constructor(private http:HttpClient ){}

  // onSubmit(form:any){
  //    const requestPayload = { ...this.contact };
  //   this.http.post('https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile',requestPayload).subscribe(response=>{
  //      console.log('Form submitted successfully', response);
  //       form.reset();
      
  //   },
  //   error => {
  //       console.error('There was an error!', error);
  //     })
  // }
  onSubmit(form: any) {
    if (form.valid) {
      const requestPayload = { ...this.contact };
      // Change URL as per your API endpoint
      this.http.post('https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile', requestPayload).subscribe(response => {
        console.log('Form submitted successfully', response);
        form.reset();
      }, error => {
        console.error('There was an error!', error);
      });
    }
  }
    updateContact(id: string) {
    const requestPayload = { ...this.contact };
    // Change URL as per your API endpoint
    this.http.put(`https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/${id}`, requestPayload).subscribe(response => {
      console.log('Contact updated successfully', response);
    }, error => {
      console.error('There was an error!', error);
    });
  }

   fetchContact(id: string) {
    // Change URL as per your API endpoint
    this.http.get(`https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile`).subscribe((response: any) => {
      this.contact = response;
    }, error => {
      console.error('There was an error!', error);
    });
  }

   deleteContact(id: string) {
    // Change URL as per your API endpoint
    this.http.delete(`https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/${id}`).subscribe(response => {
      console.log('Contact deleted successfully', response);
    }, error => {
      console.error('There was an error!', error);
    });
  }

}
