import { Component, OnInit } from '@angular/core';
import { WorkTimeService } from 'src/app/services/work-time.service';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  isClockSet = false;
  timeStart = 0;
  timeStop = new Date('00:00:00');
  time = 0;

  constructor(
    private timeService: WorkTimeService
  ) { }

  ngOnInit(): void {

  }

  public logout(): void{
    console.log('elo');
  }

  public configureDashboard(): void{
    console.log('elo');

  }

  public goToMyProfile(){
    console.log('elo');

  }

  public showNotifications(){
    console.log('elo');

  }

  stopClock(): void {
    this.isClockSet = false;
    var endDate = new Date();
    this.timeService.setEndTime(endDate)
  }

  startClock(): void {
    this.isClockSet = true;
    var startDate = new Date();
    this.timeService.setStartTime(startDate);
    setInterval(() => {
      this.time = this.timeService.getWorkedTime();
   }, 1000 );
  }

}
