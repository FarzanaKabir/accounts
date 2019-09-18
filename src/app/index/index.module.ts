import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import {MatButtonModule, MatIconModule} from '@angular/material';



@NgModule({
  declarations: [IndexComponent, HeaderComponent, FooterComponent, AuthComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class IndexModule { }
