import { Component, OnInit} from '@angular/core';
import { FriendlistComponent } from './friendlist/friendlist.component';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bodyText: string | undefined;

  postTexts = [
    'Ich bin eine Dattelpalme. Ich wachse üblicherweise in warmen Breitengraden und werfe gewöhnungsbedürftige Früchte ab.',
    'Ich bin eine Holunderblüte. Aus meiner Frucht kann man vorzügliche Brände brennen!',
    'Hier spricht die Lilie. Mir wird immer nachgesagt, ich sei "eine sehr schöne Zierpflanze!',
    'Bei mir handelt es sich um eine Magnolie.',
    'Ich, als Maiglöckchen, muss sagen dass ich sehr giftig darauf reagiere, gegessen zu werden!',
    'Ich habe Stacheln um mich zu verteidigen. Nenn mich Rose!',
    'Ich, das Schilfgras, sorge dafür dass Bodenbrüter einen guten Platz zum nisten haben!',
    'Bei mir handelt es sich um Wacholder. Unter anderem bin ich eine wichtige Zutat für Gin!',
  ];
  
postImages = [
    'assets/img/user/1.jpg',
    'assets/img/user/2.jpg',
    'assets/img/user/3.jpg',
    'assets/img/user/4.jpg',
    'assets/img/user/5.jpg',
    'assets/img/user/6.jpg',
    'assets/img/user/7.jpg',
    'assets/img/user/8.jpg',
];
postLinks = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
];

  buttonClicked() {
    alert('Hallo, wie geght es dir?');
  };
  constructor(public modalService: ModalService) {}

  ngOnInit() {
    this.bodyText = "This text can be updated in modal1"  
  };
  openModal() {
    this.modalService.open("null");
  };
  closeModal() {
    this.modalService.close("null");
  };
}