import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProblematicasPage } from '../problematicas/problematicas';
import { ProblematicasMovilidadPage } from '../problematicas-movilidad/problematicas-movilidad';
import { ProblematicasMov001Page } from '../problematicas-mov001/problematicas-mov001';
import { ProblematicasMov002Page } from '../problematicas-mov002/problematicas-mov002';
import { ProblematicasMov003Page } from '../problematicas-mov003/problematicas-mov003';
import { ProblematicasContaminacionPage } from '../problematicas-contaminacion/problematicas-contaminacion';
import { ProblematicasCont004Page } from '../problematicas-cont004/problematicas-cont004';
import { ProblematicasCont005Page } from '../problematicas-cont005/problematicas-cont005';
import { ProblematicasCont006Page } from '../problematicas-cont006/problematicas-cont006';
import { ProblematicasSeguridadPage } from '../problematicas-seguridad/problematicas-seguridad';
import { ProblematicasSeg007Page } from '../problematicas-seg007/problematicas-seg007';
import { ProblematicasSeg008Page } from '../problematicas-seg008/problematicas-seg008';
import { ProblematicasSeg009Page } from '../problematicas-seg009/problematicas-seg009';
import { ProblematicasCulturaYRecreaciNPage } from '../problematicas-cultura-yrecreaci-n/problematicas-cultura-yrecreaci-n';
import { ProblemTicasCulturaYRecreaciN10Page } from '../problem-ticas-cultura-yrecreaci-n10/problem-ticas-cultura-yrecreaci-n10';
import { ProblemTicasCulturaYRecreaciN11Page } from '../problem-ticas-cultura-yrecreaci-n11/problem-ticas-cultura-yrecreaci-n11';
import { ProblemTicasCulturaYRecreaciN12Page } from '../problem-ticas-cultura-yrecreaci-n12/problem-ticas-cultura-yrecreaci-n12';
import { NoticiasPage } from '../noticias/noticias';
import { NoticiasMovPage } from '../noticias-mov/noticias-mov';
import { NoticiasMov001Page } from '../noticias-mov001/noticias-mov001';
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
import { EncuestasPage } from '../encuestas/encuestas';
import { EncuestasMovilidadPage } from '../encuestas-movilidad/encuestas-movilidad';
import { EncuestasMovPage } from '../encuestas-mov/encuestas-mov';
import { EncuestasMov001Page } from '../encuestas-mov001/encuestas-mov001';
import { EncuestasContaminacionPage } from '../encuestas-contaminacion/encuestas-contaminacion';
import { EncuestasContPage } from '../encuestas-cont/encuestas-cont';
import { EncuestasCont002Page } from '../encuestas-cont002/encuestas-cont002';
import { EncuestasSeguridadPage } from '../encuestas-seguridad/encuestas-seguridad';
import { EncuestasSegPage } from '../encuestas-seg/encuestas-seg';
import { EncuestasSeg003Page } from '../encuestas-seg003/encuestas-seg003';
import { EncuestasCulturaYRecreaciNPage } from '../encuestas-cultura-yrecreaci-n/encuestas-cultura-yrecreaci-n';
import { EncuestasCultRecrePage } from '../encuestas-cult-recre/encuestas-cult-recre';
import { EncuestasCultRecre004Page } from '../encuestas-cult-recre004/encuestas-cult-recre004';
import { SeguimientoAProyectosPage } from '../seguimiento-aproyectos/seguimiento-aproyectos';
import { SeguimientoAProyectosMovPage } from '../seguimiento-aproyectos-mov/seguimiento-aproyectos-mov';
import { SeguimientoAProyectosMov1Page } from '../seguimiento-aproyectos-mov1/seguimiento-aproyectos-mov1';
import { SeguimientoAProyectosContPage } from '../seguimiento-aproyectos-cont/seguimiento-aproyectos-cont';
import { SeguimientoAProyectosCont2Page } from '../seguimiento-aproyectos-cont2/seguimiento-aproyectos-cont2';
import { SeguimientoAProyectosSegPage } from '../seguimiento-aproyectos-seg/seguimiento-aproyectos-seg';
import { SeguimientoAProyectosSeg3Page } from '../seguimiento-aproyectos-seg3/seguimiento-aproyectos-seg3';
import { SeguimientoAProyectosCultRecrePage } from '../seguimiento-aproyectos-cult-recre/seguimiento-aproyectos-cult-recre';
import { SeguimientoAProyectosCultRecre4Page } from '../seguimiento-aproyectos-cult-recre4/seguimiento-aproyectos-cult-recre4';

