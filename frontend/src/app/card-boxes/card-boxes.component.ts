import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-boxes',
  templateUrl: './card-boxes.component.html',
  styleUrls: ['./card-boxes.component.scss']
})
export class CardBoxesComponent implements OnInit {
  @Input() iconType: string;
  @Input() isSelected: boolean;
  @Input() url: string;
  @Input() iconSize = 1;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() linkLabel: string;
  @Input() linkSize = 1;
  hover = false;

  constructor() { }

  ngOnInit(): void {
  }
}
