import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SeguimientoAProyectosSeg3Page } from '../seguimiento-aproyectos-seg3/seguimiento-aproyectos-seg3';
import { ProblemTicasCulturaYRecreaciN10Page } from '../problem-ticas-cultura-yrecreaci-n10/problem-ticas-cultura-yrecreaci-n10';

@Component({
  selector: 'page-seguimiento-aproyectos-seg',
  templateUrl: 'seguimiento-aproyectos-seg.html'
})
export class SeguimientoAProyectosSegPage {

  constructor(public navCtrl: NavController) {
  }
  goToSeguimientoAProyectosSeg3(params){
    if (!params) params = {};
    this.navCtrl.push(SeguimientoAProyectosSeg3Page);
  }goToProblemTicasCulturaYRecreaciN10(params){
    if (!params) params = {};
    this.navCtrl.push(ProblemTicasCulturaYRecreaciN10Page);
  }
}
