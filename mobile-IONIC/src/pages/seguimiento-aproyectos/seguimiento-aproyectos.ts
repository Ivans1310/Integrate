import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SeguimientoAProyectosMovPage } from '../seguimiento-aproyectos-mov/seguimiento-aproyectos-mov';
import { SeguimientoAProyectosMov1Page } from '../seguimiento-aproyectos-mov1/seguimiento-aproyectos-mov1';
import { ProblemTicasCulturaYRecreaciN10Page } from '../problem-ticas-cultura-yrecreaci-n10/problem-ticas-cultura-yrecreaci-n10';
import { SeguimientoAProyectosContPage } from '../seguimiento-aproyectos-cont/seguimiento-aproyectos-cont';
import { SeguimientoAProyectosCont2Page } from '../seguimiento-aproyectos-cont2/seguimiento-aproyectos-cont2';
import { SeguimientoAProyectosSegPage } from '../seguimiento-aproyectos-seg/seguimiento-aproyectos-seg';
import { SeguimientoAProyectosSeg3Page } from '../seguimiento-aproyectos-seg3/seguimiento-aproyectos-seg3';
import { SeguimientoAProyectosCultRecrePage } from '../seguimiento-aproyectos-cult-recre/seguimiento-aproyectos-cult-recre';
import { SeguimientoAProyectosCultRecre4Page } from '../seguimiento-aproyectos-cult-recre4/seguimiento-aproyectos-cult-recre4';

@Component({
  selector: 'page-seguimiento-aproyectos',
  templateUrl: 'seguimiento-aproyectos.html'
})
export class SeguimientoAProyectosPage {

  constructor(public navCtrl: NavController) {
  }
  goToSeguimientoAProyectosMov(params){
    if (!params) params = {};
    this.navCtrl.push(SeguimientoAProyectosMovPage);
  }goToSeguimientoAProyectosMov1(params){
    if (!params) params = {};
    this.navCtrl.push(SeguimientoAProyectosMov1Page);
  }goToProblemTicasCulturaYRecreaciN10(params){
    if (!params) params = {};
    this.navCtrl.push(ProblemTicasCulturaYRecreaciN10Page);
  }goToSeguimientoAProyectosCont(params){
    if (!params) params = {};
    this.navCtrl.push(SeguimientoAProyectosContPage);
  }goToSeguimientoAProyectosCont2(params){
    if (!params) params = {};
    this.navCtrl.push(SeguimientoAProyectosCont2Page);
  }goToSeguimientoAProyectosSeg(params){
    if (!params) params = {};
    this.navCtrl.push(SeguimientoAProyectosSegPage);
  }goToSeguimientoAProyectosSeg3(params){
    if (!params) params = {};
    this.navCtrl.push(SeguimientoAProyectosSeg3Page);
  }goToSeguimientoAProyectosCultRecre(params){
    if (!params) params = {};
    this.navCtrl.push(SeguimientoAProyectosCultRecrePage);
  }goToSeguimientoAProyectosCultRecre4(params){
    if (!params) params = {};
    this.navCtrl.push(SeguimientoAProyectosCultRecre4Page);
  }
}
