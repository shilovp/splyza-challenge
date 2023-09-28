import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reaction, VideoReactionType } from 'src/app/interfaces/reaction';
import { User } from 'src/app/interfaces/user';
import { Video } from 'src/app/interfaces/video';
import { UserService } from 'src/app/services/user.service';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {
  video: Video | null = null;
  updatedTitle: string = '';
  currentUser: User | null = null;
  reactions: Array<Reaction> = [];

  constructor(private _videoService: VideoService, private _route: ActivatedRoute,
    private _userService: UserService) { }

  ngOnInit(): void {
    const videoId = this._route.snapshot.paramMap.get('videoId');
    this.getVideo(videoId);
    this.getReactions(videoId);

    this._userService.getCurrentUser().subscribe((response) => {
      this.currentUser = response;
    })
  }

  getVideo(videoId: string | null) {
    this._videoService.getVideo(videoId).subscribe((response) => {
      this.video = response;
      console.log(this.video);
    });
  }

  getReactions(videoId: string | null) {
    this._videoService.getReactions(videoId).subscribe((response) => {
      this.reactions = response;
    });
  }

  saveVideoTitle() {
    if (this.video) {
      this.video = { ...this.video, title: this.updatedTitle };
      this._videoService.saveVideo(this.video).subscribe((response) => {
        this.updatedTitle = '';
      });
    }
  }

  sendReaction(type: string) {
    if (this.currentUser && this.video) {
      const player = document.getElementById('videoPlayer') as HTMLVideoElement;
      const reaction: Reaction = {
        videoId: this.video?.id || '',
        type: type === 'snapshot' ? VideoReactionType.snapshot : VideoReactionType.star,
        timeframe: player.currentTime,
        author: this.currentUser,
        video: this.video
      };
      this._videoService.sendReaction(reaction).subscribe((response) => {
        console.log('reaction sent: ', response);
        this.getReactions(this.video?.id || null);
      });
    }
  }

  resolveReactionType(type: VideoReactionType) {
    return type === VideoReactionType.snapshot ? 'snapshot-icon.svg' : 'star-icon.svg';
  }

  updateTitle(event: any) {
    this.updatedTitle = event.target.value;
  }

  resolveTimeframe(timeframe: number) {
    return new Date(timeframe * 1000).toISOString().substr(11, 8);
  }

  gotToTimeframe(timeframe: number) {
    const player = document.getElementById('videoPlayer') as HTMLVideoElement;
    player.currentTime = timeframe;
  }
}
