import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router) { }

  public isError:boolean = false;
  public errorMessage:string = "Please enter name";
  public userName:string="";
  public password:string="";

  ngOnInit(): void {
  }
  
  login(){
    let isLoggedIn = this.loginService.validateUser(this.userName,this.password);

    if(!isLoggedIn){
      this.isError = true;
      this.errorMessage = "Invalid credentials";
      return;
    }

    this.isError = false;
    this.router.navigate(["/home"]);
  }
}
