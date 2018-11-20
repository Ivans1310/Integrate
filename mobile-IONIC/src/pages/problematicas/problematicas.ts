import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProblematicasMovilidadPage } from '../problematicas-movilidad/problematicas-movilidad';
import { ProblematicasMov001Page } from '../problematicas-mov001/problematicas-mov001';
import { ProblematicasMov002Page } from '../problematicas-mov002/problematicas-mov002';
import { ProblematicasMov003Page } from '../problematicas-mov003/problematicas-mov003';
import { ProblematicasContaminacionPage } from '../problematicas-contaminacion/problematicas-contaminacion';
import { ProblematicasCont004Page } from '../problematicas-cont004/problematicas-cont004';
import { ProblematicasCont005Page } from '../problematicas-cont005/problematicas-cont005';
import { ProblematicasCont006Page } from '../problematicas-cont006/problematicas-cont006';
import { ProblematicasSeguridadPage } from '../problematicas-seguridad/problematicas-seguridad';
import { ProblematicasSeg007Page } from '../problematicas-seg007/problematicas-seg007';
import { ProblematicasSeg008Page } from '../problematicas-seg008/problematicas-seg008';
import { ProblematicasSeg009Page } from '../problematicas-seg009/problematicas-seg009';
import { ProblematicasCulturaYRecreaciNPage } from '../problematicas-cultura-yrecreaci-n/problematicas-cultura-yrecreaci-n';
import { ProblemTicasCulturaYRecreaciN10Page } from '../problem-ticas-cultura-yrecreaci-n10/problem-ticas-cultura-yrecreaci-n10';
import { ProblemTicasCulturaYRecreaciN11Page } from '../problem-ticas-cultura-yrecreaci-n11/problem-ticas-cultura-yrecreaci-n11';
import { ProblemTicasCulturaYRecreaciN12Page } from '../problem-ticas-cultura-yrecreaci-n12/problem-ticas-cultura-yrecreaci-n12';

@Component({
  selector: 'page-problematicas',
  templateUrl: 'problematicas.html'
})
export class ProblematicasPage {

  constructor(public navCtrl: NavController) {
  }
  goToProblematicasMovilidad(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasMovilidadPage);
  }goToProblematicasMov001(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasMov001Page);
  }goToProblematicasMov002(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasMov002Page);
  }goToProblematicasMov003(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasMov003Page);
  }goToProblematicasContaminacion(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasContaminacionPage);
  }goToProblematicasCont004(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasCont004Page);
  }goToProblematicasCont005(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasCont005Page);
  }goToProblematicasCont006(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasCont006Page);
  }goToProblematicasSeguridad(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasSeguridadPage);
  }goToProblematicasSeg007(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasSeg007Page);
  }goToProblematicasSeg008(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasSeg008Page);
  }goToProblematicasSeg009(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasSeg009Page);
  }goToProblematicasCulturaYRecreaciN(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasCulturaYRecreaciNPage);
  }goToProblemTicasCulturaYRecreaciN10(params){
    if (!params) params = {};
    this.navCtrl.push(ProblemTicasCulturaYRecreaciN10Page);
  }goToProblemTicasCulturaYRecreaciN11(params){
    if (!params) params = {};
    this.navCtrl.push(ProblemTicasCulturaYRecreaciN11Page);
  }goToProblemTicasCulturaYRecreaciN12(params){
    if (!params) params = {};
    this.navCtrl.push(ProblemTicasCulturaYRecreaciN12Page);
  }
}
