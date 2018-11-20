import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProblemTicasCulturaYRecreaciN10Page } from '../problem-ticas-cultura-yrecreaci-n10/problem-ticas-cultura-yrecreaci-n10';
import { ProblemTicasCulturaYRecreaciN11Page } from '../problem-ticas-cultura-yrecreaci-n11/problem-ticas-cultura-yrecreaci-n11';
import { ProblemTicasCulturaYRecreaciN12Page } from '../problem-ticas-cultura-yrecreaci-n12/problem-ticas-cultura-yrecreaci-n12';

@Component({
  selector: 'page-problematicas-cultura-yrecreaci-n',
  templateUrl: 'problematicas-cultura-yrecreaci-n.html'
})
export class ProblematicasCulturaYRecreaciNPage {

  constructor(public navCtrl: NavController) {
  }
  goToProblemTicasCulturaYRecreaciN10(params){
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
