import { Component, OnInit   } from '@angular/core'
import { CommonModule } from "@angular/common";
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/User';
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
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

}
