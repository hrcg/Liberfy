import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, Routes } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  posts: any;
  constructor(public authservice: AuthService, private router: Router, private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(data => {
      console.log(data);
      this.posts = data;
    });
  }

}
