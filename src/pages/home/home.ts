import { Component } from '@angular/core';
import { ModalController,NavController} from 'ionic-angular';

import { UserListPage } from './../user-list/user-list';
import { CallCenterPage } from '../call-center/call-center';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


Kullanicilar: Array <any> = [];

  constructor(public modalControl: ModalController, public navCtrl: NavController){
	this.Kullanicilar = [
  	{
  		kullaniciAdi: "Mavelion",
  		sifre: "1",
  		fullName: "Muhammed Metehan Yıldırım",
  		id: 1
  	},
  	{
  		kullaniciAdi: "MetehanYildirim",
  		sifre: "123",
  		fullName: "Anıl Filizkıran",
  		id:1

  	}]
  		
  }

  modalOpen(){
  	const myModal = this.modalControl.create(UserListPage);
  	this.navCtrl.push(CallCenterPage, {kData: this.Kullanicilar});
  	myModal.present();
  }


  openCallCenter(){
  	const callCenter = this.modalControl.create(CallCenterPage);

  	callCenter.present();
  }


}
