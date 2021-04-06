import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ErrorReporterService } from '../shared/services/error-reporter.service';

@Component({
  selector: 'app-error-card',
  templateUrl: './error-card.component.html',
  styleUrls: ['./error-card.component.scss']
})
export class ErrorCardComponent implements OnInit {

  public errors: [string] = [''];
  public subscription: Subscription;

  public errMsgs: Observable<string[]>;


  constructor(private errorService: ErrorReporterService) { }

  ngOnInit(): void {
    this.subscription = this.errorService.getError().subscribe(msg => {console.log(msg); this.errors.push(msg)} );
  }



}
