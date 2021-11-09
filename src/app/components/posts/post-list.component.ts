import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

export interface dbPosts {
  id: number;
  title: string;
  contents: string;
}

@Component({
  selector: 'app-list-posts',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {

  public content:string = "";
  public posts = [];

  constructor(private service: DataService) {
    this.service.consoleText("hw");
    this.content = this.service.longText;
  }

  ngOnInit(): void {
    this.service.getPosts().subscribe((posts: any) => this.posts = posts);
    console.log(this.posts);
  }
}
