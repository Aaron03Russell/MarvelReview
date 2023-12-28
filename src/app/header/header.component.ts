import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  constructor(private router:Router,private auth:AuthService){ }
  ngOnInit(): void {
    
  }
  gotohome(){
     this.router.navigate(['home'])
  }
  logout(){
    this.router.navigate(['login'])

  }

}
