import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProblemTicasCulturaYRecreaciN10Page } from '../problem-ticas-cultura-yrecreaci-n10/problem-ticas-cultura-yrecreaci-n10';

@Component({
  selector: 'page-noticias-mov001',
  templateUrl: 'noticias-mov001.html'
})
export class NoticiasMov001Page {

  constructor(public navCtrl: NavController) {
  }
  goToProblemTicasCulturaYRecreaciN10(params){
    if (!params) params = {};
    this.navCtrl.push(ProblemTicasCulturaYRecreaciN10Page);
  }
}
