import { VariableBinding } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { i, FriendlistComponent} from './friendlist/friendlist.component';

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
  deleteFriend(_name:any , _text:any, _image:any) {
    this.names.splice(i, 1, 0);
    this.descSmall.splice(i, 1, 0);
    this.images.splice(i, 1, 0);
    }
}