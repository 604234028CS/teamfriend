import { FrienddetailPage } from './../frienddetail/frienddetail';
import { FriendRestProvider } from './../../providers/friend-rest/friend-rest';
import { Friend } from './../../models/friend.model';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the FriendListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-friend-list',
  templateUrl: 'friend-list.html',
})
export class FriendListPage {

  friends:Friend;
  major:string;

  constructor(public friendrest: FriendRestProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.major=this.navParams.get("major");
    this.friendrest.getfriendList().subscribe(data=>{
      this.friends=data.filter(friends => friends.major === this.major);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendListPage');
  }

  goBack(){
    this.navCtrl.pop();
  }

  showDetail(studentID:number){
    this.navCtrl.push(FrienddetailPage,
      {studentID:studentID}
      );
  }
  
  }

 