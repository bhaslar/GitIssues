import { Component } from '@angular/core';
import { DataService } from '../app/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'git-issues';
  issues: Object;

  constructor(private data: DataService){}

  ngOnInit(){
    this.data.getOneWeekOfIssues().subscribe(items => {
      this.issues = items;
      console.log(this.issues);
    })
  }
}
