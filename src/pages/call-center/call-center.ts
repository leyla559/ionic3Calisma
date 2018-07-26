import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { ModalController} from 'ionic-angular';

import { CallAddPage } from './../call-add/call-add';


/**
 * Generated class for the CallCenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-call-center',
  templateUrl: 'call-center.html',
})
export class CallCenterPage {

  constructor(public navCtrl: NavController, public view: ViewController,public navParams: NavParams, public modal: ModalController) {
  }

  addNewCall(){
    const callAddPage=this.modal.create(CallAddPage);
    callAddPage.present();
  }

  openHome(){
  	this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CallCenterPage');
  }

}
