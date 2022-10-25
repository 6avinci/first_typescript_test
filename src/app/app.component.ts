import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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
  'profile1.html',
  'profile2.html',
  'profile3.html',
  'profile4.html',
  'profile5.html',
  'profile6.html',
  'profile7.html',
  'profile8.html',
];

  buttonClicked() {
    alert('Hallo, wie geght es dir?');
  }
}