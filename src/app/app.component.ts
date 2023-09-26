import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'splyza-challenge';

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
      this._userService.getCurrentUser().subscribe((r) => {
        console.log('current user: ', r);
      })
  }
}
