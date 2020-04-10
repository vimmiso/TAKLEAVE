import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveconfigComponent } from './leaveconfig.component';

describe('LeaveconfigComponent', () => {
  let component: LeaveconfigComponent;
  let fixture: ComponentFixture<LeaveconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
