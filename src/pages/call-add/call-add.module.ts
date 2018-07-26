import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CallAddPage } from './call-add';

@NgModule({
  declarations: [
    CallAddPage,
  ],
  imports: [
    IonicPageModule.forChild(CallAddPage),
  ],
})
export class CallAddPageModule {}
