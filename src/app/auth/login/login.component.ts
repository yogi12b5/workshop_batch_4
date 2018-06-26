import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import { FormsModule, FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import {Login} from '../../apex/entities/login.entity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  UserDetailsForm:FormGroup;
  login:Login = new Login();
 emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor(private authService:AuthService, private formBuilder:FormBuilder,private router:Router) { 
    this.UserDetailsForm = this.formBuilder.group({
      'email':[null,[Validators.required,Validators.pattern(this.emailPattern)]],
      'password':[null,[Validators.required,Validators.minLength(5)]]
    })
  }

  ngOnInit() {
  }
  Login(){
   console.log(this.authService.login('dasasfd')) 
   console.log(this.UserDetailsForm)
   console.log(this.login)
   this.authService.login(this.login).subscribe(res=>{
     console.log(res)
     if(res.status === 200){
       this.router.navigate(['/userslist'])
     }
   })
    
  }
  signup(){
    this.router.navigate(['/register'])
  }
}
