import { Injectable, Injector } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable()
export class appService {
  constructor(private injector: Injector) {
  }

}
