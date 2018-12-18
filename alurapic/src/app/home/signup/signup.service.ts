import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from './new-user';


const API = "http://localhost:3000";


@Injectable()
export class SignupService{
    constructor(private http: HttpClient){

    }

    checkUserNameTaken(userName: string){
        return this.http.get(API + '/user/exists/' + userName);
    }

    signup(newUser: NewUser){
        return this.http.post(API + '/user/signup', newUser);
    }
}