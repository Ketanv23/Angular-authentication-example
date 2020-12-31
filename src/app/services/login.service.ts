import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router) { }

  validateUser(userName:string,password:string){
     if(userName == "admin" && password=="admin"){
       sessionStorage.setItem("isLoggedIn","yes");
       return true;
     } else{
      return false;
     }
  }

  isLoggedIn(){
    if(sessionStorage.getItem("isLoggedIn") == "yes"){
      return true;
    }else{
      return false;
    }
  }

  logoutUser(){
    sessionStorage.setItem("isLoggedIn","no");
  }
}
