import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  posts: any;
  constructor(public authservice: AuthService, private router: Router, private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(data => {
      console.log(data)
      this.posts = data;
    })
  }

}
