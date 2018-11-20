import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EncuestasCultRecrePage } from '../encuestas-cult-recre/encuestas-cult-recre';
import { EncuestasCultRecre004Page } from '../encuestas-cult-recre004/encuestas-cult-recre004';

@Component({
  selector: 'page-encuestas-cultura-yrecreaci-n',
  templateUrl: 'encuestas-cultura-yrecreaci-n.html'
})
export class EncuestasCulturaYRecreaciNPage {

  constructor(public navCtrl: NavController) {
  }
  goToEncuestasCultRecre(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasCultRecrePage);
  }goToEncuestasCultRecre004(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasCultRecre004Page);
  }
}
