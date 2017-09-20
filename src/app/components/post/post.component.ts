import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Comment, Post } from '../../models';

import { PostsService } from '../../services';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
	comments: Comment[] = [];
	post: Post;

  constructor(
  	private route: ActivatedRoute,
  	private postsService: PostsService
  ) {}

  ngOnInit() {
  	const id = this.route.snapshot.paramMap.get('id');

  	this.postsService.getPost(id)
  			.then(post => this.post = post)
  			.catch(console.error);

    this.postsService.getCommentsForPost(id)
    		.then(comments => this.comments = comments)
    		.catch(console.error);
  }

}
