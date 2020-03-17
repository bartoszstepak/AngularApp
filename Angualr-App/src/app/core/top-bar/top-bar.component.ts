import { Component, OnInit } from '@angular/core';
import { WorkTimeService } from 'src/app/services/work-time.service';
import { Router } from '@angular/router';
import { userInfo } from 'os';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  isClockSet = false;
  time = 0;

  constructor(
    private timeService: WorkTimeService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {

  }

  public logout(): void{
    console.log('elo');
  }

  public configureDashboard(): void{
    this.router.navigateByUrl(``);

  }

  public goToMyProfile(){
    let id = this.userService.getUserId();
    this.router.navigateByUrl(`employee/${id}`);
  }

  public showNotifications(){
    console.log('elo');

  }

  stopClock(): void {
    this.isClockSet = false;
    let endDate = new Date();
    this.timeService.setEndTime(endDate)
  }

  startClock(): void {
    this.isClockSet = true;
    let startDate = new Date();
    this.timeService.setStartTime(startDate);
    setInterval(() => {
      this.time = this.timeService.getWorkedTime();
   }, 1000 );
  }

}
