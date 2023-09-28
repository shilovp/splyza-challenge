import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { VideoService } from './services/video.service';
import { Video } from './interfaces/video';
import { User } from './interfaces/user';
import { GridListService } from './services/grid-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'splyza-challenge';
  videos: Array<Video> = [];
  user: User | null = null;
  isGrid = true;

  constructor(private _userService: UserService, private _videoService: VideoService,
    private _gridListService: GridListService, private _router: Router) { }

  ngOnInit(): void {
    this._userService.getCurrentUser().subscribe((response) => {
      this.user = response;
    });
  }

  onIsGridUpdate(isGrid: boolean) {
    this.isGrid = isGrid;
    this._gridListService.setIsGrid(isGrid);
  }

  isInDetails(): boolean {
    return this._router.url.includes('details');
  }

  navigateBack() {
    this._router.navigate(['videos']);
  }
}
