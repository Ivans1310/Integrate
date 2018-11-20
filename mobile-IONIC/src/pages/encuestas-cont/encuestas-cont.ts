import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EncuestasCont002Page } from '../encuestas-cont002/encuestas-cont002';

@Component({
  selector: 'page-encuestas-cont',
  templateUrl: 'encuestas-cont.html'
})
export class EncuestasContPage {

  constructor(public navCtrl: NavController) {
  }
  goToEncuestasCont002(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasCont002Page);
  }
}
