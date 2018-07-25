import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, ModalController} from 'ionic-angular';

import { CallCenterPage } from '../call-center/call-center';



@IonicPage()
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})

	


export class UserListPage {

 	constructor(public navParams: NavParams, public view: ViewController, public modal: ModalController){

  		
 	}

 	 modalClose(){
 		this.view.dismiss();
 	}

 	openCallCenter(){
 		this.modalClose();
 		const callCenter = this.modal.create(CallCenterPage);
 		callCenter.present();
 	}

 	ionViewDidLoad() {
    console.log('ionViewDidLoad UserListPage');
  }

}
