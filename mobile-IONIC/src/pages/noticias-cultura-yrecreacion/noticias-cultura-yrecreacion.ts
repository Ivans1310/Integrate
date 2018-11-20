import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoticiasCulturaRecreacion001Page } from '../noticias-cultura-recreacion001/noticias-cultura-recreacion001';
import { ProblemTicasCulturaYRecreaciN10Page } from '../problem-ticas-cultura-yrecreaci-n10/problem-ticas-cultura-yrecreaci-n10';
import { NoticiasCulturaRecreacion002Page } from '../noticias-cultura-recreacion002/noticias-cultura-recreacion002';

@Component({
  selector: 'page-noticias-cultura-yrecreacion',
  templateUrl: 'noticias-cultura-yrecreacion.html'
})
export class NoticiasCulturaYRecreacionPage {

  constructor(public navCtrl: NavController) {
  }
  goToNoticiasCulturaRecreacion001(params){
    if (!params) params = {};
    this.navCtrl.push(NoticiasCulturaRecreacion001Page);
  }goToProblemTicasCulturaYRecreaciN10(params){
    if (!params) params = {};
    this.navCtrl.push(ProblemTicasCulturaYRecreaciN10Page);
  }goToNoticiasCulturaRecreacion002(params){
    if (!params) params = {};
    this.navCtrl.push(NoticiasCulturaRecreacion002Page);
  }
}
