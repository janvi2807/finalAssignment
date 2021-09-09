import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PhotosService {
title! :string;
url!:string;
thumbnailUrl!:string;
  constructor(private http:HttpClient) { }
gettitle(){
  return this.title;
}
geturl(){
  return this.url;
}
getthumbnailUrl(){
  return this.thumbnailUrl;
}
getPhoto() {
  return this.http.get('https://jsonplaceholder.typicode.com/photos');
}

postDataSet(data: any): Observable<any> {
  return this.http.post('https://jsonplaceholder.typicode.com/photos', data);
}

settitle(title: string){
  this.title=title;
}
seturl(url: string){
  this.url=url;
}
setthumbnailUrl( thumbnailUrl: string){
  this.thumbnailUrl=thumbnailUrl;
}
}


