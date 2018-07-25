import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { ModalController} from 'ionic-angular';

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

  openHome(){
  	this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CallCenterPage');
  }

}
