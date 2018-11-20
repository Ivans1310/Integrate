import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EncuestasMov001Page } from '../encuestas-mov001/encuestas-mov001';

@Component({
  selector: 'page-encuestas-mov',
  templateUrl: 'encuestas-mov.html'
})
export class EncuestasMovPage {

  constructor(public navCtrl: NavController) {
  }
  goToEncuestasMov001(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasMov001Page);
  }
}
