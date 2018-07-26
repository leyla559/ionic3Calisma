import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { NewMessagePage } from './../new-message/new-message';


/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public view: ViewController,public modal: ModalController) {
  }

  goBack(){
  	this.view.dismiss();
  }

  newMessageModal(){
  	const modalNewMessage = this.modal.create(NewMessagePage);
  	modalNewMessage.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }

}
