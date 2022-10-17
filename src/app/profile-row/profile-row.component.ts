import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss']
})
export class ProfileRowComponent implements OnInit {
  @Input() usersm: string = '';
  @Input() imgsm: string = '';
  @Input() descsm: string = '';

  

  constructor() { }

  ngOnInit(): void {
  }

}