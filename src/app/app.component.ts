import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { Component } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { WorksComponent } from './works/works.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OurStoryComponent,ContactFormComponent,HttpClientModule,HeroComponent,ServicesComponent,CommonModule,FeaturesComponent,WorksComponent,TestimonialComponent,FooterComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular app';
  
}
