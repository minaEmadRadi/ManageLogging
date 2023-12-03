import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ManageaccountService } from 'src/app/Services/manageaccount.service';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  @Input() User?: User;
  @Output() UseresUpdated = new EventEmitter<User[]>();

  constructor(private UserService: ManageaccountService) {}

  ngOnInit(): void {}

  updateUser(User: User) {
    this.UserService
      .updateUser(User)
      .subscribe((Useres: User[]) => this.UseresUpdated.emit(Useres));
  }

  deleteUser(User: User) {
    this.UserService
      .deleteUser(User)
      .subscribe((Useres: User[]) => this.UseresUpdated.emit(Useres));
  }

  createUser(User: User) {
    this.UserService
      .createUser(User)
      .subscribe((Useres: User[]) => this.UseresUpdated.emit(Useres));
  }

}
