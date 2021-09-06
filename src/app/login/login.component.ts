import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogapiService } from '../blogapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  response;
  constructor(private frmb:FormBuilder,
              private router:Router,
              private blogapi: BlogapiService
             ) {
              this.loginForm=this.frmb.group({
                username:['',[Validators.required]],
                password:['',[Validators.required]]
              });
           }

  ngOnInit(): void {
  }
  onSubmit(){
    this.blogapi.login('users/login',this.loginForm.value).subscribe(res=>{
      // console.log(res);
      this.response=res; 
      alert(this.response.message);
      this.loginForm.reset();
      if(this.response.success==1){
        localStorage.setItem('token',this.response.token);
        localStorage.setItem('name',this.response.data.name);
        this.router.navigateByUrl('/blogs');
      }
    });
  }

}
