import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EncuestasMovPage } from '../encuestas-mov/encuestas-mov';
import { EncuestasMov001Page } from '../encuestas-mov001/encuestas-mov001';

@Component({
  selector: 'page-encuestas-movilidad',
  templateUrl: 'encuestas-movilidad.html'
})
export class EncuestasMovilidadPage {

  constructor(public navCtrl: NavController) {
  }
  goToEncuestasMov(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasMovPage);
  }goToEncuestasMov001(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasMov001Page);
  }
}
