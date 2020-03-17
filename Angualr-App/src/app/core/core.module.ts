import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../helpers/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SideMenuComponent, TopBarComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginComponent
      }
    ]),
  ],
  exports: [
    TopBarComponent,
    SideMenuComponent
  ]
})
export class CoreModule { }
