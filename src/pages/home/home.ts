import { FriendListPage } from './../friend-list/friend-list';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  showFriendList(classRoom:string){
    this.navCtrl.push(FriendListPage,
      {classroom:classRoom}
      );
  }
}
