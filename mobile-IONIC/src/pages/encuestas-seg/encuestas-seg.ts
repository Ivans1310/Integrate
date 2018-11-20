import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EncuestasSeg003Page } from '../encuestas-seg003/encuestas-seg003';

@Component({
  selector: 'page-encuestas-seg',
  templateUrl: 'encuestas-seg.html'
})
export class EncuestasSegPage {

  constructor(public navCtrl: NavController) {
  }
  goToEncuestasSeg003(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasSeg003Page);
  }
}
