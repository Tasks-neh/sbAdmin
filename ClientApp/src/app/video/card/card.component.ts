import { Component, Input, OnInit } from '@angular/core';
import { Objcard } from 'src/app/model';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input('objcard') objcard:Partial<Objcard>={}
  constructor() { }

  ngOnInit(): void {
  }

}
