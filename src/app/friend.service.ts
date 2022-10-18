import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  names = Array();
  images = Array();
  descSmall = Array(); 


  constructor() { }

    // addFriend('Peter', 'Hallo', '/assets/img/hamster/1.jpg')
    addFriend(name:string, text:string, image:string) {
    this.names.push (name);
    this.descSmall.push (text);
    this.images.push (image);
  }
  deleteFriend(_name:any , _text:any, _image:any) {
    this.names.splice(_name, 1);
    this.descSmall.splice(_image, 1);
    this.images.splice(_text, 1);
    }
}