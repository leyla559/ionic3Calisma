import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { MessagePage } from './../message/message';



/**
 * Generated class for the CallAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-call-add',
  templateUrl: 'call-add.html',
})
export class CallAddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public modal: ModalController) {
  }

  openMessagePage(){
  	const messagePage = this.modal.create(MessagePage);
  	messagePage.present();
  }

  goBack(){
  	this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CallAddPage');
  }

}
