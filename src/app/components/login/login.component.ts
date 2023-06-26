import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  signUpUsers: any[] = [];

  signUpObj: any = {
    userName:  '',
    email: '',
    password: ''
  }

  loginObj:any = {
    email: '',
    password: ''
  }


  constructor(private router:Router){}

  ngOnInit(): void{
   const locaData = localStorage.getItem('signUpUsers');
   if(locaData != null){
    this.signUpUsers = JSON.parse(locaData);
   }
  }


  onSignup(){
    this.signUpUsers.push(this.signUpObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signUpUsers));
    this.signUpObj = {
      userName:  '',
      email: '',
      password: ''
    }
  }

  onLogin(){
    // debugger 
    const isUserExist = this.signUpUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
    if(isUserExist != undefined){
      alert('user logged in successfully!');
      this.router.navigateByUrl('profile')
    }
    else{
      alert('Wrong credentials')
    }
  }

 


}
