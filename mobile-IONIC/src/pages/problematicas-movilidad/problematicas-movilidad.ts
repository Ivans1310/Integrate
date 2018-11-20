import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProblematicasMov001Page } from '../problematicas-mov001/problematicas-mov001';
import { ProblematicasMov002Page } from '../problematicas-mov002/problematicas-mov002';
import { ProblematicasMov003Page } from '../problematicas-mov003/problematicas-mov003';

@Component({
  selector: 'page-problematicas-movilidad',
  templateUrl: 'problematicas-movilidad.html'
})
export class ProblematicasMovilidadPage {

  constructor(public navCtrl: NavController) {
  }
  goToProblematicasMov001(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasMov001Page);
  }goToProblematicasMov002(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasMov002Page);
  }goToProblematicasMov003(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasMov003Page);
  }
}
