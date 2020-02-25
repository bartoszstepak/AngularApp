import { Injectable } from '@angular/core';

export const MOBILE_SIZE: number = 600;
export const TABLET_SIZE: number = 1000;

@Injectable({
  providedIn: 'root'
})

export class DeviceService {

  public innerWidth: any;

  constructor() { }

  public isMobile(): boolean {
    this.innerWidth = window.innerWidth;
    return this.innerWidth <= MOBILE_SIZE;
  }

  public isTablet(): boolean {
    this.innerWidth = window.innerWidth;
    return this.innerWidth > MOBILE_SIZE && this.innerWidth <= TABLET_SIZE;
  }

  public isDesktop(): boolean {
    this.innerWidth = window.innerWidth;
    return this.innerWidth > TABLET_SIZE;
  }
}
