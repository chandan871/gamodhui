import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesthomepageComponent } from './testhomepage.component';

describe('TesthomepageComponent', () => {
  let component: TesthomepageComponent;
  let fixture: ComponentFixture<TesthomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesthomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesthomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
