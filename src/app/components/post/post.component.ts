import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private service: DataService) { }

  ngOnInit(): void {
    // let postId = this.activeRoute.snapshot.paramMap.get("id");
    // this.service.getDataPost(+postId)
    // .subscribe(p => console.log(p));
  }

}
