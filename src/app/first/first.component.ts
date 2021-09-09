import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl,FormGroupName} from '@angular/forms';
import { Router } from '@angular/router';
import { PhotosService } from '../services/photos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  InputData!: FormGroup;
  img1: any;
  img2: any;
  user:any;

  constructor(
    private photoService: PhotosService,
    private formBuilder: FormBuilder,
    private router: Router,
    private http:HttpClient


  ) {}

  ngOnInit(): void {
    this.InputData = this.formBuilder.group({
      title: [''],
      url:[''],
      thumbnailUrl:[''],
    });
  }

  onUpload() {
    this.photoService.settitle(this.InputData.value.title);
    this.photoService.seturl(this.img1);
    this.photoService.setthumbnailUrl(this.img2);
    this.photoService.postDataSet(this.InputData.value);

    this.InputData.reset({});
    this.router.navigate(['third']);
   
  }


  onChange(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.img1 = (<FileReader>event.target).result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  onChange1(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.img2 = (<FileReader>event.target).result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  JsonPlaceholderPhotos(){
    this.router.navigate(['second']);
  }
}