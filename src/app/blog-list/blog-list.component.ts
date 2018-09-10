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
  prevsVal;
  throttle = 20;
  scrollDistance = 1;
  finished = true;



  constructor(private _blogService: BlogService) { }

  ngOnInit() {
    this._blogService.getBlog()
      .subscribe(data => this.blogs = data.slice(0, this.showBlog));
  }

  onScrollDown () {
    console.log('scrolled down!!');
    this.prevsVal = this.showBlog;
    this.showBlog += 2 ;
    this.finished = false;
    this._blogService.getBlog()
      .subscribe(data => {data.slice(this.prevsVal, this.showBlog).filter(x=> this.blogs.push(x)); this.finished = true;}
    );
  }
  }
