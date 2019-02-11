import { FriendRestProvider } from './../../providers/friend-rest/friend-rest';
import { Friend } from './../../models/friend.model';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FrienddetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-frienddetail',
  templateUrl: 'frienddetail.html',
})
export class FrienddetailPage {

  studentID:number;
  friend:Friend;

  constructor(public friendrest: FriendRestProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.studentID=this.navParams.get("studentID");
    this.friendrest.getfriendList().subscribe(data=>{
      this.friend=data.filter(friend => friend.studentID === this.studentID)[0];
    });
  }

  ionViewDidLoad() {
    this.studentID=this.navParams.get("studentID");
    console.log(this.studentID);
  }

  goBack(){
    this.navCtrl.pop();
  }

}
