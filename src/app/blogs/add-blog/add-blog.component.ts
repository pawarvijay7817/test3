import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogapiService } from 'src/app/blogapi.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  addBlog:FormGroup;
  img;
  response;
  constructor(private formbuilder:FormBuilder,
              private router:Router,
              private blogapi:BlogapiService,
              ) {
            this.addBlog=formbuilder.group({
              title:['',[Validators.required]],
              description:['',[Validators.required]],
              image:['',[Validators.required]]
            });
          }

  ngOnInit(): void {
  }
        
  get title(){return this.addBlog.get('title');}
  get description(){return this.addBlog.get('description');}
  get image(){return this.addBlog.get('image');}
  
  imageChange(event){
    this.img=event.target.files[0];
    console.log(this.img);
  }

  onSubmit(){
    console.log(this.addBlog.value);
    let formdata=new FormData;
    formdata.append('title',this.addBlog.value.title);
    formdata.append('description',this.addBlog.value.description);
    formdata.append('image',this.img);
    // formdata.append('token',localStorage.getItem('token'));
    formdata.append('author',localStorage.getItem('name'));

    this.blogapi.post('blogs/add',formdata).subscribe(res=>{
      this.response=res;
      alert(this.response.message);
      this.addBlog.reset();
      if(this.response.success=="1"){
        this.router.navigateByUrl('/blogs');
      }
    });

  }

}
