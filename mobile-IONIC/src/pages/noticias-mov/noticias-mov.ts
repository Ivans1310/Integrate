import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoticiasMov001Page } from '../noticias-mov001/noticias-mov001';
import { ProblemTicasCulturaYRecreaciN10Page } from '../problem-ticas-cultura-yrecreaci-n10/problem-ticas-cultura-yrecreaci-n10';
import { NoticiasMov002Page } from '../noticias-mov002/noticias-mov002';

@Component({
  selector: 'page-noticias-mov',
  templateUrl: 'noticias-mov.html'
})
export class NoticiasMovPage {

  constructor(public navCtrl: NavController) {
  }
  goToNoticiasMov001(params){
    if (!params) params = {};
    this.navCtrl.push(NoticiasMov001Page);
  }goToProblemTicasCulturaYRecreaciN10(params){
    if (!params) params = {};
    this.navCtrl.push(ProblemTicasCulturaYRecreaciN10Page);
  }goToNoticiasMov002(params){
    if (!params) params = {};
    this.navCtrl.push(NoticiasMov002Page);
  }
}
