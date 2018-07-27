import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, NavController} from 'ionic-angular';
import { HomePage } from './../home/home';





@IonicPage()
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})

export class UserListPage {
	kullanici = [];
	Kullanicilar: Array <any> = [];

 	constructor(public navParams: NavParams, public view: ViewController, public navCtrl: NavController){

  		
 	}

 	 modalClose(){
 		this.view.dismiss();
 	}

 	ionViewWillLoad(){
 	
 	}

 	ionViewDidLoad() {
 			this.Kullanicilar = this.navParams.get('kData');
 		
   		console.log(this.Kullanicilar);
  }

}
