import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

// https://www.techiediaries.com/angular/angular-8-7-tutorial-example-rest-api-httpclient-get-ngfor/

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe( (data) => {
      console.log(data);
      this.posts = data;
    });
  }

}
