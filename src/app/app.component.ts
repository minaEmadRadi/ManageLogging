import { Component } from '@angular/core';
import { User } from './Models/User';
import { ManageaccountService } from './Services/manageaccount.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MangeLogging.UI';
 
 
  Useres: User[] = [];
  UserToEdit?: User;

  constructor(private UserService: ManageaccountService) {}

  ngOnInit(): void {
    this.UserService
      .getUseres()
      .subscribe((result: User[]) => (this.Useres = result));
  }

  updateUserList(Useres: User[]) {
    this.Useres = Useres;
  }

  initNewUser() {
    this.UserToEdit = new User();
  }

  editUser(User: User) {
    this.UserToEdit = User;
  }
}