@Component({
  selector: 'page-mecanismos-de-integracion',
  templateUrl: 'mecanismos-de-integracion.html'
})
export class MecanismosDeIntegracionPage {

  constructor(public navCtrl: NavController) {
  }
  goToProblematicas(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasPage);
  }goToProblematicasMovilidad(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasMovilidadPage);
  }goToProblematicasMov001(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasMov001Page);
  }goToProblematicasMov002(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasMov002Page);
  }goToProblematicasMov003(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasMov003Page);
  }goToProblematicasContaminacion(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasContaminacionPage);
  }goToProblematicasCont004(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasCont004Page);
  }goToProblematicasCont005(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasCont005Page);
  }goToProblematicasCont006(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasCont006Page);
  }goToProblematicasSeguridad(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasSeguridadPage);
  }goToProblematicasSeg007(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasSeg007Page);
  }goToProblematicasSeg008(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasSeg008Page);
  }goToProblematicasSeg009(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasSeg009Page);
  }goToProblematicasCulturaYRecreaciN(params){
    if (!params) params = {};
    this.navCtrl.push(ProblematicasCulturaYRecreaciNPage);
  }goToProblemTicasCulturaYRecreaciN10(params){
    if (!params) params = {};
    this.navCtrl.push(ProblemTicasCulturaYRecreaciN10Page);
  }goToProblemTicasCulturaYRecreaciN11(params){
    if (!params) params = {};
    this.navCtrl.push(ProblemTicasCulturaYRecreaciN11Page);
  }goToProblemTicasCulturaYRecreaciN12(params){
    if (!params) params = {};
    this.navCtrl.push(ProblemTicasCulturaYRecreaciN12Page);
  }goToNoticias(params){
    if (!params) params = {};
    this.navCtrl.push(NoticiasPage);
  }goToNoticiasMov(params){
    if (!params) params = {};
    this.navCtrl.push(NoticiasMovPage);
  }goToNoticiasMov001(params){
    if (!params) params = {};
    this.navCtrl.push(NoticiasMov001Page);
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
  }goToEncuestas(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasPage);
  }goToEncuestasMovilidad(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasMovilidadPage);
  }goToEncuestasMov(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasMovPage);
  }goToEncuestasMov001(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasMov001Page);
  }goToEncuestasContaminacion(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasContaminacionPage);
  }goToEncuestasCont(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasContPage);
  }goToEncuestasCont002(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasCont002Page);
  }goToEncuestasSeguridad(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasSeguridadPage);
  }goToEncuestasSeg(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasSegPage);
  }goToEncuestasSeg003(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasSeg003Page);
  }goToEncuestasCulturaYRecreaciN(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasCulturaYRecreaciNPage);
  }goToEncuestasCultRecre(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasCultRecrePage);
  }goToEncuestasCultRecre004(params){
    if (!params) params = {};
    this.navCtrl.push(EncuestasCultRecre004Page);
  }goToSeguimientoAProyectos(params){
    if (!params) params = {};
    this.navCtrl.push(SeguimientoAProyectosPage);
  }goToSeguimientoAProyectosMov(params){
    if (!params) params = {};
    this.navCtrl.push(SeguimientoAProyectosMovPage);
  }goToSeguimientoAProyectosMov1(params){
    if (!params) params = {};
    this.navCtrl.push(SeguimientoAProyectosMov1Page);
  }goToSeguimientoAProyectosCont(params){
    if (!params) params = {};
    this.navCtrl.push(SeguimientoAProyectosContPage);
  }goToSeguimientoAProyectosCont2(params){
    if (!params) params = {};
    this.navCtrl.push(SeguimientoAProyectosCont2Page);
  }goToSeguimientoAProyectosSeg(params){
    if (!params) params = {};
    this.navCtrl.push(SeguimientoAProyectosSegPage);
  }goToSeguimientoAProyectosSeg3(params){
    if (!params) params = {};
    this.navCtrl.push(SeguimientoAProyectosSeg3Page);
  }goToSeguimientoAProyectosCultRecre(params){
    if (!params) params = {};
    this.navCtrl.push(SeguimientoAProyectosCultRecrePage);
  }goToSeguimientoAProyectosCultRecre4(params){
    if (!params) params = {};
    this.navCtrl.push(SeguimientoAProyectosCultRecre4Page);
  }
}
