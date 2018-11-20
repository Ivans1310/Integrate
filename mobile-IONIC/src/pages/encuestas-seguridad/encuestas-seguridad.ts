import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EncuestasSegPage } from '../encuestas-seg/encuestas-seg';
import { EncuestasSeg003Page } from '../encuestas-seg003/encuestas-seg003';

@Component({
  selector: 'page-encuestas-seguridad',
  templateUrl: 'encuestas-seguridad.html'
})
export class EncuestasSeguridadPage {

  constructor(public navCtrl: NavController) {
  }
  goToEncuestasSeg(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasSegPage);
  }goToEncuestasSeg003(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasSeg003Page);
  }
}
