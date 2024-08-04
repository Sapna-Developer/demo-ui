import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Magazine {
  imgSrc: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {
 magazines: Magazine[] = [
    {
      imgSrc: 'assets/works/brand.png',
      title: 'Graphic Design',
      description: 'Aura Branding Design'
    },
    {
      imgSrc: 'assets/works/snack.png',
      title: 'Graphic Design',
      description: 'AB.S Snack Packaging'
    },
    {
      imgSrc: 'assets/works/website.png',
      title: 'Web Development',
      description: 'Gradient Website Development'
    },
    {
      imgSrc: 'assets/works/magazine.png',
      title: 'Content Writing',
      description: 'Magazine Content Writing'
    }
  ];


}
