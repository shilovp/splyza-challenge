import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { VideoService } from './services/video.service';
import { Video } from './interfaces/video';
import { User } from './interfaces/user';
import { GridListService } from './services/grid-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'splyza-challenge';
  videos: Array<Video> = [];
  user: User | null = null
  isGrid = true;

  constructor(private _userService: UserService, private _videoService: VideoService, private _gridListService: GridListService) {}

  ngOnInit(): void {
      this._userService.getCurrentUser().subscribe((response) => {
        this.user = response;
      });
  }

  onIsGridUpdate(isGrid: boolean) {
    this.isGrid = isGrid;
    this._gridListService.setIsGrid(isGrid);
  }
}
