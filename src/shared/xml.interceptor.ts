import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import * as jsontoxml from 'jsontoxml';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class XMLInterceptor<T> implements NestInterceptor<T, string> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<string> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    const regex = /\/xml/gi;
    const requestedXML = request.headers['content-type'].match(regex);

    return next.handle().pipe(map((data) => (requestedXML && typeof data === 'object' ? jsontoxml(data) : data)));
  }
}
