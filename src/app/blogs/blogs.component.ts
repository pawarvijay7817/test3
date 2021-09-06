import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogapiService } from '../blogapi.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  response;
  blogs;
  baseurl='';
  constructor(private router:Router,
              private blogapi:BlogapiService ) { 
        this.baseurl=blogapi.url;

        }

  ngOnInit(): void {
    this.getblogs();
  } 
  getblogs(){
    this.blogapi.get('blogs/').subscribe(res=>{
      this.response=res;
      this.blogs=this.response.data;
      console.log(res);
    })
  }

}
