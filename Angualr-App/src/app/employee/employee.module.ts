import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs'
import { WorkStatus } from './Model/Employee';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeDetailsComponent } from './employee-profile/employee-details/employee-details.component';
import { EmployeeSettingsComponent } from './employee-profile/employee-settings/employee-settings.component';



@NgModule({
  declarations: [
    EmployeeProfileComponent,
    EmployeeDetailsComponent,
    EmployeeSettingsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule.forChild([
      {
        path: 'employee/:id',
        component: EmployeeProfileComponent
      }
    ])

  ]
})
export class EmployeeModule { }
