import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { CardBoxesComponent } from './card-boxes/card-boxes.component';
import { TypeIconComponent } from './type-icon/type-icon.component';
import {GeneralPageComponent} from './general-page/general-page.component';
import {LegalInfoPageComponent} from './legal-info-page/legal-info-page.component';
import {MedicalInfoPageComponent} from './medical-info-page/medical-info-page.component';
import {CounselingInfoPageComponent} from './counseling-info-page/counseling-info-page.component';
import {DetailsLinkComponent} from './details-link/details-link.component';
import { HomepageComponent } from './homepage/homepage.component';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    CardBoxesComponent,
    TypeIconComponent,
    GeneralPageComponent,
    LegalInfoPageComponent,
    MedicalInfoPageComponent,
    CounselingInfoPageComponent,
    DetailsLinkComponent,
    HomepageComponent,
    HeaderComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
