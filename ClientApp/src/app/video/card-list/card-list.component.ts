
import { Component, OnInit } from '@angular/core';
import { Objcard } from 'src/app/model';
import { VideoService } from 'src/app/video.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit{
  data:Array<Object>=[];

  
  constructor(private videoservice:VideoService){}

  ngOnInit():void {
    this.data= this.videoservice.getAllVideo();
    
  }
  
}
