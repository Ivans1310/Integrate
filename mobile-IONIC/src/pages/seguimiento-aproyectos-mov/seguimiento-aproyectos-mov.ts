import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SeguimientoAProyectosMov1Page } from '../seguimiento-aproyectos-mov1/seguimiento-aproyectos-mov1';
import { ProblemTicasCulturaYRecreaciN10Page } from '../problem-ticas-cultura-yrecreaci-n10/problem-ticas-cultura-yrecreaci-n10';

@Component({
  selector: 'page-seguimiento-aproyectos-mov',
  templateUrl: 'seguimiento-aproyectos-mov.html'
})
export class SeguimientoAProyectosMovPage {

  constructor(public navCtrl: NavController) {
  }
  goToSeguimientoAProyectosMov1(params){
    if (!params) params = {};
    this.navCtrl.push(SeguimientoAProyectosMov1Page);
  }goToProblemTicasCulturaYRecreaciN10(params){
    if (!params) params = {};
    this.navCtrl.push(ProblemTicasCulturaYRecreaciN10Page);
  }
}
