import { Component, HostListener } from '@angular/core';
import Typed from 'typed.js';
import AOS from 'aos'; //<------ Add this line
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  devNames: string[] = ["FULL STACK DEVELOPMENT", "FRONTEND DEVELOPMENT", "BACKEND DEVELOPMENT", "WEB DESIGNING", "WEB DEVELOPMENT"];
  isScrolled = false;

  constructor() { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollOffset > 50; // Adjust the value as needed
  }

  ngOnInit(): void {

    // AOS.init();
    // AOS.init({
    //   duration: 1200, // Duration of animation in ms
    //   offset: 200, // Offset (in pixels) from the original trigger point
    //   easing: 'ease-in-out', // Easing function
    // });
    // AOS.init({
    //   duration: 600,
    //   easing: 'ease-in-out',
    //   once: true,
    //   mirror: false
    // });
    

    const options = {
      strings: this.devNames,
      // typeSpeed: 50,
      // backSpeed: 50,
      // loop: true,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    };

    const typed = new Typed('.typed-element', options);
  }
}
