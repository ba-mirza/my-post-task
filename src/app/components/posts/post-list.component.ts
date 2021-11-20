import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { GetPostsInterface } from 'src/app/types/getPostsInterface';
@Component({
  selector: 'app-list-posts',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {

  public posts: any;

  constructor(private service: DataService) {
    this.service.getPosts().subscribe((post): GetPostsInterface => this.posts = post)
  }

  ngOnInit(): void {

  }
}
