import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../base/models/video';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() videos;
  @Output() SelectVideo = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  onSelect(vid: Video) {
    this.SelectVideo.emit(vid);
  }

}
