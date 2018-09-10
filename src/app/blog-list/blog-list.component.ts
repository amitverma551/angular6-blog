import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  public blogs =[];
  showBlog= 2;
  throttle = 20;
  scrollDistance = 1;
  finished = false;



  constructor(private _blogService: BlogService) { }

  ngOnInit() {
    this._blogService.getBlog()
      .subscribe(data => this.blogs = data.slice(0, this.showBlog));
  }

  onScrollDown () {
    console.log('scrolled down!!');
    this.finished = true;
    this.showBlog += 2 ;
    this._blogService.getBlog()
      .subscribe(data => this.blogs = data.slice(0, this.showBlog)
    );
  }
  }
