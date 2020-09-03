import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-general-page',
  templateUrl: './general-page.component.html',
  styleUrls: ['./general-page.component.scss']
})
export class GeneralPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

}
