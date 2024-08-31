import { Component } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
 constructor(){}
 ngOnInit(): void {
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    // once: true,
    mirror: false
  });
  // AOS.init({
  //   duration: 600,
  //   easing: 'ease-in-out',
  //   once: false, // Allow animations to trigger more than once
  //   mirror: true  // Animate elements out while scrolling past them
  // });
 }
}
