import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

import { Post } from '../../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
  ) {}

  ngOnInit(): void {
    // We actually get the current active route from ActivatedRoute
    // To get a param: id(here) from the current active route
    const id = +this.route.snapshot.paramMap.get('id');
    // console.log(id);
    this.postService.getPost(id).subscribe((post) => (this.post = post));
  }
}
