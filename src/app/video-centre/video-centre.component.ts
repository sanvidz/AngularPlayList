import { Component, OnInit } from '@angular/core';
import { VideoService } from './../shared/video.service';
import { Video } from '../base/models/video';

@Component({
  selector: 'app-video-centre',
  templateUrl: './video-centre.component.html',
  styleUrls: ['./video-centre.component.css'],
  providers: [VideoService]
})
export class VideoCentreComponent implements OnInit {

  videos: Array<Video>;

  selectedVideo: Video;
  hideNewVideo: boolean = true;

  constructor(private _videoService: VideoService) { }

  ngOnInit() {
    this._videoService.getVideos()
      .subscribe(
        resVideoData => this.videos = resVideoData
      );
  }


  onSelectVideo(video: any) {
    this.selectedVideo = video;
    this.hideNewVideo = true;
    console.log(this.selectedVideo);
  }

  onSubmitAddVideo(video: Video) {
    this._videoService.addVideo(video)
      .subscribe(resNewVideo => {
        this.videos.push(resNewVideo);        // for reflecting in the UI
        this.hideNewVideo = true;
        this.selectedVideo = resNewVideo;
        //this.notificationService.success("New Video Added Successfully !!");
      });
  }

  onUpdateVideo(video: any) {
    this._videoService.updateVideo(video)
      .subscribe(resUpdateVideo => {
        video = resUpdateVideo;
        this.selectedVideo = null;
        //this.notificationService.success("Video Updated Successfully !!");
      });
  }

  onDeleteVideo(video: any) {
    let videoArray = this.videos;
    this._videoService.deleteVideo(video)
      .subscribe(resDeleteVideo => {
        for (let i = 0; i < videoArray.length; i++) {
          if (videoArray[i]._id === video._id) {
            videoArray.splice(i, 1);   // for reflecting in the UI
          }
        }
      });
    this.selectedVideo = null;
    //this.notificationService.warn("!! Video Deleted .....");
  }

  newVideo() {
    this.hideNewVideo = false;
  }

}
