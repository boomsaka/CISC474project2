import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodsComponent } from './apods.component';

describe('ApodsComponent', () => {
  let component: ApodsComponent;
  let fixture: ComponentFixture<ApodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
