import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} 

from '@angular/common/http';

@Injectable()
export class OAuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers
        .set('Access-Control-Allow-Origin', '*')
    });
    return next.handle(authReq);
  }
}