import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultifilterTableComponent } from './multifilter-table.component';

describe('MultifilterTableComponent', () => {
  let component: MultifilterTableComponent;
  let fixture: ComponentFixture<MultifilterTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultifilterTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultifilterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
