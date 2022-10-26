import { Component,Inject, Input, OnInit } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss']
})
export class UsercardComponent implements OnInit {
  @Input() text: string = '';
  @Input() img: string = '';
  @Input() link: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}