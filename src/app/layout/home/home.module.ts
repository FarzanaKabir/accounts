import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ReportComponent } from './report/report.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatCardModule, MatTableModule} from '@angular/material';



@NgModule({
  declarations: [HomeComponent, SidenavComponent, ReportComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class HomeModule { }
