import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username="";
  password="";
  errormsg=""

  constructor(private auth:AuthService,private router:Router){}
  ngOnInit(): void {
    
  }
  login(){
    if (this.username.trim().length===0){
      this.errormsg="*Username Is Required"
    }
    else if(this.password.trim().length===0){
      this.errormsg="*Password Is Required"
    }else{
      this.errormsg="";
      let res=this.auth.login(this.username,this.password);{
        if(res==200){
          this.router.navigate(['home']);
        }
        if(res==403){
          this.errormsg="*Invalid Credentials"
        }
      }
    }
}}
