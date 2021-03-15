import { Component, OnInit } from '@angular/core';
import { Usercard } from 'src/app/model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  data: Array<Usercard> = [
    {
      name: 'user1',

    },
    {
      name: 'user2',

    },
    {
      name: 'user3',

    },

  ]
  constructor() {
    this.data.forEach((element) => {
      console.log(element.name);
    })
  }


}
