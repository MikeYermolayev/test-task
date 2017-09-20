import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { Post, Comment } from '../models';


@Injectable()
export class PostsService {
  constructor (
    private apiService: ApiService,
  ) {}

  getPosts(): Promise<Post[]> {
    return this.apiService.get('/posts')
    			.then(posts => posts.map(post => new Post(post)));
  }

  getPost(id): Promise<Post> {
    return this.apiService.get(`/posts/${id}`)
    			.then(post => new Post(post));
  }

  getCommentsForPost(id): Promise<Comment[]> {
  	return this.apiService.get(`/posts/${id}/comments`)
    			.then(comments => comments.map(comment => new Comment(comment)));
  }
}
