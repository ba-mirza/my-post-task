import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { GetPostsInterface } from 'src/app/types/getPostsInterface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

  public post: any;

  constructor(private activeRoute: ActivatedRoute, private service: DataService) {
    this.service.getPosts().subscribe((post): GetPostsInterface => this.post = post);
  }
  
  ngOnInit(): void {}

}
