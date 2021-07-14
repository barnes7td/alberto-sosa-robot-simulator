import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitLoadingComponent } from './init-loading.component';

describe('InitLoadingComponent', () => {
  let component: InitLoadingComponent;
  let fixture: ComponentFixture<InitLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
