import { Component, OnInit   } from '@angular/core'
import { CommonModule } from "@angular/common";
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/User';
import { error } from 'protractor';
import { Router } from '@angular/router';
;

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  sideMenuActions = ['ELo12', 'Dodaj coś', 'Funkcja 1', 'funkcja 4'];
  user: User;
  constructor(
    private userService: UserService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {
      this.user = data;
    },
    error => {
      console.log(error);
    });
  }

  navigateByUrl(url: string){
    console.log('elo');
    
    this.router.navigateByUrl(`/${url}`);
  }
}
