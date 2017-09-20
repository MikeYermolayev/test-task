import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Post } from '../../models';

import { PostsService } from '../../services';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  rows: Object[] = [];
  columns: Object[] = [
    { prop: 'id' },
    { prop: 'userId' },
    { prop: 'title' }
  ];

  constructor(
    private router: Router,
  	private postsService: PostsService
  ) {}

  ngOnInit() {
    this.postsService.getPosts()
        .then(posts => {
          this.rows = posts;
        })
        .catch(console.error);
  }

  onSelect({ selected }) {
    const selectedPost = selected[0];

    this.router.navigate(['/post', selectedPost.id])
  }

}
