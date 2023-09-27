import { Component, Input } from '@angular/core';
import { Video } from 'src/app/interfaces/video';
import { GridListService } from 'src/app/services/grid-list.service';

@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: ['./video-preview.component.scss']
})
export class VideoPreviewComponent {
  @Input()
  video: Video | null = null;

  constructor(public _gridListService: GridListService) {}
}
