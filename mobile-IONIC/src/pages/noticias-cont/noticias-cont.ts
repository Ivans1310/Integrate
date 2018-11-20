import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoticiasCont001Page } from '../noticias-cont001/noticias-cont001';
import { ProblemTicasCulturaYRecreaciN10Page } from '../problem-ticas-cultura-yrecreaci-n10/problem-ticas-cultura-yrecreaci-n10';
import { NoticiasCont002Page } from '../noticias-cont002/noticias-cont002';

@Component({
  selector: 'page-noticias-cont',
  templateUrl: 'noticias-cont.html'
})
export class NoticiasContPage {

  constructor(public navCtrl: NavController) {
  }
  goToNoticiasCont001(params){
    if (!params) params = {};
    this.navCtrl.push(NoticiasCont001Page);
  }goToProblemTicasCulturaYRecreaciN10(params){
    if (!params) params = {};
    this.navCtrl.push(ProblemTicasCulturaYRecreaciN10Page);
  }goToNoticiasCont002(params){
    if (!params) params = {};
    this.navCtrl.push(NoticiasCont002Page);
  }
}
