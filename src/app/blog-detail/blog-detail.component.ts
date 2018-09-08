import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blogId;
  blog;
  constructor(private route: ActivatedRoute, private _blogService: BlogService) { }

  ngOnInit() {
    let Id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.blogId = Id;
    this._blogService.getBlog()
       .subscribe(data => this.blog = data.filter(x => x.id === Id)); 
  }

}