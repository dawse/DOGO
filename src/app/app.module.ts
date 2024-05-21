import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EyeComponent } from './components/eye/eye.component';
import { IrisComponent } from './components/iris/iris.component';
import { CristallinComponent } from './components/cristallin/cristallin.component';
import { SclereComponent } from './components/sclere/sclere.component';
import { VitreComponent } from './components/vitre/vitre.component';
import { PapilleComponent } from './components/papille/papille.component';
import { NerfoptiqueComponent } from './components/nerfoptique/nerfoptique.component';
import { RetineComponent } from './components/retine/retine.component';
import { CorpsciliairesComponent } from './components/corpsciliaires/corpsciliaires.component';
import { PaupiereComponent } from './components/paupiere/paupiere.component';
import { CorneeComponent } from './components/cornee/cornee.component';

@NgModule({
  declarations: [
    AppComponent,
    EyeComponent,
    IrisComponent,
    CristallinComponent,
    SclereComponent,
    VitreComponent,
    PapilleComponent,
    NerfoptiqueComponent,
    RetineComponent,
    CorpsciliairesComponent,
    PaupiereComponent,
    CorneeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
