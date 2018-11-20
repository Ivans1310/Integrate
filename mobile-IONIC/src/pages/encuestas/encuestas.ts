import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EncuestasMovilidadPage } from '../encuestas-movilidad/encuestas-movilidad';
import { EncuestasMovPage } from '../encuestas-mov/encuestas-mov';
import { EncuestasMov001Page } from '../encuestas-mov001/encuestas-mov001';
import { EncuestasContaminacionPage } from '../encuestas-contaminacion/encuestas-contaminacion';
import { EncuestasContPage } from '../encuestas-cont/encuestas-cont';
import { EncuestasCont002Page } from '../encuestas-cont002/encuestas-cont002';
import { EncuestasSeguridadPage } from '../encuestas-seguridad/encuestas-seguridad';
import { EncuestasSegPage } from '../encuestas-seg/encuestas-seg';
import { EncuestasSeg003Page } from '../encuestas-seg003/encuestas-seg003';
import { EncuestasCulturaYRecreaciNPage } from '../encuestas-cultura-yrecreaci-n/encuestas-cultura-yrecreaci-n';
import { EncuestasCultRecrePage } from '../encuestas-cult-recre/encuestas-cult-recre';
import { EncuestasCultRecre004Page } from '../encuestas-cult-recre004/encuestas-cult-recre004';

@Component({
  selector: 'page-encuestas',
  templateUrl: 'encuestas.html'
})
export class EncuestasPage {

  constructor(public navCtrl: NavController) {
  }
  goToEncuestasMovilidad(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasMovilidadPage);
  }goToEncuestasMov(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasMovPage);
  }goToEncuestasMov001(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasMov001Page);
  }goToEncuestasContaminacion(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasContaminacionPage);
  }goToEncuestasCont(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasContPage);
  }goToEncuestasCont002(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasCont002Page);
  }goToEncuestasSeguridad(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasSeguridadPage);
  }goToEncuestasSeg(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasSegPage);
  }goToEncuestasSeg003(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasSeg003Page);
  }goToEncuestasCulturaYRecreaciN(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasCulturaYRecreaciNPage);
  }goToEncuestasCultRecre(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasCultRecrePage);
  }goToEncuestasCultRecre004(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasCultRecre004Page);
  }
}
