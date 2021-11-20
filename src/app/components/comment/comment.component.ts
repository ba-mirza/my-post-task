import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  coms: string[] = [];
  comsText: any;

  constructor() {}

  ngOnInit(): void {
    const exisiting = localStorage.getItem('coms');
    this.coms = JSON.parse(exisiting as string) || [];
  }

  ngSubmit(){
    this.coms.push(this.comsText);
    localStorage.setItem('coms', JSON.stringify(this.coms));
    this.comsText = '';
  }

}
