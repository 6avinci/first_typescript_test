import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent implements OnInit {
  imageSmall = [
    'assets/img/user/1.jpg',
    'assets/img/user/2.jpg',
    'assets/img/user/3.jpg',
    'assets/img/user/4.jpg',
    'assets/img/user/5.jpg',
    'assets/img/user/6.jpg',
    'assets/img/user/7.jpg',
    'assets/img/user/8.jpg',
  ];
  textSmall = [
    'Dattelpalme',
    'Holunder',
    'Lilie',
    'Magnolie',
    'Maiglöckchen',
    'Rose',
    'Schilfgras',
    'Wacholder',
  ];
  descSmall = [
    'Lebenszeit: ca. 150 Jahre',
    'Lebenszeit: ca. 100 Jahre',
    'Lebenszeit: ca. 2 Jahre',
    'Lebenszeit: ca. 100 Jahre',
    'Lebenszeit: ca. 7 Tage',
    'Lebenszeit: ca. 5 Jahre',
    'Lebenszeit: ca. 7 jahre',
    'Lebenszeit: ca. 600 Jahre',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}