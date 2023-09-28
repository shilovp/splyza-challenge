import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'videos', pathMatch: 'full'
  },
  {
    path: 'videos', component: VideoListComponent, title: 'Videos',
  },
  {
    path: 'videos/details/:videoId', component: VideoDetailsComponent, title: 'Details',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
