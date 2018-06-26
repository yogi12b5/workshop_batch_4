import {Injectable} from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Props} from '../apex/common/props'
import { Observable } from 'rxjs';

@Injectable()
export class AuthService{
    private host = Props.API_END_POINT;

    private url = '';
    constructor(private http:Http){

    }

    login(data:any):Observable<any>{
        this.url = this.host + 'login'
       return this.http.post(this.url,data).pipe(res=>{
           return res;
       })
    }
    register(data){
        this.url = this.host + 'register'

        return this.http.post(this.url,data).pipe(res=>{
            return res;
        })
    }
}