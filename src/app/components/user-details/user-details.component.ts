import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: any;

  constructor(private router: ActivatedRoute, private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.user = this.usersService.getUserById(this.router.snapshot.paramMap.get('id'));
  }

  deleteUser($event: MouseEvent) {
    this.usersService.deleteUserById(this.user.id);
  }
}
