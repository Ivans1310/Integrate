import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SeguimientoAProyectosCultRecre4Page } from '../seguimiento-aproyectos-cult-recre4/seguimiento-aproyectos-cult-recre4';
import { ProblemTicasCulturaYRecreaciN10Page } from '../problem-ticas-cultura-yrecreaci-n10/problem-ticas-cultura-yrecreaci-n10';

@Component({
  selector: 'page-seguimiento-aproyectos-cult-recre',
  templateUrl: 'seguimiento-aproyectos-cult-recre.html'
})
export class SeguimientoAProyectosCultRecrePage {

  constructor(public navCtrl: NavController) {
  }
  goToSeguimientoAProyectosCultRecre4(params){
    if (!params) params = {};
    this.navCtrl.push(SeguimientoAProyectosCultRecre4Page);
  }goToProblemTicasCulturaYRecreaciN10(params){
    if (!params) params = {};
    this.navCtrl.push(ProblemTicasCulturaYRecreaciN10Page);
  }
}
