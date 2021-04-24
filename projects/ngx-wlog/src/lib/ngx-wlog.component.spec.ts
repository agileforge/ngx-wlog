import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWlogComponent } from './ngx-wlog.component';

describe('NgxWlogComponent', () => {
  let component: NgxWlogComponent;
  let fixture: ComponentFixture<NgxWlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxWlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxWlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
