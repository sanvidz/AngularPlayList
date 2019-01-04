import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { VideoCentreComponent } from './video-centre/video-centre.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { VideoListComponent } from './video-list/video-list.component';
import { SafeUrlPipe } from './safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoCentreComponent,
    VideoDetailComponent,
    VideoListComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
