import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GeneralPageComponent} from './general-page/general-page.component';
import {LegalInfoPageComponent} from './legal-info-page/legal-info-page.component';
import {MedicalInfoPageComponent} from './medical-info-page/medical-info-page.component';
import {CounselingInfoPageComponent} from './counseling-info-page/counseling-info-page.component';
import {HomepageComponent} from './homepage/homepage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'general', component: GeneralPageComponent},
  {path: 'medical-info', component: MedicalInfoPageComponent},
  {path: 'legal-info', component: LegalInfoPageComponent},
  {path: 'counseling-info', component: CounselingInfoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
