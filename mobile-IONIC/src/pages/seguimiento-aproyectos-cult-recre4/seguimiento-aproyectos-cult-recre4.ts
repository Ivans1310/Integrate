import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProblemTicasCulturaYRecreaciN10Page } from '../problem-ticas-cultura-yrecreaci-n10/problem-ticas-cultura-yrecreaci-n10';

@Component({
  selector: 'page-seguimiento-aproyectos-cult-recre4',
  templateUrl: 'seguimiento-aproyectos-cult-recre4.html'
})
export class SeguimientoAProyectosCultRecre4Page {

  constructor(public navCtrl: NavController) {
  }
  goToProblemTicasCulturaYRecreaciN10(params){
    if (!params) params = {};
    this.navCtrl.push(ProblemTicasCulturaYRecreaciN10Page);
  }
}
