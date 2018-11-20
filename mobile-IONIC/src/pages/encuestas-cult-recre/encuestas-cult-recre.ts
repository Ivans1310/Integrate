import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EncuestasCultRecre004Page } from '../encuestas-cult-recre004/encuestas-cult-recre004';

@Component({
  selector: 'page-encuestas-cult-recre',
  templateUrl: 'encuestas-cult-recre.html'
})
export class EncuestasCultRecrePage {

  constructor(public navCtrl: NavController) {
  }
  goToEncuestasCultRecre004(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasCultRecre004Page);
  }
}
