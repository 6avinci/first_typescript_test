import { VariableBinding } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { FriendlistComponent } from './friendlist/friendlist.component';
import { i } from './friendlist/friendlist.component';



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
  /*deleteFriend(_name:string , _text:string, _image:string) {
    this.names.splice;
    this.descSmall.splice;
    this.images.splice;
    }*/
}