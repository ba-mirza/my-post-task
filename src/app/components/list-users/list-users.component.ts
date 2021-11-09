import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


export interface dbUser {
  authorId: number;
  author: string;
  email: string;
  description: string;
}

const USERS_DATA: dbUser[] = [
  {authorId: 1, author: 'Anish Kumar', email: "anish@api.com", description: 'i am backend developer and i love programming'},
  {authorId: 2, author: 'James Ksioksi', email: "jamesksi@api.com", description: 'i am front-end developer and i love programming'},
  {authorId: 3, author: 'Casy Marondo', email: "casuy699@api.com", description: 'i dont see difference between react and angular'}
];

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  displayedColumns: string[] = ['authorId', 'author', 'email', 'description'];
  dataSource = new MatTableDataSource(USERS_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
