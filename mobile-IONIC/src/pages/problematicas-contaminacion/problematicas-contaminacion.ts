import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProblematicasCont004Page } from '../problematicas-cont004/problematicas-cont004';
import { ProblematicasCont005Page } from '../problematicas-cont005/problematicas-cont005';
import { ProblematicasCont006Page } from '../problematicas-cont006/problematicas-cont006';

@Component({
  selector: 'page-problematicas-contaminacion',
  templateUrl: 'problematicas-contaminacion.html'
})
export class ProblematicasContaminacionPage {

  constructor(public navCtrl: NavController) {
  }
  goToProblematicasCont004(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasCont004Page);
  }goToProblematicasCont005(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasCont005Page);
  }goToProblematicasCont006(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasCont006Page);
  }
}
