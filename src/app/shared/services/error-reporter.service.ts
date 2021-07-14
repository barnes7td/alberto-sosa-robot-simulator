import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorReporterService {
  private errorMsgs = new Subject<string>();


  constructor() { }

  public getError(): Observable<string>{
    return this.errorMsgs.asObservable();
  }

  public updateError(message: string): void {
    this.errorMsgs.next(message);
  }


}
