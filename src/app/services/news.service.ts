import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

getNews() {
  return this.http.get("https://newsapi.org/v2/everything?q=tesla&from=2022-05-23&sortBy=publishedAt&apiKey=5e1e7d58fef242b4b0354c949518b9f4");
}
}
