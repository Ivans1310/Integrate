import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProblemTicasCulturaYRecreaciN10Page } from '../problem-ticas-cultura-yrecreaci-n10/problem-ticas-cultura-yrecreaci-n10';

@Component({
  selector: 'page-seguimiento-aproyectos-cont2',
  templateUrl: 'seguimiento-aproyectos-cont2.html'
})
export class SeguimientoAProyectosCont2Page {

  constructor(public navCtrl: NavController) {
  }
  goToProblemTicasCulturaYRecreaciN10(params){
    if (!params) params = {};
    this.navCtrl.push(ProblemTicasCulturaYRecreaciN10Page);
  }
}
