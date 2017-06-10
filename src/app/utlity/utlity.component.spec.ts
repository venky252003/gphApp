import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtlityComponent } from './utlity.component';

describe('UtlityComponent', () => {
  let component: UtlityComponent;
  let fixture: ComponentFixture<UtlityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtlityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtlityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
