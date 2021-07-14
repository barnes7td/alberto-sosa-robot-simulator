import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ErrorReporterService } from '../shared/services/error-reporter.service';

@Component({
  selector: 'app-error-card',
  templateUrl: './error-card.component.html',
  styleUrls: ['./error-card.component.scss']
})
export class ErrorCardComponent implements OnInit, OnDestroy{

  public errors: string[] = [];
  public subscription: Subscription;



  constructor(private errorService: ErrorReporterService) { }

  ngOnInit(): void {
    this.subscription = this.errorService.getError().subscribe(msg => { msg === 'clear' ? this.errors = [] : this.errors.push(msg); } );
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

  removeError(err: string): string[]{
    return this.errors = this.errors.filter(elem => elem !== err);
  }



}
