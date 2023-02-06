import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class firstInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {     
      req = req.clone({headers: req.headers.set('TokenNo','vk210@12')});
      return next.handle(req);
    }    
}