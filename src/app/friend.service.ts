import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  names = [
    'Rose',
  ];
  images = [
    'assets/img/user/6.jpg',
  ];


    descSmall = [
    'Lebenszeit: ca. 5 Jahre',
  ]; 

  constructor() { }

  addFriend(name:string, text:string, image:string) {
    this.names.push (name);
    this.descSmall.push (text);
    this.images.push (image);
  }
}