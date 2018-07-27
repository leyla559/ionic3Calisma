import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { ModalController} from 'ionic-angular';

import { CallAddPage } from './../call-add/call-add';

@IonicPage()
@Component({
  selector: 'page-call-center',
  templateUrl: 'call-center.html',
})
export class CallCenterPage {

  cagri = {};
  Cagrilar : Array <any> = [];

  constructor(public navCtrl: NavController, public view: ViewController,public navParams: NavParams, public modal: ModalController) {
    this.Cagrilar = [
      {
        title: "Kat Hizmetleri",
        place: "Lobby Bar",
        trouble: "Masa Bacağı Kırıldı",
        proccessType: "Normal",
        status: "İş Emri",
        personnel: "Anıl Filizkıran",
        startDate: "22.07.2018 14:34:02" 
      },
      {
        title: "Teknik Hizmetler",
        place: "Resepsiyon",
        trouble: "Bilgisayar Arızası",
        proccessType: "Yüksek",
        status: "Patron Emri",
        personnel: "Muhammed Metehan Yıldırım",
        startDate: "27.07.2018 19:23:47"
      },
      {
        title: "Temizlik",
        place: "Mutfak",
        trouble: "Cam Şişe Kırıldı",
        proccessType: "Düşük",
        status: "İş Emri",
        personnel: "Ahmet Sonuç",
        startDate: "16.05.2018 23:34:42"
      }
    ];
  }


 
  editCall(){
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