import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/users.interface';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private title = 'User component Works!';
  private users: any = [];
  constructor(private usersService: UsersService) {

  }
  ngOnInit() {
    this.getAllUsers();
  }

  private getAllUsers = () => {
    this.usersService.getAllUsers()
      .subscribe(res => {
        this.users = this.usersService.getLocalUsersData();
        console.log(this.users);
      },
      err => {
        console.log("error for getAllUsers", err);
      });
  }

  private getUser = (userId: number) => {
    this.usersService.getUser(userId)
      .subscribe(res => {
        this.users = this.usersService.getLocalUsersData();
        console.log(this.users);
      },
      err => {
        console.log("error for getUser", err);
      });
  }

  private removeUser = (userId: number) => {
    this.usersService.removeUser(userId)
      .subscribe(res => {
        this.users = this.usersService.getLocalUsersData();
        console.log(this.users);
      },
      err => {
        console.log("error for remove User", err);
      });
  }

  private updateUser = (user: any) => {
    this.usersService.updateUser(user)
      .subscribe(res => {
        this.users = this.usersService.getLocalUsersData();
        console.log(this.users);
      },
      err => {
        console.log("error for update User", err);
      });
  }

  private onHandleSingleUpdate = () => {
    let updatedUser = {
      id: "0",
      name: "name0 new",
      surname: "surname0 new",
      birthDate: "24-8-1981",
      phone: "634523125",
      city: "Wroclaw",
      street: "Mydlana",
      number: "1"
    };
    this.updateUser(updatedUser);
  };

  private onHandleMultipleUpdate = () => {
    let updatedUsers = [
      {
        id: "1",
        name: "name1 new",
        surname: "surname1 new",
        birthDate: "28-9-1983",
        phone: "812312312",
        city: "Warsaw",
        street: "Domaniewska",
        number: "2"
      },
      {
        id: "2",
        name: "name2 new",
        surname: "surname2 new",
        birthDate: "01-6-1983",
        phone: "987654412",
        city: "Wroclaw",
        street: "Mydlana",
        number: "3"
      }
    ];
    this.updateUser(updatedUsers);
  };

  private onHandleRemove = () => {
    this.removeUser(3);
  }
}