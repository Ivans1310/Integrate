import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MecanismosDeIntegracionPage } from '../pages/mecanismos-de-integracion/mecanismos-de-integracion';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { BienvenidosPage } from '../pages/bienvenidos/bienvenidos';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ProblematicasPage } from '../pages/problematicas/problematicas';
import { ProblematicasMovilidadPage } from '../pages/problematicas-movilidad/problematicas-movilidad';
import { ProblematicasMov001Page } from '../pages/problematicas-mov001/problematicas-mov001';
import { ProblematicasMov002Page } from '../pages/problematicas-mov002/problematicas-mov002';
import { ProblematicasMov003Page } from '../pages/problematicas-mov003/problematicas-mov003';
import { ProblematicasCont004Page } from '../pages/problematicas-cont004/problematicas-cont004';
import { ProblematicasCont005Page } from '../pages/problematicas-cont005/problematicas-cont005';
import { ProblematicasCont006Page } from '../pages/problematicas-cont006/problematicas-cont006';
import { ProblematicasSeg007Page } from '../pages/problematicas-seg007/problematicas-seg007';
import { ProblematicasSeg008Page } from '../pages/problematicas-seg008/problematicas-seg008';
import { ProblematicasSeg009Page } from '../pages/problematicas-seg009/problematicas-seg009';
import { ProblemTicasCulturaYRecreaciN10Page } from '../pages/problem-ticas-cultura-yrecreaci-n10/problem-ticas-cultura-yrecreaci-n10';
import { ProblemTicasCulturaYRecreaciN11Page } from '../pages/problem-ticas-cultura-yrecreaci-n11/problem-ticas-cultura-yrecreaci-n11';
import { ProblemTicasCulturaYRecreaciN12Page } from '../pages/problem-ticas-cultura-yrecreaci-n12/problem-ticas-cultura-yrecreaci-n12';
import { ProblematicasContaminacionPage } from '../pages/problematicas-contaminacion/problematicas-contaminacion';
import { ProblematicasSeguridadPage } from '../pages/problematicas-seguridad/problematicas-seguridad';
import { ProblematicasCulturaYRecreaciNPage } from '../pages/problematicas-cultura-yrecreaci-n/problematicas-cultura-yrecreaci-n';
import { NoticiasPage } from '../pages/noticias/noticias';
import { NoticiasMovPage } from '../pages/noticias-mov/noticias-mov';
import { NoticiasMov001Page } from '../pages/noticias-mov001/noticias-mov001';
import { NoticiasMov002Page } from '../pages/noticias-mov002/noticias-mov002';
import { NoticiasCont001Page } from '../pages/noticias-cont001/noticias-cont001';
import { NoticiasCont002Page } from '../pages/noticias-cont002/noticias-cont002';
import { NoticiasSeg001Page } from '../pages/noticias-seg001/noticias-seg001';
import { NoticiasSeg002Page } from '../pages/noticias-seg002/noticias-seg002';
import { NoticiasCulturaRecreacion001Page } from '../pages/noticias-cultura-recreacion001/noticias-cultura-recreacion001';
import { NoticiasCulturaRecreacion002Page } from '../pages/noticias-cultura-recreacion002/noticias-cultura-recreacion002';
import { NoticiasContPage } from '../pages/noticias-cont/noticias-cont';
import { NoticiasSegPage } from '../pages/noticias-seg/noticias-seg';
import { NoticiasCulturaYRecreacionPage } from '../pages/noticias-cultura-yrecreacion/noticias-cultura-yrecreacion';
import { EncuestasPage } from '../pages/encuestas/encuestas';
import { EncuestasMovilidadPage } from '../pages/encuestas-movilidad/encuestas-movilidad';
import { EncuestasMovPage } from '../pages/encuestas-mov/encuestas-mov';
import { EncuestasContPage } from '../pages/encuestas-cont/encuestas-cont';
import { EncuestasSegPage } from '../pages/encuestas-seg/encuestas-seg';
import { EncuestasCultRecrePage } from '../pages/encuestas-cult-recre/encuestas-cult-recre';
import { EncuestasMov001Page } from '../pages/encuestas-mov001/encuestas-mov001';
import { EncuestasCont002Page } from '../pages/encuestas-cont002/encuestas-cont002';
import { EncuestasSeg003Page } from '../pages/encuestas-seg003/encuestas-seg003';
import { EncuestasCultRecre004Page } from '../pages/encuestas-cult-recre004/encuestas-cult-recre004';
import { EncuestasContaminacionPage } from '../pages/encuestas-contaminacion/encuestas-contaminacion';
import { EncuestasSeguridadPage } from '../pages/encuestas-seguridad/encuestas-seguridad';
import { EncuestasCulturaYRecreaciNPage } from '../pages/encuestas-cultura-yrecreaci-n/encuestas-cultura-yrecreaci-n';
import { SeguimientoAProyectosPage } from '../pages/seguimiento-aproyectos/seguimiento-aproyectos';
import { SeguimientoAProyectosMovPage } from '../pages/seguimiento-aproyectos-mov/seguimiento-aproyectos-mov';
import { SeguimientoAProyectosMov1Page } from '../pages/seguimiento-aproyectos-mov1/seguimiento-aproyectos-mov1';
import { SeguimientoAProyectosCont2Page } from '../pages/seguimiento-aproyectos-cont2/seguimiento-aproyectos-cont2';
import { SeguimientoAProyectosSeg3Page } from '../pages/seguimiento-aproyectos-seg3/seguimiento-aproyectos-seg3';
import { SeguimientoAProyectosCultRecre4Page } from '../pages/seguimiento-aproyectos-cult-recre4/seguimiento-aproyectos-cult-recre4';
import { SeguimientoAProyectosContPage } from '../pages/seguimiento-aproyectos-cont/seguimiento-aproyectos-cont';
import { SeguimientoAProyectosSegPage } from '../pages/seguimiento-aproyectos-seg/seguimiento-aproyectos-seg';
import { SeguimientoAProyectosCultRecrePage } from '../pages/seguimiento-aproyectos-cult-recre/seguimiento-aproyectos-cult-recre';
import { ComoIntegrartePage } from '../pages/como-integrarte/como-integrarte';
import { ContactanosPage } from '../pages/contactanos/contactanos';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MecanismosDeIntegracionPage,
    TabsControllerPage,
    BienvenidosPage,
    LoginPage,
    SignupPage,
    ProblematicasPage,
    ProblematicasMovilidadPage,
    ProblematicasMov001Page,
    ProblematicasMov002Page,
    ProblematicasMov003Page,
    ProblematicasCont004Page,
    ProblematicasCont005Page,
    ProblematicasCont006Page,
    ProblematicasSeg007Page,
    ProblematicasSeg008Page,
    ProblematicasSeg009Page,
    ProblemTicasCulturaYRecreaciN10Page,
    ProblemTicasCulturaYRecreaciN11Page,
    ProblemTicasCulturaYRecreaciN12Page,
    ProblematicasContaminacionPage,
    ProblematicasSeguridadPage,
    ProblematicasCulturaYRecreaciNPage,
    NoticiasPage,
    NoticiasMovPage,
    NoticiasMov001Page,
    NoticiasMov002Page,
    NoticiasCont001Page,
    NoticiasCont002Page,
    NoticiasSeg001Page,
    NoticiasSeg002Page,
    NoticiasCulturaRecreacion001Page,
    NoticiasCulturaRecreacion002Page,
    NoticiasContPage,
    NoticiasSegPage,
    NoticiasCulturaYRecreacionPage,
    EncuestasPage,
    EncuestasMovilidadPage,
    EncuestasMovPage,
    EncuestasContPage,
    EncuestasSegPage,
    EncuestasCultRecrePage,
    EncuestasMov001Page,
    EncuestasCont002Page,
    EncuestasSeg003Page,
    EncuestasCultRecre004Page,
    EncuestasContaminacionPage,
    EncuestasSeguridadPage,
    EncuestasCulturaYRecreaciNPage,
    SeguimientoAProyectosPage,
    SeguimientoAProyectosMovPage,
    SeguimientoAProyectosMov1Page,
    SeguimientoAProyectosCont2Page,
    SeguimientoAProyectosSeg3Page,
    SeguimientoAProyectosCultRecre4Page,
    SeguimientoAProyectosContPage,
    SeguimientoAProyectosSegPage,
    SeguimientoAProyectosCultRecrePage,
    ComoIntegrartePage,
    ContactanosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MecanismosDeIntegracionPage,
    TabsControllerPage,
    BienvenidosPage,
    LoginPage,
    SignupPage,
    ProblematicasPage,
    ProblematicasMovilidadPage,
    ProblematicasMov001Page,
    ProblematicasMov002Page,
    ProblematicasMov003Page,
    ProblematicasCont004Page,
    ProblematicasCont005Page,
    ProblematicasCont006Page,
    ProblematicasSeg007Page,
    ProblematicasSeg008Page,
    ProblematicasSeg009Page,
    ProblemTicasCulturaYRecreaciN10Page,
    ProblemTicasCulturaYRecreaciN11Page,
    ProblemTicasCulturaYRecreaciN12Page,
    ProblematicasContaminacionPage,
    ProblematicasSeguridadPage,
    ProblematicasCulturaYRecreaciNPage,
    NoticiasPage,
    NoticiasMovPage,
    NoticiasMov001Page,
    NoticiasMov002Page,
    NoticiasCont001Page,
    NoticiasCont002Page,
    NoticiasSeg001Page,
    NoticiasSeg002Page,
    NoticiasCulturaRecreacion001Page,
    NoticiasCulturaRecreacion002Page,
    NoticiasContPage,
    NoticiasSegPage,
    NoticiasCulturaYRecreacionPage,
    EncuestasPage,
    EncuestasMovilidadPage,
    EncuestasMovPage,
    EncuestasContPage,
    EncuestasSegPage,
    EncuestasCultRecrePage,
    EncuestasMov001Page,
    EncuestasCont002Page,
    EncuestasSeg003Page,
    EncuestasCultRecre004Page,
    EncuestasContaminacionPage,
    EncuestasSeguridadPage,
    EncuestasCulturaYRecreaciNPage,
    SeguimientoAProyectosPage,
    SeguimientoAProyectosMovPage,
    SeguimientoAProyectosMov1Page,
    SeguimientoAProyectosCont2Page,
    SeguimientoAProyectosSeg3Page,
    SeguimientoAProyectosCultRecre4Page,
    SeguimientoAProyectosContPage,
    SeguimientoAProyectosSegPage,
    SeguimientoAProyectosCultRecrePage,
    ComoIntegrartePage,
    ContactanosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}