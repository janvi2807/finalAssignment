import { Component, OnInit } from '@angular/core';
import { Router , Routes } from '@angular/router';
import { PhotosService } from '../services/photos.service';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  photos=[
    {
      title:'',
      url:'',
      thumbnailUrl:'',
    }
  ];
  Image:any;
  constructor(private photoService:PhotosService, private Router:Router) { }

  ngOnInit(): void {
    this.photoService.getPhoto().subscribe((res)=>{
      this.Image=res;
      for(let i = 0; i<1000;i++)
      {
        if(i < 999) this.pushObject();
      this.photos[i].title = this.Image[i]?.title;
      this.photos[i].url = this.Image[i]?.url;
      this.photos[i].thumbnailUrl = this.Image[i]?.thumbnailUrl;
      console.log(this.photos[i].thumbnailUrl);
      }
      
    });
  }
  pushObject() {
    this.photos.push({
      title: '',
      url:'',
      thumbnailUrl: '',
    });
  }

  SystemImagesPhotos(){
    this.Router.navigate(['first']);
  }
}