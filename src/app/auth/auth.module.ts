import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import {AuthService} from './auth.service';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'setpassword', component: SetpasswordComponent }
];

@NgModule({
    imports: [CommonModule,
         FlexLayoutModule,
         MatInputModule,
         HttpClientModule,
         HttpModule,
         ReactiveFormsModule,
         FormsModule,
        MatCardModule, RouterModule.forRoot(routes, {useHash: false} )
    ],

    declarations: [LoginComponent, RegisterComponent, SetpasswordComponent],
    exports: [RouterModule, MatCardModule, FlexLayoutModule,FormsModule, ReactiveFormsModule,MatFormFieldModule, MatInputModule,HttpClientModule,HttpModule],
    providers: [AuthService]
})

export class AuthModule {


}
