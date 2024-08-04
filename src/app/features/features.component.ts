import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
features=[
  {
    imgSrc:'assets/feature/manager.png',
    title:'Dedicated project manager',
    description:'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
  },
  {
    imgSrc:'assets/feature/task.png',
    title:'Organized tasks',
    description:'With lots of unique blocks, you can easily build a page without coding. Build your next landing page..'
  },
  {
    imgSrc:'assets/feature/feedback.png',
    title:'Easy feedback sharing',
    description:'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
  },
   {
    imgSrc:'assets/feature/deadline.png',
    title:'Never miss deadline',
    description:'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
  }
];
}
