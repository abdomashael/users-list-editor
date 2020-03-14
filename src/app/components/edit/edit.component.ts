import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  name: string;
  age: string;
  mail: string;
  id: number;

  constructor(private router: ActivatedRoute, private usersService: UsersService) {
  }

  ngOnInit(): void {
    const user = this.usersService.getUserById(this.router.snapshot.paramMap.get('id'));
    console.log(user);
    this.name = user.name;
    this.age = user.age;
    this.mail = user.mail;
    this.id = user.id;
  }

  editUser($event: MouseEvent): void {
    const user = {
      name: this.name,
      age: this.age,
      mail: this.mail
    };

    this.usersService.editUser(this.id, user);
  }
}
