import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  constructor(){}

  ngOnInit() {
  }
  submitFeedback() {
    window.open('https://forms.gle/Lv9CizDuWR2qBQ8r6', '_blank');
  }
}

