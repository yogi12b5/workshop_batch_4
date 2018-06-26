import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {AuthModule} from './auth/auth.module';
import {WorkshopMoule} from './workshop/workshop.module';
import {AuthService} from './auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    WorkshopMoule,
    AuthModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
