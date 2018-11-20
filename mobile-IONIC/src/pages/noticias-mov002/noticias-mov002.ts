import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProblemTicasCulturaYRecreaciN10Page } from '../problem-ticas-cultura-yrecreaci-n10/problem-ticas-cultura-yrecreaci-n10';

@Component({
  selector: 'page-noticias-mov002',
  templateUrl: 'noticias-mov002.html'
})
export class NoticiasMov002Page {

  constructor(public navCtrl: NavController) {
  }
  goToProblemTicasCulturaYRecreaciN10(params){
    if (!params) params = {};
    this.navCtrl.push(ProblemTicasCulturaYRecreaciN10Page);
  }
}
