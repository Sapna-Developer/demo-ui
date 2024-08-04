import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
services=[
  {
    imgSrc:'assets/services/Designer-rafiki.svg',
    title:'Graphic Design',
    description:'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
  },
  {
    imgSrc:'assets/services/Programming-rafiki.svg',
    title:'Web Development',
    description:'With lots of unique blocks, you can easily build a page without coding. Build your next landing page..'
  },
  {
    imgSrc:'assets/services/Notes-rafiki.svg',
    title:'Content Writing',
    description:'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
  }
];

testimonial={
  profile:'assets/services/testimonial.png',
  description:'“OMG! I cannot believe that I have got a brand new landing page after getting Albino. It was super easy to edit and publish.”',
  name:'Franklin Hicks',
  designation:'Web Developer'
}
stars=Array(5).fill(0);
loadServices(){
  console.log("Load more services");
  
}
getCardClass(index:number){
const colors=['green','blue','orange'];
return colors [index % colors.length]
}

}
