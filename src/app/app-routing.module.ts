import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', component: EyeComponent },
  {path:'iris', component:IrisComponent},
  {path:'cristallin',component:CristallinComponent},
  {path:'sclere', component:SclereComponent},
  {path:'vitre',component:VitreComponent},
  {path:'papille',component:PapilleComponent},
  {path:'nerfoptique',component:NerfoptiqueComponent},
  {path:'retine', component:RetineComponent},
  {path:'corpsciliaires' , component:CorpsciliairesComponent},
  {path:'paupiere' , component:PaupiereComponent},
  {path:'cornee',component:CorneeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
