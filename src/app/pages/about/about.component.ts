import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {
  titles: string[] = ['Frontend Developer', 'Angular Enthusiast', 'Full-Stack Developer', 'Web Designer'];
  currentText: string = '';
  currentTitleIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 100;
  typingInterval: any;

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.startTyping();
  }

  ngOnDestroy(): void {
    clearTimeout(this.typingInterval);
  }

  startTyping(): void {
    const fullText = this.titles[this.currentTitleIndex];

    if (this.isDeleting) {
      this.currentText = fullText.substring(0, this.currentText.length - 1);
    } else {
      this.currentText = fullText.substring(0, this.currentText.length + 1);
    }

    let speed = this.isDeleting ? 50 : this.typingSpeed;

    if (!this.isDeleting && this.currentText === fullText) {
      speed = 1500;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentText === '') {
      this.isDeleting = false;
      this.currentTitleIndex = (this.currentTitleIndex + 1) % this.titles.length;
      speed = 500;
    }

    // Run typing logic inside Angular zone to trigger change detection
    this.typingInterval = setTimeout(() => {
      this.ngZone.run(() => this.startTyping());
    }, speed);
  }
}
