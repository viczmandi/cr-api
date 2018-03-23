import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DominantComponent } from './dominant.component';

describe('DominantComponent', () => {
  let component: DominantComponent;
  let fixture: ComponentFixture<DominantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DominantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DominantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
