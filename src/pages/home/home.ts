import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

import { UserListPage } from './../user-list/user-list';
import { CallCenterPage } from '../call-center/call-center';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public modalControl: ModalController){

  		
  }

  modalOpen(){
  	const myModal = this.modalControl.create(UserListPage);
  	myModal.present();
  }


}
