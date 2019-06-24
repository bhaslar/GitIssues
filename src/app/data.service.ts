import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getOneWeekOfIssues(){
    var searchDate = new Date();
    searchDate.setDate(searchDate.getDate()-7);
    return this.http.get('https://api.github.com/search/issues?q=created>'+searchDate.getDate()+'&sort=stars&order=desc');
  }

}
