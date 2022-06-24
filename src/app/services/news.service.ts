import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

   url = environment.urlNewsApi;
  constructor(private http: HttpClient) { }

getNews() {
  const query = {
    q: "tesla", 
    from: "2022-05-23",
    sortBy: "publishedAt",
    apiKey: "5e1e7d58fef242b4b0354c949518b9f4"
  }
  //this.url + '/v2/everything
  return this.http.get(` ${this.url}/v2/everything` ,{params: query});
}
}
