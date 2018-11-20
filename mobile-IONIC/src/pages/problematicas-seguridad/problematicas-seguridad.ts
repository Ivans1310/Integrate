import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProblematicasSeg007Page } from '../problematicas-seg007/problematicas-seg007';
import { ProblematicasSeg008Page } from '../problematicas-seg008/problematicas-seg008';
import { ProblematicasSeg009Page } from '../problematicas-seg009/problematicas-seg009';

@Component({
  selector: 'page-problematicas-seguridad',
  templateUrl: 'problematicas-seguridad.html'
})
export class ProblematicasSeguridadPage {

  constructor(public navCtrl: NavController) {
  }
  goToProblematicasSeg007(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasSeg007Page);
  }goToProblematicasSeg008(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasSeg008Page);
  }goToProblematicasSeg009(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasSeg009Page);
  }
}
