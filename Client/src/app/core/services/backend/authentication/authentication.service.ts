// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import decode from 'jwt-decode';

@Injectable()
export class AuthenticationService {

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public hasToken(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  public setToken(token: string) {
    localStorage.setItem('token', token);
  }
/*
  public isAuthenticated(): boolean {
    const token = this.getToken();

    return tokenNotExpired(null, token);
  }*/

}