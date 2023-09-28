import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from 'src/app/interfaces/video';
import { GridListService } from 'src/app/services/grid-list.service';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  videos: Array<Video> = [];

  constructor(private _videoService: VideoService, public _gridListService: GridListService,
    private _router: Router) { }

  ngOnInit(): void {
    this._videoService.getVideoList().subscribe((response) => {
      this.videos = response;
    });
  }

  openVideo(videoId: string) {
    this._router.navigate(['videos/details', videoId]);
  }
}
