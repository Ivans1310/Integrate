import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MecanismosDeIntegracionPage } from '../mecanismos-de-integracion/mecanismos-de-integracion';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = HomePage;
  tab2Root: any = MecanismosDeIntegracionPage;
  constructor(public navCtrl: NavController) {
  }
  
}
