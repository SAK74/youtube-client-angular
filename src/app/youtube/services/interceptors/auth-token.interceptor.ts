import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const APIKEY = 'AIzaSyCJ5Nb9W6ec2IlV8SqjK49upIhwkBDib-s';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const cloneReq = req.clone({ params: req.params.append('key', APIKEY) });
    return next.handle(cloneReq);
  }
}
