import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skills: any[] = [
    { title: 'HTML', image: 'skills/html.png', alt: 'HTML' },
    { title: 'HTML', image: 'skills/html.png', alt: 'HTML' },
    { title: 'HTML', image: 'skills/html.png', alt: 'HTML' },
    { title: 'HTML', image: 'skills/html.png', alt: 'HTML' },
    { title: 'HTML', image: 'skills/html.png', alt: 'HTML' },
    { title: 'HTML', image: 'skills/html.png', alt: 'HTML' },
    { title: 'HTML', image: 'skills/html.png', alt: 'HTML' },
    { title: 'HTML', image: 'skills/html.png', alt: 'HTML' },
    { title: 'HTML', image: 'skills/html.png', alt: 'HTML' },
    { title: 'HTML', image: 'skills/html.png', alt: 'HTML' },
    { title: 'HTML', image: 'skills/html.png', alt: 'HTML' },
    { title: 'HTML', image: 'skills/html.png', alt: 'HTML' },
    { title: 'HTML', image: 'skills/html.png', alt: 'HTML' },
    { title: 'HTML', image: 'skills/html.png', alt: 'HTML' },
    { title: 'HTML', image: 'skills/html.png', alt: 'HTML' },
    { title: 'HTML', image: 'skills/html.png', alt: 'HTML' },
    { title: 'HTML', image: 'skills/html.png', alt: 'HTML' },
    { title: 'HTML', image: 'skills/html.png', alt: 'HTML' },
    { title: 'HTML', image: 'skills/html.png', alt: 'HTML' },
    { title: 'HTML', image: 'skills/html.png', alt: 'HTML' },
    { title: 'HTML', image: 'skills/html.png', alt: 'HTML' },
    { title: 'HTML', image: 'skills/html.png', alt: 'HTML' },
  ]

  constructor() { }

  ngOnInit(): void {

  }
}
