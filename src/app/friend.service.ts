import { VariableBinding } from '@angular/compiler';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class FriendService {
  names = Array();
  images = Array();
  descSmall = Array(); 

  constructor() { }

    addFriend(name:string, text:string, image:string) {
    this.names.push (name);
    this.descSmall.push (text);
    this.images.push (image);
  }
}