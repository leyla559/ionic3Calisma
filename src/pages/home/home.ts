import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { UserListPage } from './../user-list/user-list';




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
