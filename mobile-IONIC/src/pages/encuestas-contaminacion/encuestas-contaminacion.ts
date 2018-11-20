import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EncuestasContPage } from '../encuestas-cont/encuestas-cont';
import { EncuestasCont002Page } from '../encuestas-cont002/encuestas-cont002';

@Component({
  selector: 'page-encuestas-contaminacion',
  templateUrl: 'encuestas-contaminacion.html'
})
export class EncuestasContaminacionPage {

  constructor(public navCtrl: NavController) {
  }
  goToEncuestasCont(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasContPage);
  }goToEncuestasCont002(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasCont002Page);
  }
}
