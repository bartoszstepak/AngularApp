import { Component, OnInit } from '@angular/core';
import { WorkStatus } from '../model/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  mainCards = [
    { name: 'Grafik', icon: 'far fa-calendar-alt'},
    { name: 'Czas pracy', icon: 'fas fa-book-reader'},
    { name: 'Moje zadania', icon: 'far fa-calendar-alt'},
    { name: 'Opcje', icon: 'fas fa-tools'}
  ];

  configurableCards = [
    { name: 'Grafik', icon: 'far fa-calendar-alt'},
    { name: 'Czas pracy', icon: 'fas fa-book-reader'},
    { name: 'Moje zadania', icon: 'far fa-calendar-alt'},
    { name: 'Opcje', icon: 'fas fa-tools'},
    { name: 'Grafik', icon: 'far fa-calendar-alt'},
    { name: 'Czas pracy', icon: 'fas fa-book-reader'},
    { name: 'Moje zadania', icon: 'far fa-calendar-alt'},
    { name: 'Opcje', icon: 'fas fa-tools'},
    { name: 'Moje zadania', icon: 'far fa-calendar-alt'},
    { name: 'Opcje', icon: 'fas fa-tools'},
    { name: 'Grafik', icon: 'far fa-calendar-alt'},
  ]

  Users = [
    {id: 1, firstName: 'Anna', secondName: 'Kowalska', email: 'werwer@asd.pl', status: WorkStatus.offline },
    {id: 3, firstName: 'Jan', secondName: 'Dupczak-Dupowki_Knior', email: 'werwer@asd.pl', status: WorkStatus.offline },
    {id: 23, firstName: 'Kmail', secondName: 'Lokai', email: 'dsadas.qeqw.e@asd.pl', status: WorkStatus.online },
    {id: 4, firstName: 'Mariusz', secondName: 'Pedro', email: 'sd@asd.pl', status: WorkStatus.offline },
    {id: 5, firstName: 'Rero', secondName: 'Kowaslo', email: 'sssssssssadasda@asd.pl', status: WorkStatus.online },
    {id: 11, firstName: 'Alam', secondName: 'Milik', email: 'dssssss@asd.pl', status: WorkStatus.offline },
  ];
  

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  

}
