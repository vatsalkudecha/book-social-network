// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { TokenService } from '../token/token.service';

// @Injectable()
// export class HttpTokenInterceptor implements HttpInterceptor {

//   constructor(
//     private tokenService: TokenService
//   ) {

//   }
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//     const token = this.tokenService.token;

//     if (token) {
//       const authRequest = req.clone({
//         headers: new HttpHeaders({
//           Authorization: 'Bearer ' + token
//         })
//       });
//       return next.handle(authRequest);
//     }
//     return next.handle(req);
//   }
// }

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.tokenService.token;
    if (token) {
      const authReq = request.clone({
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token
        })
      });
      return next.handle(authReq);
    }
    return next.handle(request);
  }
}