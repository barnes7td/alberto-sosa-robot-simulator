import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorCardComponent } from 'src/app/error-card/error-card.component';
import { CanvasService } from './canvas.service';

import { ErrorReporterService } from './error-reporter.service';

describe('ErrorReporterService', () => {
  let component: ErrorCardComponent;
  let fixture: ComponentFixture<ErrorCardComponent>;
  let service: ErrorReporterService;
  let canvas: CanvasService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorCardComponent ],
      providers: [ErrorReporterService, CanvasService]
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorCardComponent);
    component = fixture.componentInstance;
    canvas = TestBed.inject(CanvasService);
    service = TestBed.inject(ErrorReporterService);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  it('should emit and provide observable values', () => {
    component.errors = [];
    canvas.validateBound(5, 'asdf');
    fixture.detectChanges();
    expect(component.errors.length).toBe(1);
  });


});
