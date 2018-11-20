import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoticiasSeg001Page } from '../noticias-seg001/noticias-seg001';
import { ProblemTicasCulturaYRecreaciN10Page } from '../problem-ticas-cultura-yrecreaci-n10/problem-ticas-cultura-yrecreaci-n10';
import { NoticiasSeg002Page } from '../noticias-seg002/noticias-seg002';

@Component({
  selector: 'page-noticias-seg',
  templateUrl: 'noticias-seg.html'
})
export class NoticiasSegPage {

  constructor(public navCtrl: NavController) {
  }
  goToNoticiasSeg001(params){
    if (!params) params = {};
    this.navCtrl.push(NoticiasSeg001Page);
  }goToProblemTicasCulturaYRecreaciN10(params){
    if (!params) params = {};
    this.navCtrl.push(ProblemTicasCulturaYRecreaciN10Page);
  }goToNoticiasSeg002(params){
    if (!params) params = {};
    this.navCtrl.push(NoticiasSeg002Page);
  }
}
