import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  public blogs =[];
  constructor(private _blogService: BlogService) { }

  ngOnInit() {
    this._blogService.getBlog()
      .subscribe(data => this.blogs = data);
  }
  }
