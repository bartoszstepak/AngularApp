import { Component } from '@angular/core';
import { DeviceService } from './share/services/device.service';
import { AuthenticationService } from './core/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private authentication: AuthenticationService
  ) {
  }
}
