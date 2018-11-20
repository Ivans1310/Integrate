import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SeguimientoAProyectosCont2Page } from '../seguimiento-aproyectos-cont2/seguimiento-aproyectos-cont2';
import { ProblemTicasCulturaYRecreaciN10Page } from '../problem-ticas-cultura-yrecreaci-n10/problem-ticas-cultura-yrecreaci-n10';

@Component({
  selector: 'page-seguimiento-aproyectos-cont',
  templateUrl: 'seguimiento-aproyectos-cont.html'
})
export class SeguimientoAProyectosContPage {

  constructor(public navCtrl: NavController) {
  }
  goToSeguimientoAProyectosCont2(params){
    if (!params) params = {};
    this.navCtrl.push(SeguimientoAProyectosCont2Page);
  }goToProblemTicasCulturaYRecreaciN10(params){
    if (!params) params = {};
    this.navCtrl.push(ProblemTicasCulturaYRecreaciN10Page);
  }
}
