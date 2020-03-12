import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DeviceService } from './share/services/device.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopBarComponent } from './core/top-bar/top-bar.component';
import { SideMenuComponent } from './core/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import { EmployeeModule } from './employee/employee.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    EmployeeModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent
      }
    ]),
    BrowserAnimationsModule
  ],
  
  providers: [DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
