import { ComponentFactoryResolver } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ErrorReporterService } from '../shared/services/error-reporter.service';

import { ErrorCardComponent } from './error-card.component';

describe('ErrorCardComponent', () => {
  let component: ErrorCardComponent;
  let fixture: ComponentFixture<ErrorCardComponent>;
  let service: ErrorReporterService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorCardComponent ],
      providers:[ErrorReporterService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorCardComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ErrorReporterService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should display errors', () => {
    component.errors = ['generic error'];
    fixture.detectChanges();
    const hostElem = fixture.debugElement;
    const italicsElem = hostElem.query(By.css('i'));
    const i: HTMLElement = italicsElem.nativeElement;
    expect(i.textContent).toBe('generic error');
  });

  it('should remove errors', () => {
    component.errors = ['generic error', 'error 2', 'error 3'];
    component.removeError('error 2');
    expect(component.errors.length).toBe(2);
  });

  it('should update errors list', () => {
    component.errors = [];
    service.updateError('error');
    expect(component.errors.length).toBe(1);
  });
});
