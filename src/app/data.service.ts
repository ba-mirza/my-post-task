import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  consoleText(arg: any): void {
    console.log(arg);
  }

  public posts: Array<any> = [
    {
      id: 1,
      title: 'Trie in Javascript: the Data Structure behind Autocomplete',
      contents:
        "Trie is a variation of tree data structure. It's also referred to as prefix tree or a variation of search tree. Just like n-ary tree data structure, a trie can have n children stemming from single parent. Usually all the nodes in a trie would store some character. Assuming we're only dealing with English words, here's how a simple trie may look like:",
    },
    // {
    //   id: 2,
    //   title: 'HTTP Refresher: Things You Should Know About HTTP',
    //   contents:
    //     'HTTP(Hyper Text Transfer Protocol) is one of many protocols used for transferring data (think of html pages, text, images, videos and much more) across machines. There are other application layer protocols like FTP, SMTP, DHCP etc.',
    // },
  ];

  longText: string =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
  // public API_URL: string = "https://616e819b715a630017b39610.mockapi.io/";

  constructor(private http: HttpClient) {}

  private API_POSTS = '/data';
  private API_USERS = '/users';

  public getPosts(): Observable<Array<any>> {
    return this.http.get<any[]>(
      `https://616e819b715a630017b39610.mockapi.io${this.API_POSTS}`
    );
  }

  // public getDataPost(postId: number) {
  //   return this.http.get(
  //     `https://616e819b715a630017b39610.mockapi.io${this.API_POSTS} + '/' + ${postId}`
  //   );
  // }

  public getUsers(): Observable<Array<any>> {
    return this.http.get<any[]>(
      `https://616e819b715a630017b39610.mockapi.io/${this.API_USERS}`
    );
  }
}
