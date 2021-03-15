import { Component, Input, OnInit } from '@angular/core';
import { Usercard } from 'src/app/model';
@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input('usercard') usercard:Partial<Usercard>={}
  constructor() { }

  ngOnInit() {
  }

}
