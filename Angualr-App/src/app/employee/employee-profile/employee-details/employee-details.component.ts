import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
