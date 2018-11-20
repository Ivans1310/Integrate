import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoticiasMovPage } from '../noticias-mov/noticias-mov';
import { NoticiasMov001Page } from '../noticias-mov001/noticias-mov001';
import { ProblemTicasCulturaYRecreaciN10Page } from '../problem-ticas-cultura-yrecreaci-n10/problem-ticas-cultura-yrecreaci-n10';
import { NoticiasMov002Page } from '../noticias-mov002/noticias-mov002';
import { NoticiasContPage } from '../noticias-cont/noticias-cont';
import { NoticiasCont001Page } from '../noticias-cont001/noticias-cont001';
import { NoticiasCont002Page } from '../noticias-cont002/noticias-cont002';
import { NoticiasSegPage } from '../noticias-seg/noticias-seg';
import { NoticiasSeg001Page } from '../noticias-seg001/noticias-seg001';
import { NoticiasSeg002Page } from '../noticias-seg002/noticias-seg002';
import { NoticiasCulturaYRecreacionPage } from '../noticias-cultura-yrecreacion/noticias-cultura-yrecreacion';
import { NoticiasCulturaRecreacion001Page } from '../noticias-cultura-recreacion001/noticias-cultura-recreacion001';
import { NoticiasCulturaRecreacion002Page } from '../noticias-cultura-recreacion002/noticias-cultura-recreacion002';

@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html'
})
export class NoticiasPage {

  constructor(public navCtrl: NavController) {
  }
  goToNoticiasMov(params){
    if (!params) params = {};
    this.navCtrl.push(NoticiasMovPage);
  }goToNoticiasMov001(params){
    if (!params) params = {};
    this.navCtrl.push(NoticiasMov001Page);
  }goToProblemTicasCulturaYRecreaciN10(params){
    if (!params) params = {};
    this.navCtrl.push(ProblemTicasCulturaYRecreaciN10Page);
  }goToNoticiasMov002(params){
    if (!params) params = {};
    this.navCtrl.push(NoticiasMov002Page);
  }goToNoticiasCont(params){
    if (!params) params = {};
    this.navCtrl.push(NoticiasContPage);
  }goToNoticiasCont001(params){
    if (!params) params = {};
    this.navCtrl.push(NoticiasCont001Page);
  }goToNoticiasCont002(params){
    if (!params) params = {};
    this.navCtrl.push(NoticiasCont002Page);
  }goToNoticiasSeg(params){
    if (!params) params = {};
    this.navCtrl.push(NoticiasSegPage);
  }goToNoticiasSeg001(params){
    if (!params) params = {};
    this.navCtrl.push(NoticiasSeg001Page);
  }goToNoticiasSeg002(params){
    if (!params) params = {};
    this.navCtrl.push(NoticiasSeg002Page);
  }goToNoticiasCulturaYRecreacion(params){
    if (!params) params = {};
    this.navCtrl.push(NoticiasCulturaYRecreacionPage);
  }goToNoticiasCulturaRecreacion001(params){
    if (!params) params = {};
    this.navCtrl.push(NoticiasCulturaRecreacion001Page);
  }goToNoticiasCulturaRecreacion002(params){
    if (!params) params = {};
    this.navCtrl.push(NoticiasCulturaRecreacion002Page);
  }
}
