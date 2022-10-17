import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss']
})
export class UsercardComponent implements OnInit {
  @Input() text: string = '';
  @Input() img: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
