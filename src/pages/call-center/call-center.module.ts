import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CallCenterPage } from './call-center';

@NgModule({
  declarations: [
    CallCenterPage,
  ],
  imports: [
    IonicPageModule.forChild(CallCenterPage),
  ],
})
export class CallCenterPageModule {}
