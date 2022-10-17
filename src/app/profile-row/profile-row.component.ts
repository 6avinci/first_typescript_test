import { Component, Input, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss']
})
export class ProfileRowComponent implements OnInit {
  @Input() usersm: string = '';
  @Input() imgsm: string = '';
  @Input() descsm: string = '';

  

  constructor(public fs: FriendService) { }

  ngOnInit(): void {
  }

}