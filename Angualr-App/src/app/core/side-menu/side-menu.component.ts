import { Component, OnInit   } from '@angular/core'
import { CommonModule } from "@angular/common";
;

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  sideMenuActions = ['ELo12', 'Dodaj coś', 'Funkcja 1', 'funkcja 4'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
